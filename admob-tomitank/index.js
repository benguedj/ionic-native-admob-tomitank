var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { fromEvent } from 'rxjs';
var AdMobFreeOriginal = /** @class */ (function (_super) {
    __extends(AdMobFreeOriginal, _super);
    function AdMobFreeOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience object to get event names
         * @type {Object}
         */
        _this.events = {
            BANNER_LOAD: 'admob.banner.events.LOAD',
            BANNER_LOAD_FAIL: 'admob.banner.events.LOAD_FAIL',
            BANNER_OPEN: 'admob.banner.events.OPEN',
            BANNER_CLOSE: 'admob.banner.events.CLOSE',
            BANNER_EXIT_APP: 'admob.banner.events.EXIT_APP',
            INTERSTITIAL_LOAD: 'admob.interstitial.events.LOAD',
            INTERSTITIAL_LOAD_FAIL: 'admob.interstitial.events.LOAD_FAIL',
            INTERSTITIAL_OPEN: 'admob.interstitial.events.OPEN',
            INTERSTITIAL_CLOSE: 'admob.interstitial.events.CLOSE',
            INTERSTITIAL_EXIT_APP: 'admob.interstitial.events.EXIT_APP',
            REWARD_VIDEO_LOAD: 'admob.rewardvideo.events.LOAD',
            REWARD_VIDEO_LOAD_FAIL: 'admob.rewardvideo.events.LOAD_FAIL',
            REWARD_VIDEO_OPEN: 'admob.rewardvideo.events.OPEN',
            REWARD_VIDEO_CLOSE: 'admob.rewardvideo.events.CLOSE',
            REWARD_VIDEO_EXIT_APP: 'admob.rewardvideo.events.EXIT_APP',
            REWARD_VIDEO_START: 'admob.rewardvideo.events.START',
            REWARD_VIDEO_REWARD: 'admob.rewardvideo.events.REWARD',
        };
        /**
         * Returns the AdMobFreeBanner object
         * @type {AdMobFreeBanner}
         */
        _this.banner = new AdMobFreeBanner();
        /**
         * Returns the AdMobFreeInterstitial object
         * @type {AdMobFreeInterstitial}
         */
        _this.interstitial = new AdMobFreeInterstitial();
        /**
         * Returns the AdMobFreeRewardVideo object
         * @type {AdMobFreeRewardVideo}
         */
        _this.rewardVideo = new AdMobFreeRewardVideo();
        return _this;
    }
    /**
     * Watch an event
     * @param event {string} event name
     * @return {Observable<any>}
     */
    AdMobFreeOriginal.prototype.on = function (event) {
        return fromEvent(document, event);
    };
    AdMobFreeOriginal.prototype.getTrackingStatus = function () { return cordova(this, "getTrackingStatus", { "otherPromise": true }, arguments); };
    AdMobFreeOriginal.prototype.trackingStatusForm = function () { return cordova(this, "trackingStatusForm", { "otherPromise": true }, arguments); };
    AdMobFreeOriginal.pluginName = "AdMobFree";
    AdMobFreeOriginal.plugin = "cordova-plugin-admob-tomitank";
    AdMobFreeOriginal.pluginRef = "admob";
    AdMobFreeOriginal.repo = "https://github.com/tomitank/cordova-plugin-admob-tomitank";
    AdMobFreeOriginal.platforms = ["Android", "iOS"];
    return AdMobFreeOriginal;
}(IonicNativePlugin));
var AdMobFree = new AdMobFreeOriginal();
export { AdMobFree };
var AdMobFreeBanner = /** @class */ (function (_super) {
    __extends(AdMobFreeBanner, _super);
    function AdMobFreeBanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeBanner.prototype.config = function (options) { return cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeBanner.prototype.hide = function () { return cordova(this, "hide", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.prepare = function () { return cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.remove = function () { return cordova(this, "remove", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeBanner.pluginName = "AdMobFree";
    AdMobFreeBanner.plugin = "cordova-plugin-admob-tomitank";
    AdMobFreeBanner.pluginRef = "admob.banner";
    return AdMobFreeBanner;
}(IonicNativePlugin));
export { AdMobFreeBanner };
var AdMobFreeInterstitial = /** @class */ (function (_super) {
    __extends(AdMobFreeInterstitial, _super);
    function AdMobFreeInterstitial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeInterstitial.prototype.config = function (options) { return cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeInterstitial.prototype.isReady = function () { return cordova(this, "isReady", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.prototype.prepare = function () { return cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeInterstitial.pluginName = "AdMobFree";
    AdMobFreeInterstitial.plugin = "cordova-plugin-admob-tomitank";
    AdMobFreeInterstitial.pluginRef = "admob.interstitial";
    return AdMobFreeInterstitial;
}(IonicNativePlugin));
export { AdMobFreeInterstitial };
var AdMobFreeRewardVideo = /** @class */ (function (_super) {
    __extends(AdMobFreeRewardVideo, _super);
    function AdMobFreeRewardVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdMobFreeRewardVideo.prototype.config = function (options) { return cordova(this, "config", { "sync": true }, arguments); };
    AdMobFreeRewardVideo.prototype.isReady = function () { return cordova(this, "isReady", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.prototype.prepare = function () { return cordova(this, "prepare", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    AdMobFreeRewardVideo.pluginName = "AdMobFree";
    AdMobFreeRewardVideo.plugin = "cordova-plugin-admob-tomitank";
    AdMobFreeRewardVideo.pluginRef = "admob.rewardvideo";
    return AdMobFreeRewardVideo;
}(IonicNativePlugin));
export { AdMobFreeRewardVideo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2FkbW9iLXRvbWl0YW5rL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3hFLE9BQU8sRUFBYyxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBc0tkLDZCQUFpQjs7O1FBQzlDOzs7V0FHRztRQUNILFlBQU0sR0FBRztZQUNQLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsZ0JBQWdCLEVBQUUsK0JBQStCO1lBQ2pELFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsWUFBWSxFQUFFLDJCQUEyQjtZQUN6QyxlQUFlLEVBQUUsOEJBQThCO1lBRS9DLGlCQUFpQixFQUFFLGdDQUFnQztZQUNuRCxzQkFBc0IsRUFBRSxxQ0FBcUM7WUFDN0QsaUJBQWlCLEVBQUUsZ0NBQWdDO1lBQ25ELGtCQUFrQixFQUFFLGlDQUFpQztZQUNyRCxxQkFBcUIsRUFBRSxvQ0FBb0M7WUFFM0QsaUJBQWlCLEVBQUUsK0JBQStCO1lBQ2xELHNCQUFzQixFQUFFLG9DQUFvQztZQUM1RCxpQkFBaUIsRUFBRSwrQkFBK0I7WUFDbEQsa0JBQWtCLEVBQUUsZ0NBQWdDO1lBQ3BELHFCQUFxQixFQUFFLG1DQUFtQztZQUMxRCxrQkFBa0IsRUFBRSxnQ0FBZ0M7WUFDcEQsbUJBQW1CLEVBQUUsaUNBQWlDO1NBQ3ZELENBQUM7UUF5QkY7OztXQUdHO1FBQ0gsWUFBTSxHQUFvQixJQUFJLGVBQWUsRUFBRSxDQUFDO1FBRWhEOzs7V0FHRztRQUNILGtCQUFZLEdBQTBCLElBQUkscUJBQXFCLEVBQUUsQ0FBQztRQUVsRTs7O1dBR0c7UUFDSCxpQkFBVyxHQUF5QixJQUFJLG9CQUFvQixFQUFFLENBQUM7OztJQXZDL0Q7Ozs7T0FJRztJQUNILHNCQUFFLEdBQUYsVUFBRyxLQUFhO1FBQ2QsT0FBTyxTQUFTLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFPRCxxQ0FBaUI7SUFPakIsc0NBQWtCOzs7Ozs7b0JBeE5wQjtFQXdLK0IsaUJBQWlCO1NBQW5DLFNBQVM7O0lBNkVlLG1DQUFpQjs7OztJQU9wRCxnQ0FBTSxhQUFDLE9BQThCO0lBU3JDLDhCQUFJO0lBU0osaUNBQU87SUFTUCxnQ0FBTTtJQVNOLDhCQUFJOzs7OzBCQWhTTjtFQXFQcUMsaUJBQWlCO1NBQXpDLGVBQWU7O0lBd0RlLHlDQUFpQjs7OztJQU8xRCxzQ0FBTSxhQUFDLE9BQW9DO0lBUzNDLHVDQUFPO0lBU1AsdUNBQU87SUFTUCxvQ0FBSTs7OztnQ0EvVU47RUE2UzJDLGlCQUFpQjtTQUEvQyxxQkFBcUI7O0lBK0NRLHdDQUFpQjs7OztJQU96RCxxQ0FBTSxhQUFDLE9BQW1DO0lBUzFDLHNDQUFPO0lBU1Asc0NBQU87SUFTUCxtQ0FBSTs7OzsrQkE5WE47RUE0VjBDLGlCQUFpQjtTQUE5QyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFkTW9iRnJlZUJhbm5lckNvbmZpZyB7XG4gIC8qKlxuICAgKiBBZCBVbml0IElEXG4gICAqL1xuICBpZD86IHN0cmluZztcbiAgLyoqXG4gICAqIFJlY2VpdmluZyB0ZXN0IGFkXG4gICAqL1xuICBpc1Rlc3Rpbmc/OiBib29sZWFuO1xuICAvKipcbiAgICogQXV0byBzaG93IGFkIHdoZW4gbG9hZGVkXG4gICAqL1xuICBhdXRvU2hvdz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBDaGlsZC1kaXJlY3RlZCBzZXR0aW5nLiBEZWZhdWx0IGlzIG5vdCBjYWxsaW5nIGB0YWdGb3JDaGlsZERpcmVjdGVkVHJlYXRtZW50YC5cbiAgICogU2V0IHRvIGB0cnVlYCBmb3IgYHRhZ0ZvckNoaWxkRGlyZWN0ZWRUcmVhdG1lbnQodHJ1ZSlgLlxuICAgKiBTZXQgdG8gYGZhbHNlYCBmb3IgYHRhZ0ZvckNoaWxkRGlyZWN0ZWRUcmVhdG1lbnQoZmFsc2UpYC5cbiAgICovXG4gIGZvckNoaWxkPzogYm9vbGVhbiB8IG51bGw7XG4gIC8qKlxuICAgKiBEZXNpZ25lZCBmb3IgRmFtaWxpZXMgc2V0dGluZy4gQW5kcm9pZC1vbmx5LiBEZWZhdWx0IGlzIG5vdCBjYWxsaW5nIHNldElzRGVzaWduZWRGb3JGYW1pbGllcy5cbiAgICogU2V0IHRvIGB0cnVlYCBmb3IgYHNldElzRGVzaWduZWRGb3JGYW1pbGllcyh0cnVlKWAuXG4gICAqIFNldCB0byBgZmFsc2VgIGZvciBgc2V0SXNEZXNpZ25lZEZvckZhbWlsaWVzKGZhbHNlKWAuXG4gICAqL1xuICBmb3JGYW1pbHk/OiBib29sZWFuIHwgbnVsbDtcbiAgLyoqXG4gICAqIExvY2F0aW9uIHRhcmdldGluZy4gSXQgYWNjZXB0IGFuIGFycmF5IGluIHRoZSBmb3JtIG9mIGBbbGF0aXR1ZGUsIGxvbmdpdHVkZV1gLlxuICAgKiBBbmRyb2lkLW9ubHkuIERlZmF1bHQgaXMgbm90IGNhbGxpbmcgYHNldExhdGl0dWRlYCBhbmQgYHNldExvbmdpdHVkZWAuXG4gICAqL1xuICBsb2NhdGlvbj86IG51bWJlcltdIHwgbnVsbDtcbiAgLyoqXG4gICAqIFNldCB0byB0cnVlLCB0byBwdXQgYmFubmVyIGF0IHRvcFxuICAgKi9cbiAgYmFubmVyQXRUb3A/OiBib29sZWFuO1xuICAvKipcbiAgICogU2V0IHRvIHRydWUsIHRvIGFsbG93IGJhbm5lciBvdmVybGFwIFdlYlZpZXdcbiAgICovXG4gIG92ZXJsYXA/OiBib29sZWFuO1xuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gYXZvaWQgaW9zNyBzdGF0dXMgYmFyIG92ZXJsYXBcbiAgICovXG4gIG9mZnNldFRvcEJhcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBCYW5uZXIgIHNpemVcbiAgICovXG4gIHNpemU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRNb2JGcmVlSW50ZXJzdGl0aWFsQ29uZmlnIHtcbiAgLyoqXG4gICAqIEFkIFVuaXQgSURcbiAgICovXG4gIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVjZWl2aW5nIHRlc3QgYWRcbiAgICovXG4gIGlzVGVzdGluZz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBdXRvIHNob3cgYWQgd2hlbiBsb2FkZWRcbiAgICovXG4gIGF1dG9TaG93PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENoaWxkLWRpcmVjdGVkIHNldHRpbmcuIERlZmF1bHQgaXMgbm90IGNhbGxpbmcgYHRhZ0ZvckNoaWxkRGlyZWN0ZWRUcmVhdG1lbnRgLlxuICAgKiBTZXQgdG8gYHRydWVgIGZvciBgdGFnRm9yQ2hpbGREaXJlY3RlZFRyZWF0bWVudCh0cnVlKWAuXG4gICAqIFNldCB0byBgZmFsc2VgIGZvciBgdGFnRm9yQ2hpbGREaXJlY3RlZFRyZWF0bWVudChmYWxzZSlgLlxuICAgKi9cbiAgZm9yQ2hpbGQ/OiBib29sZWFuIHwgbnVsbDtcbiAgLyoqXG4gICAqIERlc2lnbmVkIGZvciBGYW1pbGllcyBzZXR0aW5nLiBBbmRyb2lkLW9ubHkuIERlZmF1bHQgaXMgbm90IGNhbGxpbmcgc2V0SXNEZXNpZ25lZEZvckZhbWlsaWVzLlxuICAgKiBTZXQgdG8gYHRydWVgIGZvciBgc2V0SXNEZXNpZ25lZEZvckZhbWlsaWVzKHRydWUpYC5cbiAgICogU2V0IHRvIGBmYWxzZWAgZm9yIGBzZXRJc0Rlc2lnbmVkRm9yRmFtaWxpZXMoZmFsc2UpYC5cbiAgICovXG4gIGZvckZhbWlseT86IGJvb2xlYW4gfCBudWxsO1xuICAvKipcbiAgICogTG9jYXRpb24gdGFyZ2V0aW5nLiBJdCBhY2NlcHQgYW4gYXJyYXkgaW4gdGhlIGZvcm0gb2YgYFtsYXRpdHVkZSwgbG9uZ2l0dWRlXWAuXG4gICAqIEFuZHJvaWQtb25seS4gRGVmYXVsdCBpcyBub3QgY2FsbGluZyBgc2V0TGF0aXR1ZGVgIGFuZCBgc2V0TG9uZ2l0dWRlYC5cbiAgICovXG4gIGxvY2F0aW9uPzogbnVtYmVyW10gfCBudWxsO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkTW9iRnJlZVJld2FyZFZpZGVvQ29uZmlnIHtcbiAgLyoqXG4gICAqIEFkIFVuaXQgSURcbiAgICovXG4gIGlkPzogc3RyaW5nO1xuICAvKipcbiAgICogUmVjZWl2aW5nIHRlc3QgYWRcbiAgICovXG4gIGlzVGVzdGluZz86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBdXRvIHNob3cgYWQgd2hlbiBsb2FkZWRcbiAgICovXG4gIGF1dG9TaG93PzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIENoaWxkLWRpcmVjdGVkIHNldHRpbmcuIERlZmF1bHQgaXMgbm90IGNhbGxpbmcgYHRhZ0ZvckNoaWxkRGlyZWN0ZWRUcmVhdG1lbnRgLlxuICAgKiBTZXQgdG8gYHRydWVgIGZvciBgdGFnRm9yQ2hpbGREaXJlY3RlZFRyZWF0bWVudCh0cnVlKWAuXG4gICAqIFNldCB0byBgZmFsc2VgIGZvciBgdGFnRm9yQ2hpbGREaXJlY3RlZFRyZWF0bWVudChmYWxzZSlgLlxuICAgKi9cbiAgZm9yQ2hpbGQ/OiBib29sZWFuIHwgbnVsbDtcbiAgLyoqXG4gICAqIERlc2lnbmVkIGZvciBGYW1pbGllcyBzZXR0aW5nLiBBbmRyb2lkLW9ubHkuIERlZmF1bHQgaXMgbm90IGNhbGxpbmcgc2V0SXNEZXNpZ25lZEZvckZhbWlsaWVzLlxuICAgKiBTZXQgdG8gYHRydWVgIGZvciBgc2V0SXNEZXNpZ25lZEZvckZhbWlsaWVzKHRydWUpYC5cbiAgICogU2V0IHRvIGBmYWxzZWAgZm9yIGBzZXRJc0Rlc2lnbmVkRm9yRmFtaWxpZXMoZmFsc2UpYC5cbiAgICovXG4gIGZvckZhbWlseT86IGJvb2xlYW4gfCBudWxsO1xuICAvKipcbiAgICogTG9jYXRpb24gdGFyZ2V0aW5nLiBJdCBhY2NlcHQgYW4gYXJyYXkgaW4gdGhlIGZvcm0gb2YgYFtsYXRpdHVkZSwgbG9uZ2l0dWRlXWAuXG4gICAqIEFuZHJvaWQtb25seS4gRGVmYXVsdCBpcyBub3QgY2FsbGluZyBgc2V0TGF0aXR1ZGVgIGFuZCBgc2V0TG9uZ2l0dWRlYC5cbiAgICovXG4gIGxvY2F0aW9uPzogbnVtYmVyW10gfCBudWxsO1xufVxuXG4vKipcbiAqIEBuYW1lIEFkTW9iIEZyZWVcbiAqIEBkZXNjcmlwdGlvblxuICogQSBmcmVlLCBubyBhZC1zaGFyaW5nIHZlcnNpb24gb2YgR29vZ2xlIEFkTW9iIHBsdWdpbiBmb3IgQ29yZG92YS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWFkbW9iLWZyZWVgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQWRNb2IgRnJlZSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL3JhdHNvbi9jb3Jkb3ZhLXBsdWdpbi1hZG1vYi1mcmVlKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFkTW9iRnJlZSwgQWRNb2JGcmVlQmFubmVyQ29uZmlnIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9hZG1vYi1mcmVlL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRtb2JGcmVlOiBBZE1vYkZyZWUpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogY29uc3QgYmFubmVyQ29uZmlnOiBBZE1vYkZyZWVCYW5uZXJDb25maWcgPSB7XG4gKiAgLy8gYWRkIHlvdXIgY29uZmlnIGhlcmVcbiAqICAvLyBmb3IgdGhlIHNha2Ugb2YgdGhpcyBleGFtcGxlIHdlIHdpbGwganVzdCB1c2UgdGhlIHRlc3QgY29uZmlnXG4gKiAgaXNUZXN0aW5nOiB0cnVlLFxuICogIGF1dG9TaG93OiB0cnVlXG4gKiB9O1xuICogdGhpcy5hZG1vYkZyZWUuYmFubmVyLmNvbmZpZyhiYW5uZXJDb25maWcpO1xuICpcbiAqIHRoaXMuYWRtb2JGcmVlLmJhbm5lci5wcmVwYXJlKClcbiAqICAgLnRoZW4oKCkgPT4ge1xuICogICAgIC8vIGJhbm5lciBBZCBpcyByZWFkeVxuICogICAgIC8vIGlmIHdlIHNldCBhdXRvU2hvdyB0byBmYWxzZSwgdGhlbiB3ZSB3aWxsIG5lZWQgdG8gY2FsbCB0aGUgc2hvdyBtZXRob2QgaGVyZVxuICogICB9KVxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XG4gKlxuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEFkTW9iRnJlZUJhbm5lckNvbmZpZ1xuICogQWRNb2JGcmVlSW50ZXJzdGl0aWFsQ29uZmlnXG4gKiBBZE1vYkZyZWVSZXdhcmRWaWRlb0NvbmZpZ1xuICogQGNsYXNzZXNcbiAqIEFkTW9iRnJlZUJhbm5lclxuICogQWRNb2JGcmVlSW50ZXJzdGl0aWFsXG4gKiBBZE1vYkZyZWVSZXdhcmRWaWRlb1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FkTW9iRnJlZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFkbW9iLXRvbWl0YW5rJyxcbiAgcGx1Z2luUmVmOiAnYWRtb2InLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RvbWl0YW5rL2NvcmRvdmEtcGx1Z2luLWFkbW9iLXRvbWl0YW5rJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFkTW9iRnJlZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIG9iamVjdCB0byBnZXQgZXZlbnQgbmFtZXNcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIGV2ZW50cyA9IHtcbiAgICBCQU5ORVJfTE9BRDogJ2FkbW9iLmJhbm5lci5ldmVudHMuTE9BRCcsXG4gICAgQkFOTkVSX0xPQURfRkFJTDogJ2FkbW9iLmJhbm5lci5ldmVudHMuTE9BRF9GQUlMJyxcbiAgICBCQU5ORVJfT1BFTjogJ2FkbW9iLmJhbm5lci5ldmVudHMuT1BFTicsXG4gICAgQkFOTkVSX0NMT1NFOiAnYWRtb2IuYmFubmVyLmV2ZW50cy5DTE9TRScsXG4gICAgQkFOTkVSX0VYSVRfQVBQOiAnYWRtb2IuYmFubmVyLmV2ZW50cy5FWElUX0FQUCcsXG5cbiAgICBJTlRFUlNUSVRJQUxfTE9BRDogJ2FkbW9iLmludGVyc3RpdGlhbC5ldmVudHMuTE9BRCcsXG4gICAgSU5URVJTVElUSUFMX0xPQURfRkFJTDogJ2FkbW9iLmludGVyc3RpdGlhbC5ldmVudHMuTE9BRF9GQUlMJyxcbiAgICBJTlRFUlNUSVRJQUxfT1BFTjogJ2FkbW9iLmludGVyc3RpdGlhbC5ldmVudHMuT1BFTicsXG4gICAgSU5URVJTVElUSUFMX0NMT1NFOiAnYWRtb2IuaW50ZXJzdGl0aWFsLmV2ZW50cy5DTE9TRScsXG4gICAgSU5URVJTVElUSUFMX0VYSVRfQVBQOiAnYWRtb2IuaW50ZXJzdGl0aWFsLmV2ZW50cy5FWElUX0FQUCcsXG5cbiAgICBSRVdBUkRfVklERU9fTE9BRDogJ2FkbW9iLnJld2FyZHZpZGVvLmV2ZW50cy5MT0FEJyxcbiAgICBSRVdBUkRfVklERU9fTE9BRF9GQUlMOiAnYWRtb2IucmV3YXJkdmlkZW8uZXZlbnRzLkxPQURfRkFJTCcsXG4gICAgUkVXQVJEX1ZJREVPX09QRU46ICdhZG1vYi5yZXdhcmR2aWRlby5ldmVudHMuT1BFTicsXG4gICAgUkVXQVJEX1ZJREVPX0NMT1NFOiAnYWRtb2IucmV3YXJkdmlkZW8uZXZlbnRzLkNMT1NFJyxcbiAgICBSRVdBUkRfVklERU9fRVhJVF9BUFA6ICdhZG1vYi5yZXdhcmR2aWRlby5ldmVudHMuRVhJVF9BUFAnLFxuICAgIFJFV0FSRF9WSURFT19TVEFSVDogJ2FkbW9iLnJld2FyZHZpZGVvLmV2ZW50cy5TVEFSVCcsXG4gICAgUkVXQVJEX1ZJREVPX1JFV0FSRDogJ2FkbW9iLnJld2FyZHZpZGVvLmV2ZW50cy5SRVdBUkQnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBXYXRjaCBhbiBldmVudFxuICAgKiBAcGFyYW0gZXZlbnQge3N0cmluZ30gZXZlbnQgbmFtZVxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBvbihldmVudDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gZnJvbUV2ZW50KGRvY3VtZW50LCBldmVudCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSB0cmFja2luZyBzdGF0dXNcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgZ2V0VHJhY2tpbmdTdGF0dXMoKTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFRyYWNraW5nIHN0YXR1cyBmb3JtXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHRyYWNraW5nU3RhdHVzRm9ybSgpOiBQcm9taXNlPGFueT4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgQWRNb2JGcmVlQmFubmVyIG9iamVjdFxuICAgKiBAdHlwZSB7QWRNb2JGcmVlQmFubmVyfVxuICAgKi9cbiAgYmFubmVyOiBBZE1vYkZyZWVCYW5uZXIgPSBuZXcgQWRNb2JGcmVlQmFubmVyKCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIEFkTW9iRnJlZUludGVyc3RpdGlhbCBvYmplY3RcbiAgICogQHR5cGUge0FkTW9iRnJlZUludGVyc3RpdGlhbH1cbiAgICovXG4gIGludGVyc3RpdGlhbDogQWRNb2JGcmVlSW50ZXJzdGl0aWFsID0gbmV3IEFkTW9iRnJlZUludGVyc3RpdGlhbCgpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBBZE1vYkZyZWVSZXdhcmRWaWRlbyBvYmplY3RcbiAgICogQHR5cGUge0FkTW9iRnJlZVJld2FyZFZpZGVvfVxuICAgKi9cbiAgcmV3YXJkVmlkZW86IEFkTW9iRnJlZVJld2FyZFZpZGVvID0gbmV3IEFkTW9iRnJlZVJld2FyZFZpZGVvKCk7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FkTW9iRnJlZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFkbW9iLXRvbWl0YW5rJyxcbiAgcGx1Z2luUmVmOiAnYWRtb2IuYmFubmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRNb2JGcmVlQmFubmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVXBkYXRlIGNvbmZpZ1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtBZE1vYkZyZWVCYW5uZXJDb25maWd9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY29uZmlnKG9wdGlvbnM6IEFkTW9iRnJlZUJhbm5lckNvbmZpZyk6IEFkTW9iRnJlZUJhbm5lckNvbmZpZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGJhbm5lclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBoaWRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBiYW5uZXJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgcHJlcGFyZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGJhbm5lclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgYmFubmVyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNob3coKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQWRNb2JGcmVlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYWRtb2ItdG9taXRhbmsnLFxuICBwbHVnaW5SZWY6ICdhZG1vYi5pbnRlcnN0aXRpYWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZE1vYkZyZWVJbnRlcnN0aXRpYWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBVcGRhdGUgY29uZmlnXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm4ge0FkTW9iRnJlZUludGVyc3RpdGlhbENvbmZpZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjb25maWcob3B0aW9uczogQWRNb2JGcmVlSW50ZXJzdGl0aWFsQ29uZmlnKTogQWRNb2JGcmVlSW50ZXJzdGl0aWFsQ29uZmlnIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgaW50ZXJzdGl0aWFsIGlzIHJlYWR5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIGlzUmVhZHkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUHJlcGFyZSBpbnRlcnN0aXRpYWxcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgcHJlcGFyZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBpbnRlcnN0aXRpYWxcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcbiAgc2hvdygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdBZE1vYkZyZWUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hZG1vYi10b21pdGFuaycsXG4gIHBsdWdpblJlZjogJ2FkbW9iLnJld2FyZHZpZGVvJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRNb2JGcmVlUmV3YXJkVmlkZW8gZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBVcGRhdGUgY29uZmlnXG4gICAqIEBwYXJhbSB7QWRNb2JGcmVlUmV3YXJkVmlkZW9Db25maWd9IG9wdGlvbnMgQWRtb2IgcmV3YXJkIGNvbmZpZ1xuICAgKiBAcmV0dXJuIHtBZE1vYkZyZWVSZXdhcmRWaWRlb0NvbmZpZ31cbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBjb25maWcob3B0aW9uczogQWRNb2JGcmVlUmV3YXJkVmlkZW9Db25maWcpOiBBZE1vYkZyZWVSZXdhcmRWaWRlb0NvbmZpZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHJld2FyZCB2aWRlbyBpcyByZWFkeVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxuICBpc1JlYWR5KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBhcmUgcmV3YXJkIHZpZGVvXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHByZXBhcmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgcmV3YXJkIHZpZGVvXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXG4gIHNob3coKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn0iXX0=