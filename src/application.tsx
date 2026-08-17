import * as stylex from "@stylexjs/stylex";
import { Route, Routes } from "react-router";

import { colors, fonts, space } from "./tokens.stylex";

const styles = stylex.create({
  card: {
    backgroundColor: colors.card,
    borderColor: colors.cardBorder,
    borderRadius: "0.875rem",
    borderStyle: "solid",
    borderWidth: "1px",
    paddingBlock: "0.875rem",
    paddingInline: "1.125rem",
  },
  group: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: space.block,
  },
  link: {
    color: colors.link,
    textDecorationColor: {
      ":hover": colors.linkUnderlineHover,
      default: colors.linkUnderline,
    },
    textDecorationLine: "underline",
    textDecorationThickness: "1px",
    textUnderlineOffset: "3px",
  },
  main: {
    color: colors.text,
    display: "flex",
    flexDirection: "column",
    fontSize: "1rem",
    gap: space.stack,
    lineHeight: 1.625,
    maxWidth: "600px",
    paddingBlockEnd: space.pageTop,
    paddingBlockStart: space.pageTop,
    paddingInline: {
      "@media (min-width: 1024px)": space.pageInlineLarge,
      default: space.pageInline,
    },
    width: "100%",
  },
  name: {
    fontFamily: fonts.sans,
    fontSize: "1.125rem",
    fontVariantLigatures: "common-ligatures",
    fontWeight: 600,
    letterSpacing: "normal",
    lineHeight: 1.2,
    margin: 0,
  },
  page: {
    backgroundColor: colors.background,
    display: "flex",
    justifyContent: "center",
    minHeight: "100dvh",
  },
  paragraph: {
    lineHeight: 1.4,
    margin: 0,
  },
  role: {
    color: colors.muted,
  },
  roleLink: {
    color: colors.muted,
  },
  topLinks: {
    display: "flex",
    gap: "1rem",
  },
});

const HomePage = () => (
  <main {...stylex.props(styles.main)}>
    <div {...stylex.props(styles.topLinks)}>
      <a
        {...stylex.props(styles.link)}
        href="https://github.com/frsswq"
        rel="noreferrer"
        target="_blank"
      >
        GitHub
      </a>
      <a
        {...stylex.props(styles.link)}
        href="mailto:farissaifuddin.work@gmail.com"
      >
        Email
      </a>
      <a
        {...stylex.props(styles.link)}
        href="https://www.linkedin.com/in/farissaifuddinwafiq/"
        rel="noreferrer"
        target="_blank"
      >
        LinkedIn
      </a>
    </div>

    <div {...stylex.props(styles.card, styles.header)}>
      <h1 {...stylex.props(styles.name)}>Faris Saifuddin Wafiq</h1>
      <p {...stylex.props(styles.paragraph, styles.role)}>
        People Technology Analyst at{" "}
        <a
          {...stylex.props(styles.link, styles.roleLink)}
          href="https://www.linkedin.com/company/srwco"
          rel="noreferrer"
          target="_blank"
        >
          SRW&amp;Co.
        </a>
      </p>
    </div>

    <div {...stylex.props(styles.card, styles.group)}>
      <p {...stylex.props(styles.paragraph)}>
        I turn operational problems into automation, AI-enabled workflows, and
        data solutions.
      </p>
      <p {...stylex.props(styles.paragraph)}>
        I love design, programming, and building stuff.
      </p>
    </div>
  </main>
);

export const App = () => (
  <div {...stylex.props(styles.page)}>
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<HomePage />} path="*" />
    </Routes>
  </div>
);
