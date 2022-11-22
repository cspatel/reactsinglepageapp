import { useContext } from "react";
import { ThemeContext } from "./theme-context";

export default function Header({ headingTitle }) {
  const themeContext = useContext(ThemeContext);
  return (
    <header className="header">
      <picture
        className={`hero-image-block hero-image-block-${themeContext.theme.name}`}
      >
        <source
          srcSet="https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=199&amp;h=230 1x, https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=199&amp;h=230 2x"
          media="(max-width: 199px)"
        />
        <source
          srcSet="https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=399&amp;h=230 1x, https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=399&amp;h=230 2x"
          media="(min-width: 200px) and (max-width: 399px)"
        />
        <source
          srcSet="https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=599&amp;h=310 1x, https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=599&amp;h=310 2x"
          media="(min-width: 400px) and (max-width: 599px)"
        />
        <source
          srcSet="https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=799&amp;h=594 1x, https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=799&amp;h=594 2x"
          media="(min-width: 600px) and (max-width: 799px)"
        />
        <source
          srcSet="https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=999&amp;h=594 1x, https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=999&amp;h=594 2x"
          media="(min-width: 800px) and (max-width: 999px)"
        />
        <source
          srcSet="https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1199&amp;h=594 1x, https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1199&amp;h=594 2x"
          media="(min-width: 1000px) and (max-width: 1199px)"
        />
        <source
          srcSet="https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1399&amp;h=594 1x, https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1399&amp;h=594 2x"
          media="(min-width: 1200px) and (max-width: 1399px)"
        />
        <source
          srcSet="https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1599&amp;h=594 1x, https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1599&amp;h=594 2x"
          media="(min-width: 1400px) and (max-width: 1599px)"
        />
        <source
          srcSet="https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1799&amp;h=594 1x, https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1799&amp;h=594 2x"
          media="(min-width: 1600px) and (max-width: 1799px)"
        />
        <source
          srcSet="https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1999&amp;h=594 1x, https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1999&amp;h=594 2x"
          media="(min-width: 1800px)"
        />
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=1&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1399&amp;h=594 1x, https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?crop=entropy&amp;cs=tinysrgb&amp;fm=jpg&amp;ixlib=rb-1.2.1&amp;q=80&amp;raw_url=true&amp;ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&amp;dpr=2&amp;auto=format%2Ccompress&amp;fit=crop&amp;w=1399&amp;h=594 2x"
          alt=""
        />
      </picture>
      <div className="hero-block">
        <h2 className={`hero-heading hero-heading-${themeContext.theme.name}`}>
          {headingTitle}
        </h2>
        <p
          className={`hero-subheading hero-subheading-${themeContext.theme.name}`}
        >
          Hero Subheading
        </p>
        <a
          className={`hero-link hero-link-${themeContext.theme.name}`}
          href="#"
        >
          Learn More
        </a>
      </div>
    </header>
  );
}
