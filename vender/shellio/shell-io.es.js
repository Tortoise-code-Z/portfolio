const y = {
  errorContainer: "padding: 20px; text-align: center; border: 1px solid #fca5a5; background-color: #fef2f2; color: #b91c1c; font-family: Arial, sans-serif;",
  errorHeader: "font-size: 1.5rem; margin-bottom: 10px;",
  errorPre: "text-align: left; overflow: auto; max-height: 192px; margin-top: 1rem; margin-bottom: 1rem; padding: 0.75rem; background-color: #fee2e2; border: 1px solid #fca5a5; border-radius: 0.25rem; white-space: pre-wrap; word-break: break-all;",
  errorLink: "color: #4f46e5; font-weight: 500; text-decoration: none; display: inline-block; margin-top: 10px;",
  notFoundContainer: "padding: 30px; text-align: center; border: 1px solid #e5e7eb; background-color: #f9fafb; color: #374151; font-family: Arial, sans-serif; border-radius: 8px;",
  notFoundHeader: "font-size: 2.5rem; color: #1f2937; margin-bottom: 5px;",
  notFoundSubheader: "font-size: 1.25rem; color: #6b7280; margin-bottom: 20px;",
  notFoundCode: "background-color: #e5e7eb; padding: 2px 6px; border-radius: 4px; font-family: monospace;",
  notFoundLink: "color: #4f46e5; font-weight: 500; text-decoration: none; display: inline-block; margin-top: 15px; padding: 8px 15px; border: 1px solid #4f46e5; border-radius: 4px; transition: background-color 0.2s;",
  loadingContainer: "padding: 40px; text-align: center; color: #10b981; font-family: Arial, sans-serif; font-weight: bold; font-size: 1.1rem;"
};
class x {
  /**
   * @param {Object} userConfig - Opciones de configuración del router.
   * @param {string} [userConfig.rootSelector='#app'] - Selector del elemento raíz donde se renderizará la aplicación.
   * @param {Function} [userConfig.defaultLayout=null] - Componente Layout por defecto.
   * @param {Function} [userConfig.notFoundPage=null] - Componente 404 para rutas no encontradas.
   * @param {Function} [userConfig.errorPage=null] - Componente para errores de renderizado/carga.
   * @param {Function} [userConfig.loadingComponent=null] - Componente de carga para Lazy Loading.
   */
  constructor(e = {}) {
    this.routes = [], this.config = {
      rootSelector: e.rootSelector || "#app",
      defaultLayout: e.defaultLayout || null,
      notFoundPage: e.notFoundPage || null,
      errorPage: e.errorPage || null,
      loadingComponent: e.loadingComponent === void 0 ? null : e.loadingComponent
    }, this.DefaultLayoutComponent = this.config.defaultLayout, this.ErrorPage = this.config.errorPage, this.NotFoundPage = this.config.notFoundPage, this.LoadingComponent = this.config.loadingComponent, this.componentCache = /* @__PURE__ */ new Map(), this.navigate = this.navigate.bind(this), this.currentRouteContext = { route: null, component: null }, this._currentCleanup = null, this.currentPath = "", this.currentParams = {}, this.currentQueries = {};
    try {
      if (this.rootElement = document.querySelector(this.config.rootSelector), !this.rootElement)
        throw new Error(
          `Router error: The root element with selector "${this.config.rootSelector}" was not found.`
        );
    } catch (t) {
      throw this._handleFatalError(t), t;
    }
  }
  /**
   * Función auxiliar recursiva para normalizar y registrar rutas anidadas.
   * @param {Array<Object>} config - Configuración de rutas (puede ser children).
   * @returns {Array<Object>} Rutas normalizadas y planas.
   */
  _normalizeRoutes(e) {
    return e.map((t) => {
      var o, i, r;
      if (!t || !t.pathname || !t.component)
        return t && t.pathname && t.redirectTo ? {
          path: t.pathname,
          redirectTo: t.redirectTo,
          component: null,
          // No hay componente que renderizar
          children: [],
          options: t.options || {}
        } : null;
      const n = {
        // ✅ Usamos 'pathname' para el registro, que es el valor de entrada.
        path: t.pathname,
        component: t.component,
        // 🎯 MEJORA: REDIRECCIONAMIENTO
        // Almacena la propiedad redirectTo si existe
        redirectTo: t.redirectTo || null,
        // Inicializa 'children' vacío o normaliza los hijos recursivamente.
        children: [],
        layout: (o = t.options) == null ? void 0 : o.layout,
        isLazy: !!((i = t.options) != null && i.lazy),
        // 🚀 2. MEJORA 1.0.0: Guards de Ruta Dinámicos
        beforeEnter: ((r = t.options) == null ? void 0 : r.beforeEnter) || null,
        // Almacenamos el objeto options original por si acaso.
        options: t.options || {}
      };
      return t.options && t.options.children && t.options.children.length > 0 && (n.children = this._normalizeRoutes(
        t.options.children
      )), n;
    }).filter((t) => t !== null);
  }
  /**
   * Recorre todos los enlaces <a> en el DOM y aplica/elimina la clase 'active'
   * basándose en la coincidencia con la ruta actual (parcial o exacta).
   * @param {string} currentPath - La ruta actual del navegador.
   * @private
   */
  _setActiveLinkStyles(e) {
    const t = document.querySelectorAll("a[href]");
    let n = e.split("?")[0].split("#")[0];
    n === "" && (n = "/");
    const o = n === "/";
    t.forEach((i) => {
      let r = i.getAttribute("href");
      !r || r.startsWith("http") || r.startsWith("javascript:") || (r.startsWith("#") && (r = r.slice(1)), r === "" && (r = "/"), !(r.startsWith("#") && r.length > 1) && (i.classList.remove("active"), o ? r === "/" && i.classList.add("active") : (r === n || n.startsWith(r) && r !== "/") && i.classList.add("active")));
    });
  }
  // --- MÉTODOS PRIVADOS AUXILIARES ---
  /**
   * Elimina todos los nodos hijos de un contenedor DOM.
   * @param {HTMLElement} container - El elemento a vaciar.
   * @private
   */
  _emptyContainer(e) {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  }
  /**
   * Muestra un mensaje de error crítico si el router no puede inicializarse (ej. no se encuentra el rootSelector).
   * @param {Error} e - El objeto de error.
   * @private
   */
  _handleFatalError(e) {
    const t = document.body;
    t.innerHTML = `
             <div style="${y.errorContainer.replace(
      "border: 1px solid #fca5a5; background-color: #fef2f2;",
      "border: 2px solid #b91c1c; background-color: #fef2f2;"
    )}">
                 <h2 style="${y.errorHeader}">FATAL ERROR: Router Initialization Failed</h2>
                 <p>${e.message}</p>
                 <p style="margin-top: 1rem; font-size: 0.875rem; color: #4b5563;">Check your router configuration options.</p>
             </div>
         `;
  }
  /**
   * Genera el HTML de la pantalla de carga por defecto (loading spinner).
   * @returns {string} HTML de la pantalla de carga.
   * @private
   */
  _createLoadingContent() {
    return `
             <div id="router-loading-indicator" style="${y.loadingContainer}">
                 Cargando...
                 <div style="margin-top: 10px; width: 20px; height: 20px; border: 3px solid #ccc; border-top-color: #10b981; border-radius: 50%; animation: spin 1s linear infinite; display: inline-block;"></div>
             </div>
             <style>
                 @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
             </style>
         `;
  }
  /**
   * Genera el HTML de la página 404 por defecto.
   * @param {string} currentPath - La ruta que no pudo ser encontrada.
   * @returns {string} HTML de la página 404.
   * @private
   */
  _createNotFoundContent(e) {
    return `
             <div style="${y.notFoundContainer}">
                 <h1 style="${y.notFoundHeader}">404 - No Encontrado</h1>
                 <p style="${y.notFoundSubheader}">La ruta <code style="${y.notFoundCode}">${e}</code> no existe.</p>
                 <a href="/" style="${y.notFoundLink}">Volver al Home</a>
             </div>
         `;
  }
  /**
   * Genera el HTML para mostrar un error de ejecución o carga del componente.
   * @param {Error} e - El objeto de error.
   * @returns {string} HTML de la página de error.
   * @private
   */
  _createErrorContent(e) {
    console.error("Router Render Error:", e);
    const t = e.stack ? e.stack : e.message ? e.message : "Error desconocido";
    return `
             <div style="${y.errorContainer}">
                 <h1 style="${y.errorHeader}">Error de Renderizado</h1>
                 <p>Ocurrió un error al intentar mostrar esta página.</p>
                 <pre style="${y.errorPre}">${t}</pre>
                 <a href="/" style="${y.errorLink}" >Volver al Home</a>
            </div>
         `;
  }
  /**
   * Añade una ruta individual a la configuración global del router.
   * @param {string} path - El patrón de ruta (ej: '/users/:id').
   * @param {Function|string} component - El componente o función a renderizar.
   * @param {Object} [options={}] - Opciones de la ruta (children, layout, lazy).
   * @param {boolean} [options.lazy=false] - Indica si el componente es asíncrono y debe mostrar 'Loading'.
   */
  addRoute(e, t, n = {}) {
    this.routes.push({
      path: e,
      component: t,
      // 🎯 MEJORA: REDIRECCIONAMIENTO
      redirectTo: n.redirectTo || null,
      // Importante: Guarda 'children' en la propiedad 'children'
      children: n.children || [],
      // Guarda 'layout' en la propiedad 'layout'
      layout: n.layout,
      // Guarda 'lazy' en la propiedad 'isLazy'
      isLazy: !!n.lazy,
      // 🚀 2. MEJORA 1.0.0: Guards de Ruta Dinámicos
      beforeEnter: n.beforeEnter || null
    });
  }
  /**
   * Inicializa las rutas a partir de un array de configuración.
   * @param {Array<Object>} [routesConfig=[]] - Array de objetos de ruta.
   */
  init(e = []) {
    this.routes = this._normalizeRoutes(e);
  }
  /**
   * Convierte un string HTML o un Node a un DocumentFragment para inyección eficiente.
   * @param {string|Node} content - Contenido a procesar.
   * @returns {DocumentFragment|Node|null} El contenido listo para inyectar.
   */
  processContent(e) {
    if (typeof e == "string") {
      const t = document.createElement("template");
      return t.innerHTML = e, t.content;
    }
    return e instanceof Node ? e : null;
  }
  // --- MÉTODOS AUXILIARES DE RUTA ---
  /**
   * Divide una ruta en un array de segmentos limpios, eliminando barras iniciales/finales.
   * @param {string} path - La ruta a segmentar.
   * @returns {Array<string>} Array de segmentos (ej: '/a/b/' -> ['a', 'b']).
   * @private
   */
  _getSegments(e) {
    return typeof e != "string" && (e = ""), e.split("/").map((t) => t.trim()).filter((t) => t.length > 0);
  }
  /**
   * Extrae la cadena de consulta (query string) de la URL,
   * manejando la sintaxis del History API y del HashRouter.
   * @returns {string} La cadena de consulta sin el '?' inicial.
   */
  getRawQueryString() {
    const e = window.location.search, t = window.location.hash;
    if (t.includes("?")) {
      const n = t.slice(1), o = n.indexOf("?");
      let i = n.substring(o + 1);
      const r = i.indexOf("#");
      return r !== -1 && (i = i.substring(0, r)), i;
    }
    return e.startsWith("?") ? e.substring(1) : "";
  }
  /**
   * Parsea la cadena de consulta a un objeto JavaScript.
   * @returns {Object<string, string>} Objeto con los parámetros de consulta.
   * @private
   */
  _parseQueryParams() {
    const e = {}, t = this.getRawQueryString();
    if (!t) return e;
    const n = new URLSearchParams(t);
    for (const [o, i] of n.entries())
      e[o] = i;
    return e;
  }
  /**
   * Compara un patrón de ruta con una ruta actual segmento por segmento.
   * @param {string} routePath - El patrón de ruta con posibles parámetros (ej: '/users/:id').
   * @param {string} currentPath - La ruta actual (ej: '/users/123').
   * @returns {{match: boolean, params: Object, matchedRouteSegments: number}} Resultado de la coincidencia.
   */
  matchPath(e, t) {
    const n = this._getSegments(e), o = this._getSegments(t), i = {};
    let r = !0, u = 0;
    if (n.length === 0)
      return {
        match: o.length === 0,
        params: {},
        matchedRouteSegments: 0
      };
    for (let a = 0; a < n.length; a++) {
      const c = n[a];
      if (c === "*") {
        const f = o.slice(a);
        f.length > 0 && (i.wildcard = f.join("/"), u = o.length);
        break;
      }
      const h = o[a];
      if (!h) {
        r = !1;
        break;
      }
      if (c.startsWith(":")) {
        const f = c.substring(1);
        i[f] = h, u++;
      } else if (c !== h) {
        r = !1;
        break;
      } else
        u++;
    }
    return !n.includes("*") && r && n.length > o.length && (r = !1), { match: r, params: i, matchedRouteSegments: u };
  }
  /**
   * Algoritmo recursivo para buscar la cadena completa de rutas coincidentes (matches)
   * desde el nivel superior hasta el componente más anidado.
   * @param {string} currentPath - La parte de la ruta que queda por matchear.
   * @param {Array<Object>} [routes=this.routes] - Rutas en el nivel actual.
   * @param {Object} [accumulatedParams={}] - Parámetros heredados de los padres.
   * @param {Array<Object>} [matches=[]] - Cadena de coincidencias acumuladas.
   * @returns {Array<Object>|null} Array con la cadena de matches o null si no se encuentra coincidencia en el nivel superior.
   */
  findMatch(e, t = this.routes, n = {}, o = []) {
    const i = e === "/" ? "" : e.startsWith("/") ? e.substring(1) : e, r = this._getSegments(i), u = [...t].sort((a, c) => {
      const h = this._getSegments(a.path), f = this._getSegments(c.path), s = (m) => m.filter((w) => w.startsWith(":") || w === "*").length, d = s(h), l = s(f);
      return h.length !== f.length ? f.length - h.length : d !== l ? d - l : (h.length === 0 && f.length === 0, 0);
    });
    for (const a of u) {
      const c = a.path;
      if (this._getSegments(c).length === 0) {
        if (r.length === 0) {
          const b = (a.children || []).find(
            (p) => p.path === "" || p.path === "/"
          ), g = {
            route: a,
            params: n,
            component: a.component,
            // 🎯 MEJORA: REDIRECCIONAMIENTO
            redirectTo: a.redirectTo,
            // 🚀 2. MEJORA 1.0.0: Guards de Ruta Dinámicos
            beforeEnter: a.beforeEnter
          };
          return b ? [
            ...o,
            g,
            {
              route: b,
              params: n,
              component: b.component,
              // 🎯 MEJORA: REDIRECCIONAMIENTO
              redirectTo: b.redirectTo,
              // 🚀 2. MEJORA 1.0.0: Guards de Ruta Dinámicos
              beforeEnter: b.beforeEnter
            }
          ] : [...o, g];
        }
        continue;
      }
      const h = c.startsWith("/") ? c.substring(1) : c, {
        match: f,
        params: s,
        matchedRouteSegments: d
      } = this.matchPath(
        "/" + h,
        "/" + i
      );
      if (!f) continue;
      const l = { ...n, ...s }, m = {
        route: a,
        params: l,
        component: a.component,
        // 🎯 MEJORA: REDIRECCIONAMIENTO
        redirectTo: a.redirectTo,
        // 🚀 2. MEJORA 1.0.0: Guards de Ruta Dinámicos
        beforeEnter: a.beforeEnter
      };
      if (d === r.length) {
        const g = (a.children || []).find(
          (p) => p.path === "" || p.path === "/"
        );
        return g ? [
          ...o,
          m,
          {
            route: g,
            params: l,
            component: g.component,
            // 🎯 MEJORA: REDIRECCIONAMIENTO
            redirectTo: g.redirectTo,
            // 🚀 2. MEJORA 1.0.0: Guards de Ruta Dinámicos
            beforeEnter: g.beforeEnter
          }
        ] : [...o, m];
      }
      const C = r.length > d;
      if (C && a.children && a.children.length > 0) {
        const g = "/" + r.slice(d).join("/"), p = this.findMatch(
          g,
          a.children,
          l,
          [...o, m]
          // Cadena de matches acumulada
        );
        return p || [...o, m];
      } else if (C && (a.children === void 0 || a.children.length === 0))
        return [...o, m];
    }
    return null;
  }
  // Dentro de la clase BaseRouter
  /**
   * Retorna la ruta completa actualmente renderizada (path + queries).
   * @returns {string}
   */
  getCurrentPath() {
    return this.currentPath;
  }
  /**
   * Retorna los parámetros de la ruta activa (ej: /user/:id -> {id: '123'}).
   * @returns {Object}
   */
  getParams() {
    return this.currentParams;
  }
  /**
   * Retorna los query strings de la ruta activa (ej: ?sort=asc -> {sort: 'asc'}).
   * @returns {Object}
   */
  getQueries() {
    return this.currentQueries;
  }
  // Nota: El método navigate() ya existe en la clase y es accesible
  // directamente desde la instancia (ej: router.navigate('/new')).
  /**
   * Función auxiliar para resolver el componente (Lazy Load asíncrono o síncrono).
   * @param {Function|string} component - El componente a resolver.
   * @param {Object} props - Propiedades a pasar al componente.
   * @returns {Promise<string|Node|Object>} El contenido del componente o el módulo resuelto.
   * @private
   */
  async _resolveComponent(e, t) {
    if (typeof e != "function") return e;
    if (this.componentCache.has(e)) {
      const n = this.componentCache.get(e);
      return typeof n == "function" ? await n(t) : n;
    }
    try {
      const n = e(t);
      if (n instanceof Promise) {
        const o = await n;
        let i = o.default || o;
        return this.componentCache.set(e, i), typeof i == "function" ? await i(t) : i;
      } else
        return n;
    } catch (n) {
      throw n;
    }
  }
  /**
   * Método principal de renderizado. Gestiona el Layout, el 404, los errores y la cadena de anidamiento.
   * @param {string} currentPath - La ruta actual del navegador.
   * @param {boolean} [isHistoryNavigation=false] - Indica si la llamada es por history.back/forward.
   */
  /**
   * Método principal de renderizado. Gestiona el Layout, el 404, los errores y la cadena de anidamiento.
   * @param {string} currentPath - La ruta actual del navegador.
   * @param {boolean} [isHistoryNavigation=false] - Indica si la llamada es por history.back/forward.
   */
  async render(e, t = !1) {
    if (this._currentCleanup) {
      try {
        this._currentCleanup();
      } catch (s) {
        console.error("Router Cleanup Error during navigation:", s);
      }
      this._currentCleanup = null;
    }
    const n = this.findMatch(e), o = this._parseQueryParams();
    this.currentPath = e + window.location.search, this.currentQueries = o, this.currentParams = n && n.length > 0 ? n[0].params : {};
    let i = this.DefaultLayoutComponent, r = this.rootElement, u = r;
    if (n)
      for (const s of n) {
        const d = s.route.beforeEnter;
        if (typeof d == "function") {
          const l = await d(
            s.params,
            this.currentQueries
            // Usar el estado centralizado
          );
          if (typeof l == "string" && l) {
            this._emitEvent("router:guard_redirect", {
              from: e,
              to: l,
              route: s.route.path
            }), console.info(
              `[Router] Guard 'beforeEnter' en la ruta ${s.route.path} redirigió a ${l}.`
            ), this.navigate({ path: l, replace: !0 });
            return;
          }
        }
      }
    if (n && n.length > 0 && n[0].redirectTo) {
      const s = n[0].redirectTo;
      this._emitEvent("router:redirect", {
        from: e,
        to: s,
        type: "CONFIG_REDIRECT"
      }), console.info(
        `[Router] Redirección configurada de ${e} a ${s}.`
      ), this.navigate({ path: s, replace: !0 });
      return;
    }
    if (!n || n.length === 0) {
      const s = this.NotFoundPage ? await this._resolveComponent(this.NotFoundPage) : this._createNotFoundContent(e);
      this._emptyContainer(r);
      const d = this.processContent(s);
      d && r.appendChild(d), this._setActiveLinkStyles(e), this._emitEvent("router:error", {
        path: e,
        type: "NOT_FOUND",
        error: new Error(`Route not found: ${e}`)
      }), t || window.scrollTo(0, 0);
      return;
    }
    let c = n[0].route.layout;
    if (c !== void 0 && (i = c), i) {
      this._emptyContainer(r);
      const s = await this._resolveComponent(i), d = this.processContent(s);
      d && r.appendChild(d);
      const l = r.querySelector(".main-content");
      l ? u = l : (console.warn(
        "Router Warning: The Layout was rendered, but the required element with class '.main-content' was not found. Injecting content directly into the root element."
      ), u = r);
    } else
      this._emptyContainer(r);
    let h = u, f = !0;
    for (let s = 0; s < n.length; s++) {
      const d = n[s];
      if (s > 0) {
        const p = h.querySelector("#router-outlet");
        if (p)
          h = p, this._emptyContainer(h);
        else if (s < n.length - 1) {
          console.warn(
            `Router Warning: Component for path "${d.route.path}" is a child (level ${s}), but the parent component did not render an <div id="router-outlet">. Deteniendo el anidamiento.`
          ), f = !1;
          break;
        }
      }
      this.currentParams = d.params;
      let l, m = !1;
      const w = this.LoadingComponent;
      try {
        let p = this._resolveComponent(d.component);
        if (d.route.isLazy && h && w) {
          const E = typeof w == "function" ? w() : w, _ = this.processContent(E);
          this._emptyContainer(h), _ && h.appendChild(_), await Promise.resolve();
        }
        l = await p;
      } catch (p) {
        l = this.ErrorPage ? await this._resolveComponent(this.ErrorPage, {
          error: p,
          currentPath: e,
          navigate: this.navigate
        }) : this._createErrorContent(p), m = !0, this._emitEvent("router:error", {
          path: e,
          type: "RENDER_FAIL",
          error: p
        });
      }
      let C = null, b = l;
      typeof l == "object" && l !== null && Object.prototype.hasOwnProperty.call(l, "content") && (C = l.onCleanup, b = l.content);
      const g = this.processContent(
        b
      );
      if (this._emptyContainer(h), g && h.appendChild(g), s === n.length - 1 && (this._currentCleanup = C), m) {
        f = !1;
        break;
      }
    }
    this.rootElement && this._setActiveLinkStyles(e), f && this._emitEvent("router:rendered", { path: e, matches: n }), t || window.scrollTo(0, 0);
  }
  /**
   * Configura el listener de clic global para manejar la navegación interna.
   * Evita la recarga de página para enlaces internos.
   * @param {function(string): string} [transformer] - Función para transformar la ruta (usado por HashRouter).
   * @private
   */
  _setupClickListener(e = (t) => t) {
    document.body.addEventListener("click", (t) => {
      const n = t.target.closest("a");
      if (n && n.target !== "_blank") {
        const o = n.getAttribute("href");
        if (!o || o.startsWith("http") || o.startsWith("javascript:") || o.startsWith("mailto:") || o.startsWith("tel:"))
          return;
        try {
          const i = new URL(o, window.location.href);
          if (i.origin === window.location.origin) {
            t.preventDefault();
            let r = i.pathname + i.search + i.hash;
            const u = r.indexOf("#");
            let a = r, c = "";
            u !== -1 && (a = r.substring(
              0,
              u
            ), c = r.substring(
              u + 1
            ));
            const h = window.location.pathname + window.location.search;
            let f = !0;
            a === h && (f = !1), f && this.navigate(e(a)), c && setTimeout(
              () => {
                const s = document.getElementById(c);
                if (s && s.scrollIntoView({
                  behavior: "smooth"
                }), !f && c) {
                  const d = new URL(
                    window.location.href
                  );
                  let l;
                  if (this instanceof P) {
                    let m = window.location.hash;
                    l = (m.includes("#", 1) ? m.substring(
                      0,
                      m.lastIndexOf(
                        "#"
                      )
                    ) : m) + "#" + c;
                  } else
                    l = "#" + c;
                  d.hash = l, window.history.pushState(
                    null,
                    null,
                    d.toString()
                  );
                }
              },
              f ? 50 : 0
            );
          }
        } catch {
        }
      }
    });
  }
  /**
   * Normaliza y procesa las diferentes formas de entrada de navigate().
   * Soporta string, { path, replace }, y la nueva { queries, replace }.
   * @param {string|Object} pathOrOptions - La entrada del desarrollador.
   * @returns {{path: string, replace: boolean}} Objeto de opciones con la ruta final.
   * @private
   */
  _processNavigationOptions(e) {
    let t = "", n = !1, o = {};
    return typeof e == "string" ? t = e : typeof e == "object" && e !== null && (n = e.replace || !1, e.path ? (t = e.path, o = e.queries || {}) : e.queries && (t = this._extractPathFromUrl().split("?")[0].split("#")[0], o = e.queries)), Object.keys(o).length > 0 && (t = this.createUrl(t, {}, o)), { path: t, replace: n };
  }
  /**
   * Crea una URL completa sustituyendo parámetros de ruta y adjuntando query parameters.
   * Garantiza la correcta codificación de componentes (encodeURIComponent).
   * * Este método está diseñado para ser usado por el desarrollador para generar enlaces.
   * * @param {string} path - La plantilla de ruta (ej: '/users/:id').
   * @param {Object} [params={}] - Parámetros de ruta a sustituir (ej: {id: 123}).
   * @param {Object} [queries={}] - Parámetros de consulta a adjuntar (ej: {sort: 'asc'}).
   * @returns {string} La URL final construida y codificada.
   */
  createUrl(e, t = {}, n = {}) {
    let o = e;
    for (const u in t)
      if (Object.prototype.hasOwnProperty.call(t, u)) {
        const a = new RegExp(":" + u, "g");
        o = o.replace(
          a,
          encodeURIComponent(t[u])
        );
      }
    let i = "";
    const r = [];
    for (const u in n)
      if (Object.prototype.hasOwnProperty.call(n, u)) {
        const a = n[u], c = encodeURIComponent(u), h = encodeURIComponent(a);
        r.push(`${c}=${h}`);
      }
    return r.length > 0 && (i = "?" + r.join("&")), o + i;
  }
  /**
   * @typedef {string|{path: string, replace?: boolean}} PathOrOptions
   * Método de navegación. Debe ser implementado por las subclases (`Router` o `HashRouter`).
   * @param {PathOrOptions} pathOrOptions - La ruta de destino o un objeto de opciones.
   */
  navigate(e) {
  }
  /**
   * Obtiene la ruta actual del navegador. Debe ser implementado por las subclases.
   * @returns {string} La ruta actual limpia.
   */
  _extractPathFromUrl() {
  }
  /**
   * Navega a la entrada anterior en el historial del navegador.
   * Equivalente a history.back()
   */
  goBack() {
    history.back();
  }
  /**
   * Navega a la entrada siguiente en el historial del navegador.
   * Equivalente a history.forward()
   */
  goForward() {
    history.forward();
  }
  /**
   * ✅ (Mejora 5) Emite un evento customizado en el objeto window.
   * @param {string} eventName - El nombre del evento (ej: 'router:rendered').
   * @param {Object} detail - El objeto de datos a adjuntar.
   * @private
   */
  _emitEvent(e, t) {
    if (typeof window < "u" && window.CustomEvent) {
      const n = new CustomEvent(e, {
        detail: { ...t, timestamp: Date.now() }
      });
      window.dispatchEvent(n);
    }
  }
}
class S extends x {
  /**
   * Navega a una nueva URL usando `history.pushState` o `history.replaceState`.
   * @param {string|Object} pathOrOptions - La ruta de destino o un objeto de opciones.
   */
  navigate(e) {
    const { path: t, replace: n } = this._processNavigationOptions(e);
    n ? history.replaceState(null, "", t) : history.pushState(null, "", t), this._emitEvent("router:navigate", {
      path: t,
      replaced: n || !1
    }), this.render(this._extractPathFromUrl(), !1);
  }
  /**
   * Obtiene la ruta actual usando `window.location.pathname`.
   * @returns {string} La ruta actual.
   */
  _extractPathFromUrl() {
    return window.location.pathname;
  }
  /**
   * Inicializa el Router, configura el listener `onpopstate` y realiza el renderizado inicial.
   * @param {Array<Object>} routesConfig - Configuración de rutas.
   */
  init(e) {
    super.init(e), window.onpopstate = () => this.render(this._extractPathFromUrl(), !0), this._setupClickListener(), this.render(this._extractPathFromUrl(), !1);
  }
}
class P extends x {
  /**
   * Navega estableciendo el `window.location.hash` usando un objeto de opciones.
   * @param {string|Object} pathOrOptions - La ruta de destino o un objeto de opciones.
   */
  // --- Clase HashRouter ---
  navigate(e) {
    if (console.log("--- HashRouter.navigate ---"), console.log("Path recibido (después de transformer):", e), window.location.hash === e) {
      console.log("Navegación omitida: Hash ya establecido.");
      return;
    }
    window.location.hash = e, console.log("Hash establecido con éxito.");
  }
  /**
   * Obtiene la ruta actual extrayéndola de `window.location.hash`.
   * Limpia cualquier query string o ancla interna.
   * @returns {string} La ruta actual limpia (ej: /users/123).
   */
  _extractPathFromUrl() {
    let e = window.location.hash, t = e.slice(1) || "/";
    if (e.startsWith("#") && e.length > 1 && !e.includes("/"))
      return window.location.pathname.split("?")[0];
    const o = t.indexOf("?");
    o !== -1 && (t = t.substring(0, o));
    const i = t.indexOf("#");
    return i !== -1 && (t = t.substring(0, i)), t || "/";
  }
  /**
   * Inicializa el HashRouter, configura el listener `onhashchange` y realiza el renderizado inicial.
   * @param {Array<Object>} routesConfig - Configuración de rutas.
   */
  init(e) {
    super.init(e), window.onhashchange = () => this.render(this._extractPathFromUrl(), !0), this._setupClickListener((t) => {
      let n = t.replace(/\/+/g, "/");
      return n === "/" ? "#/" : "#/" + n.slice(1);
    }), this.render(this._extractPathFromUrl(), !1);
  }
}
export {
  P as HashRouter,
  S as Router
};
