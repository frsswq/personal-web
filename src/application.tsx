import * as stylex from "@stylexjs/stylex";
import { Link, Route, Routes } from "react-router";

import { siteName } from "./site";

const styles = stylex.create({
  app: {
    backgroundColor: "#f8fafc",
    color: "#0f172a",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  card: {
    backgroundColor: "#ffffff",
    borderColor: "#e2e8f0",
    borderRadius: "1rem",
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: "0 16px 40px rgb(15 23 42 / 0.08)",
    maxWidth: "42rem",
    padding: "clamp(1.5rem, 4vw, 3rem)",
    width: "100%",
  },
  content: {
    display: "grid",
    flex: 1,
    padding: "clamp(1.5rem, 5vw, 5rem)",
    placeItems: "center",
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    letterSpacing: "-0.04em",
    lineHeight: 1.1,
    marginBlock: 0,
  },
  navigation: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderBottomColor: "#e2e8f0",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    display: "flex",
    gap: "1.5rem",
    justifyContent: "space-between",
    paddingBlock: "1rem",
    paddingInline: "clamp(1.5rem, 5vw, 5rem)",
  },
  navigationLink: {
    color: "#334155",
    fontWeight: 600,
    textDecoration: "none",
  },
  navigationLinks: {
    display: "flex",
    gap: "1rem",
  },
  paragraph: {
    color: "#475569",
    fontSize: "1.125rem",
    lineHeight: 1.6,
    marginBlockEnd: 0,
    marginBlockStart: "1rem",
  },
});

const HomePage = () => (
  <main {...stylex.props(styles.content)}>
    <section {...stylex.props(styles.card)}>
      <h1 {...stylex.props(styles.heading)}>{siteName}</h1>
      <p {...stylex.props(styles.paragraph)}>
        A React, TypeScript, Vite, and StyleX foundation that deploys to
        Cloudflare Pages.
      </p>
    </section>
  </main>
);

const AboutPage = () => (
  <main {...stylex.props(styles.content)}>
    <section {...stylex.props(styles.card)}>
      <h1 {...stylex.props(styles.heading)}>About</h1>
      <p {...stylex.props(styles.paragraph)}>
        Routing is handled in the browser with React Router.
      </p>
    </section>
  </main>
);

const NotFoundPage = () => (
  <main {...stylex.props(styles.content)}>
    <section {...stylex.props(styles.card)}>
      <h1 {...stylex.props(styles.heading)}>Page not found</h1>
      <p {...stylex.props(styles.paragraph)}>
        Choose a page from the navigation.
      </p>
    </section>
  </main>
);

export const App = () => (
  <div {...stylex.props(styles.app)}>
    <nav {...stylex.props(styles.navigation)} aria-label="Main navigation">
      <Link {...stylex.props(styles.navigationLink)} to="/">
        {siteName}
      </Link>
      <div {...stylex.props(styles.navigationLinks)}>
        <Link {...stylex.props(styles.navigationLink)} to="/">
          Home
        </Link>
        <Link {...stylex.props(styles.navigationLink)} to="/about">
          About
        </Link>
      </div>
    </nav>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route element={<NotFoundPage />} path="*" />
    </Routes>
  </div>
);
