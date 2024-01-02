import $ from 'jquery';

declare global {
    interface Window extends Record<string, unknown> {
        DashPlayer: DashPlayer;
        $: typeof $;
        jQuery: typeof $;
    }
}