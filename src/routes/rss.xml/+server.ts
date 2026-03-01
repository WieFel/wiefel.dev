import { description, siteBaseUrl, title } from '$lib/data/meta';
import type { BlogArticle } from '$lib/utils/types';
import dateformat from 'dateformat';
import blogArticles from '$lib/data/blog-articles';

export const prerender = true;

export async function GET() {
  const body = xml(blogArticles);
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml'
  };
  return new Response(body, { headers });
}

const xml = (articles: BlogArticle[]) => `
<rss version="2.0"
	xmlns:content="http://purl.org/rss/1.0/modules/content/"
	xmlns:wfw="http://wellformedweb.org/CommentAPI/"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns:atom="http://www.w3.org/2005/Atom"
	xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
	xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
	xmlns:georss="http://www.georss.org/georss"
	xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"
>
  <channel>
    <atom:link href="${siteBaseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <title>${title}</title>
    <link>${siteBaseUrl}</link>
    <description>${description}</description>
    <image>
      <url>${siteBaseUrl}/favicons/favicon-32x32.png</url>
      <title>${title}</title>
      <link>${siteBaseUrl}</link>
      <width>32</width>
      <height>32</height>
    </image>
    ${articles
    .map(
      (article) => `
        <item>
          <guid>${article.url}</guid>
          <title>${article.title}</title>
          <description>${article.description ?? ''}</description>
          <link>${article.url}</link>
          ${article.date ? `<pubDate>${dateformat(article.date, 'ddd, dd mmm yyyy HH:MM:ss o')}</pubDate>` : ''}
          <content:encoded><![CDATA[
            <p>Read on <a href="${article.url}">Medium</a>.</p>
          ]]></content:encoded>
        </item>
      `
    )
    .join('')}
  </channel>
</rss>`;
