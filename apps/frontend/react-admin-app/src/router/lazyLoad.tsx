import { Suspense, lazy, type ComponentType } from "react";
import { Spin } from "antd";
// 简单实现
export const lazyLoad = (factory: () => Promise<any>) => {
  const LazyComponent = lazy(factory);

  return (props: any) => (
    <Suspense fallback={<Spin size="large" />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export const wrapWithSuspense = (LazyComp: ComponentType) => {
  const Wrapped = () => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComp />
    </Suspense>
  );
  return Wrapped;
};
