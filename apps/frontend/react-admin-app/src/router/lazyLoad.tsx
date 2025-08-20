import { Suspense, lazy, type ComponentType } from "react";
import { Spin } from "antd";

const FullScreenLoader = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh", // 确保占满屏幕
      backgroundColor: "rgba(255,255,255,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}
  >
    <Spin size="large" />
  </div>
);
// 简单实现
export const lazyLoad = (factory: () => Promise<any>) => {
  const LazyComponent = lazy(factory);

  return (props: any) => (
    <Suspense fallback={<FullScreenLoader />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export const wrapWithSuspense = (LazyComp: ComponentType) => {
  const Wrapped = () => (
    <Suspense>
      <LazyComp />
    </Suspense>
  );
  return Wrapped;
};
