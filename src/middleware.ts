import { defineMiddleware } from "astro/middleware"
import { extractRouteLangCode, astroI18n } from "astro-i18n"

export const onRequest = defineMiddleware(({ locals, request }, next) => {
  locals.lang = extractRouteLangCode(request.url) || astroI18n.defaultLangCode
  return next()
})
