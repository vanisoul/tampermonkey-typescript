// ==UserScript==
// @name         Netflix 增強器
// @version      1.0.0
// @description  Netflix 自動跳過簡介、下一集，以及播放速度控制
// @author       Vanisoul
// @match        https://*.netflix.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// ==/UserScript==

import { useGmMenu } from "@/composable/use-menu";
import { useGmValue } from "@/composable/use-value";
import { appendComponentToElement } from "@/lib/react-mount-after";
import React, { useEffect, useCallback, useRef } from "react";

interface NetflixEnhancerSettings {
  skipIntroEnabled: boolean;
  nextEpisodeEnabled: boolean;
  defaultPlaybackSpeed: number;
  speedControlEnabled: boolean;
}

const DEFAULT_SETTINGS: NetflixEnhancerSettings = {
  skipIntroEnabled: true,
  nextEpisodeEnabled: true,
  defaultPlaybackSpeed: 1,
  speedControlEnabled: true,
};

const PLAYBACK_SPEEDS = [0.5, 0.75, 1, 1.25, 1.5];

function NetflixEnhancer() {
  const { data: settings, updateData: updateSettings } = useGmValue<NetflixEnhancerSettings>(
    "netflix-enhancer-settings",
    DEFAULT_SETTINGS,
  );

  const observerRef = useRef<MutationObserver | null>(null);
  const lastSpeedApplied = useRef<number | null>(null);
  const nextEpisodeCheckInterval = useRef<NodeJS.Timeout | null>(null);

  const skipIntroSelector = 'button[data-uia="player-skip-intro"]';
  const nextEpisodeSelector = 'button[data-uia="next-episode-seamless-button"]';
  const videoSelector = "video";

  const clickButton = useCallback((selector: string, debugName: string) => {
    const button = document.querySelector(selector) as HTMLButtonElement;
    if (button) {
      console.log(`Netflix Enhancer: 點擊${debugName}按鈕`, button);
      button.click();
      return true;
    }
    return false;
  }, []);

  const applyPlaybackSpeed = useCallback(() => {
    if (!settings.speedControlEnabled) return;

    const video = document.querySelector(videoSelector) as HTMLVideoElement;
    if (video && video.playbackRate !== settings.defaultPlaybackSpeed) {
      if (lastSpeedApplied.current !== settings.defaultPlaybackSpeed) {
        video.playbackRate = settings.defaultPlaybackSpeed;
        lastSpeedApplied.current = settings.defaultPlaybackSpeed;
      }
    }
  }, [settings.speedControlEnabled, settings.defaultPlaybackSpeed]);

  const handleDOMChanges = useCallback(() => {
    if (settings.skipIntroEnabled) {
      clickButton(skipIntroSelector, "跳過簡介");
    }

    if (settings.nextEpisodeEnabled) {
      clickButton(nextEpisodeSelector, "下一集");
    }

    applyPlaybackSpeed();
  }, [settings.skipIntroEnabled, settings.nextEpisodeEnabled, clickButton, applyPlaybackSpeed]);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (nextEpisodeCheckInterval.current) {
      clearInterval(nextEpisodeCheckInterval.current);
    }

    observerRef.current = new MutationObserver(() => {
      handleDOMChanges();
    });

    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // 專門為下一集按鈕設置的檢查間隔，因為它出現時機較晚
    nextEpisodeCheckInterval.current = setInterval(() => {
      if (settings.nextEpisodeEnabled) {
        clickButton(nextEpisodeSelector, "下一集 (定時檢查)");
      }
    }, 2000);

    handleDOMChanges();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (nextEpisodeCheckInterval.current) {
        clearInterval(nextEpisodeCheckInterval.current);
      }
    };
  }, [handleDOMChanges, settings.nextEpisodeEnabled, clickButton]);

  const toggleSkipIntro = useCallback(() => {
    updateSettings({
      ...settings,
      skipIntroEnabled: !settings.skipIntroEnabled,
    });
  }, [settings, updateSettings]);

  const toggleNextEpisode = useCallback(() => {
    updateSettings({
      ...settings,
      nextEpisodeEnabled: !settings.nextEpisodeEnabled,
    });
  }, [settings, updateSettings]);

  const toggleSpeedControl = useCallback(() => {
    updateSettings({
      ...settings,
      speedControlEnabled: !settings.speedControlEnabled,
    });

    if (!settings.speedControlEnabled) {
      const video = document.querySelector(videoSelector) as HTMLVideoElement;
      if (video) {
        video.playbackRate = 1;
        lastSpeedApplied.current = 1;
      }
    }
  }, [settings, updateSettings]);

  const setPlaybackSpeed = useCallback(
    (speed: number) => {
      updateSettings({
        ...settings,
        defaultPlaybackSpeed: speed,
      });

      if (settings.speedControlEnabled) {
        const video = document.querySelector(videoSelector) as HTMLVideoElement;
        if (video) {
          video.playbackRate = speed;
          lastSpeedApplied.current = speed;
        }
      }
    },
    [settings, updateSettings],
  );

  useGmMenu(`自動跳過簡介: ${settings.skipIntroEnabled ? "開" : "關"}`, toggleSkipIntro);

  useGmMenu(`自動下一集: ${settings.nextEpisodeEnabled ? "開" : "關"}`, toggleNextEpisode);

  useGmMenu(`播放速度控制: ${settings.speedControlEnabled ? "開" : "關"}`, toggleSpeedControl);

  // biome-ignore lint/complexity/noForEach: <explanation>
  PLAYBACK_SPEEDS.forEach((speed) => {
    const isActive = settings.defaultPlaybackSpeed === speed;
    const speedText = speed === 1 ? "1x (正常)" : `${speed}x`;

    useGmMenu(`播放速度: ${speedText}${isActive ? " ✓" : ""}`, () => setPlaybackSpeed(speed));
  });

  return <div style={{ display: "none" }} />;
}

const mountInterval = setInterval(() => {
  const success = appendComponentToElement(NetflixEnhancer, "body");
  if (success) {
    clearInterval(mountInterval);
  }
}, 3000);
