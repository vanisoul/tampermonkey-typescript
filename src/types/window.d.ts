import $ from 'jquery';

declare global {
    interface Window {
        DashPlayer: DashPlayer;
        $: typeof $;
        jQuery: typeof $;
    }
}