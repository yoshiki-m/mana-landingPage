// ページビュー
export const pageView = (title: string, path: string) => {
    if (process.env.REACT_APP_GA_TRACKING_ID) {
        gtag("config", process.env.REACT_APP_GA_TRACKING_ID, {
        page_title: title,
        page_path: path,
        });
    } else {
        console.log(
        "Tracking not enabled, as `trackingId` was not given and there is no `GA4_MEASUREMENT_ID`."
        );
    }
};

  // イベントトラッキング
export const trackingEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
    ) => {
    gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};