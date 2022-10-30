import { useEffect } from "react";
import ReactGA from "react-ga4";

export const usePageTracking = () => {

  useEffect(() => {
    // Google Analytics 測定 ID を入力して設定
    ReactGA.initialize(`${process.env.PUBLIC_URL}`);
    ReactGA.send({
      hitType: "pageview",
      // アクセスしたパス (pathname) とクエリ文字列 (search) を送付する (必要に応じて編集する)
      page: 'landing-page'
    });
  }, []);
};

export const useEventTracking = (event: string) => {
    // Google Analytics 測定 ID を入力して設定
    ReactGA.initialize(`${process.env.PUBLIC_URL}`);
    ReactGA.event(event);
    return undefined;
}
