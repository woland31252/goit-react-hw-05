import { Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";
import css from "../Layout/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Navigation />
      <Suspense fallback={<p>Loading page...</p>}>{children}</Suspense>
    </div>
  );
}
