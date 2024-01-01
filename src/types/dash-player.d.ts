// 依賴於 dashjs 的定義檔 v2.9.3, 因為無法使用 import 的方式引入, 所以只好複製過來
interface MediaPlayerClass {
    initialize(view?: HTMLElement, source?: string, autoPlay?: boolean): void;
    on(type: AstInFutureEvent['type'], listener: (e: AstInFutureEvent) => void, scope?: object): void;
    on(type: BufferEvent['type'], listener: (e: BufferEvent) => void, scope?: object): void;
    on(type: CaptionRenderedEvent['type'], listener: (e: CaptionRenderedEvent) => void, scope?: object): void;
    on(type: CaptionContainerResizeEvent['type'], listener: (e: CaptionContainerResizeEvent) => void, scope?: object): void;
    on(type: ErrorEvent['type'], listener: (e: ErrorEvent) => void, scope?: object): void;
    on(type: FragmentLoadingCompletedEvent['type'], listener: (e: FragmentLoadingCompletedEvent) => void, scope?: object): void;
    on(type: FragmentLoadingAbandonedEvent['type'], listener: (e: FragmentLoadingAbandonedEvent) => void, scope?: object): void;
    on(type: KeyErrorEvent['type'], listener: (e: KeyErrorEvent) => void, scope?: object): void;
    on(type: KeyMessageEvent['type'], listener: (e: KeyMessageEvent) => void, scope?: object): void;
    on(type: KeySessionClosedEvent['type'], listener: (e: KeySessionClosedEvent) => void, scope?: object): void;
    on(type: KeySessionEvent['type'], listener: (e: KeySessionEvent) => void, scope?: object): void;
    on(type: KeyStatusesChangedEvent['type'], listener: (e: KeyStatusesChangedEvent) => void, scope?: object): void;
    on(type: KeySystemSelectedEvent['type'], listener: (e: KeySystemSelectedEvent) => void, scope?: object): void;
    on(type: LicenseRequestCompleteEvent['type'], listener: (e: LicenseRequestCompleteEvent) => void, scope?: object): void;
    on(type: LogEvent['type'], listener: (e: LogEvent) => void, scope?: object): void;
    on(type: ManifestLoadedEvent['type'], listener: (e: ManifestLoadedEvent) => void, scope?: object): void;
    on(type: MetricEvent['type'], listener: (e: MetricEvent) => void, scope?: object): void;
    on(type: MetricChangedEvent['type'], listener: (e: MetricChangedEvent) => void, scope?: object): void;
    on(type: PeriodSwitchEvent['type'], listener: (e: PeriodSwitchEvent) => void, scope?: object): void;
    on(type: PlaybackErrorEvent['type'], listener: (e: PlaybackErrorEvent) => void, scope?: object): void;
    on(type: PlaybackPausedEvent['type'], listener: (e: PlaybackPausedEvent) => void, scope?: object): void;
    on(type: PlaybackPlayingEvent['type'], listener: (e: PlaybackPlayingEvent) => void, scope?: object): void;
    on(type: PlaybackRateChangedEvent['type'], listener: (e: PlaybackRateChangedEvent) => void, scope?: object): void;
    on(type: PlaybackSeekingEvent['type'], listener: (e: PlaybackSeekingEvent) => void, scope?: object): void;
    on(type: PlaybackStartedEvent['type'], listener: (e: PlaybackStartedEvent) => void, scope?: object): void;
    on(type: PlaybackTimeUpdatedEvent['type'], listener: (e: PlaybackTimeUpdatedEvent) => void, scope?: object): void;
    on(type: ProtectionCreatedEvent['type'], listener: (e: ProtectionCreatedEvent) => void, scope?: object): void;
    on(type: ProtectionDestroyedEvent['type'], listener: (e: ProtectionDestroyedEvent) => void, scope?: object): void;
    on(type: QualityChangeRenderedEvent['type'], listener: (e: QualityChangeRenderedEvent) => void, scope?: object): void;
    on(type: QualityChangeRequestedEvent['type'], listener: (e: QualityChangeRequestedEvent) => void, scope?: object): void;
    on(type: StreamInitializedEvent['type'], listener: (e: StreamInitializedEvent) => void, scope?: object): void;
    on(type: TextTracksAddedEvent['type'], listener: (e: TextTracksAddedEvent) => void, scope?: object): void;
    on(type: TtmlParsedEvent['type'], listener: (e: TtmlParsedEvent) => void, scope?: object): void;
    on(type: TtmlToParseEvent['type'], listener: (e: TtmlToParseEvent) => void, scope?: object): void;
    on(type: string, listener: (e: Event) => void, scope?: object): void;
    off(type: string, listener: (e: any) => void, scope?: object): void;
    extend(parentNameString: string, childInstance: object, override: boolean): void;
    attachView(element: HTMLElement): void;
    attachSource(urlOrManifest: string | object): void;
    isReady(): boolean;
    play(): void;
    isPaused(): boolean;
    pause(): void;
    isSeeking(): boolean;
    isDynamic(): boolean;
    seek(value: number): void;
    setPlaybackRate(value: number): void;
    getPlaybackRate(): number;
    setMute(value: boolean): void;
    isMuted(): boolean;
    setVolume(value: number): void;
    getVolume(): number;
    time(streamId?: string): number;
    duration(): number;
    timeAsUTC(): number;
    durationAsUTC(): number;
    getActiveStream(): Stream | null;
    getDVRWindowSize(): number;
    getDVRSeekOffset(value: number): number;
    convertToTimeCode(value: number): string;
    formatUTC(time: number, locales: string, hour12: boolean, withDate?: boolean): string;
    getVersion(): string;
    getDebug(): Debug;
    getBufferLength(type: 'video' | 'audio' | 'fragmentedText'): number;
    getVideoModel(): VideoModel;
    getTTMLRenderingDiv(): HTMLDivElement | null;
    getVideoElement(): HTMLVideoElement;
    getSource(): string | object;
    setLiveDelayFragmentCount(value: number): void;
    setLiveDelay(value: number): void;
    getLiveDelay(): number | undefined;
    useSuggestedPresentationDelay(value: boolean): void;
    enableLastBitrateCaching(enable: boolean, ttl?: number): void;
    enableLastMediaSettingsCaching(enable: boolean, ttl?: number): void;
    setMaxAllowedBitrateFor(type: 'video' | 'audio', value: number): void;
    getMaxAllowedBitrateFor(type: 'video' | 'audio'): number;
    getTopBitrateInfoFor(type: 'video' | 'audio'): BitrateInfo;
    setMinAllowedBitrateFor(type: 'video' | 'audio', value: number);
    getMinAllowedBitrateFor(type: 'video' | 'audio'): number;
    setMaxAllowedRepresentationRatioFor(type: 'video' | 'audio', value: number): void;
    getMaxAllowedRepresentationRatioFor(type: 'video' | 'audio'): number;
    setAutoPlay(value: boolean): void;
    getAutoPlay(): boolean;
    setScheduleWhilePaused(value: boolean): void;
    getScheduleWhilePaused(): boolean;
    getDashMetrics(): DashMetrics;
    getMetricsFor(type: 'video' | 'audio' | 'text' | 'stream'): MetricsList | null;
    getQualityFor(type: 'video' | 'audio' | 'image'): number;
    setQualityFor(type: 'video' | 'audio' | 'image', value: number): void;
    updatePortalSize(): void;
    getLimitBitrateByPortal(): any;
    setLimitBitrateByPortal(value: boolean): void;
    getUsePixelRatioInLimitBitrateByPortal(): any;
    setUsePixelRatioInLimitBitrateByPortal(value: boolean): void;
    enableText(enable: boolean): void;
    setTextTrack(idx: number): void;
    getTextDefaultLanguage(): string | undefined;
    setTextDefaultLanguage(lang: string): void;
    getTextDefaultEnabled(): boolean | undefined;
    setTextDefaultEnabled(enable: boolean): void;
    getThumbnail(time: number): Thumbnail;
    getBitrateInfoListFor(type: 'video' | 'audio' | 'image'): BitrateInfo[];
    setInitialBitrateFor(type: 'video' | 'audio', value: number): void;
    getInitialBitrateFor(type: 'video' | 'audio'): number;
    setInitialRepresentationRatioFor(type: 'video' | 'audio', value: number): void;
    getInitialRepresentationRatioFor(type: 'video' | 'audio'): number;
    getStreamsFromManifest(manifest: object): StreamInfo[];
    getTracksFor(type: 'video' | 'audio' | 'text' | 'fragmentedText'): MediaInfo[];
    getTracksForTypeFromManifest(type: 'video' | 'audio' | 'text' | 'fragmentedText', manifest: object, streamInfo: StreamInfo): MediaInfo[];
    getCurrentTrackFor(type: 'video' | 'audio' | 'text' | 'fragmentedText'): MediaInfo | null;
    setInitialMediaSettingsFor(type: 'video' | 'audio', value: MediaSettings): void;
    getInitialMediaSettingsFor(type: 'video' | 'audio'): MediaSettings;
    setCurrentTrack(track: MediaInfo): void;
    getTrackSwitchModeFor(type: 'video' | 'audio'): TrackSwitchMode;
    setTrackSwitchModeFor(type: 'video' | 'audio', mode: TrackSwitchMode): void;
    setSelectionModeForInitialTrack(mode: TrackSelectionMode): void;
    getSelectionModeForInitialTrack(): TrackSelectionMode;
    getAutoSwitchQuality(): boolean;
    setAutoSwitchQuality(value: boolean): void;
    setFastSwitchEnabled(value: boolean): void;
    getFastSwitchEnabled(): boolean;
    getAutoSwitchQualityFor(type: 'video' | 'audio'): boolean;
    setAutoSwitchQualityFor(type: 'video' | 'audio', value: boolean): void;
    enableBufferOccupancyABR(value: boolean): void;
    setBandwidthSafetyFactor(value: number): void;
    getBandwidthSafetyFactor(): number;
    setAbandonLoadTimeout(value: number): void;
    retrieveManifest(url: string, callback: (manifest: object | null, error: any) => void): void;
    addUTCTimingSource(schemeIdUri: string, value: string): void;
    removeUTCTimingSource(schemeIdUri: string, value: string): void;
    clearDefaultUTCTimingSources(): void;
    restoreDefaultUTCTimingSources(): void;
    setBufferToKeep(value: number): void;
    setBufferPruningInterval(value: number): void;
    setStableBufferTime(value: number): void;
    setBufferTimeAtTopQuality(value: number): void;
    setFragmentLoaderRetryAttempts(value: number): void;
    setFragmentLoaderRetryInterval(value: number): void;
    setXHRWithCredentialsForType(type: string, value: boolean): void;
    getXHRWithCredentialsForType(type: string): boolean;
    setBufferTimeAtTopQualityLongForm(value: number): void;
    setLongFormContentDurationThreshold(value: number): void;
    setCacheLoadThresholdForType(type: 'video' | 'audio', value: number): void;
    getProtectionController(): ProtectionController;
    attachProtectionController(value: ProtectionController): void;
    setProtectionData(value: ProtectionData): void;
    enableManifestDateHeaderTimeSource(value: boolean): void;
    displayCaptionsOnTop(value: boolean): void;
    attachTTMLRenderingDiv(div: HTMLDivElement): void;
    getCurrentTextTrackIndex(): number;
    setJumpGaps(value: boolean): void;
    getJumpGaps(): boolean;
    setSmallGapLimit(value: number): void;
    getSmallGapLimit(): number;
    preload(): void;
    reset(): void;
    addABRCustomRule(type: string, rulename: string, rule: object): void;
    removeABRCustomRule(rulename: string): void;
    removeAllABRCustomRule(): void;
    getLowLatencyEnabled(): boolean;
    setLowLatencyEnabled(value: boolean): void;
    enableLowLatencyCatchUp(value: boolean): void;
    getLowLatencyMinDrift(): number;
    setLowLatencyMinDrift(value: number): void;
    getLowLatencyMaxDriftBeforeSeeking(): number;
    setLowLatencyMaxDriftBeforeSeeking(value: number): void;
    getUseDeadTimeLatencyForAbr(): boolean;
    setUseDeadTimeLatencyForAbr(value: boolean): void;
    getCurrentLiveLatency(): number;
    enableForcedTextStreaming(value: boolean): void;
    isTextEnabled(): boolean;
    getBufferTimeAtTopQualityLongForm(): number;
    setMovingAverageMethod(value: string): void;
    getMovingAverageMethod(): string;
    setABRStrategy(value: string): void;
    getABRStrategy(): string;
    useDefaultABRRules(value: boolean): void;
    getAverageThroughput(value: number): void;
    setBufferAheadToKeep(value: number): void;
    getStableBufferTime(): number;
    getBufferTimeAtTopQuality(): number;
    setManifestLoaderRetryAttempts(value: number): void;
    setManifestLoaderRetryInterval(value: number): void;
    setManifestUpdateRetryInterval(value: number): void;
    getManifestUpdateRetryInterval(): number;
    setSegmentOverlapToleranceTime(value: number): void;
    keepProtectionMediaKeys(value: boolean): void;
}

export interface DashPlayer extends MediaPlayerClass {
    fire: (...args: any[]) => void;
    initialize: (...args: any[]) => void;
    getCurrentTime: () => number;
    prototype: DashPlayer;
}

declare global {
    interface Window {
        DashPlayer: DashPlayer;
    }
}