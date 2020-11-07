;(this['webpackJsonpmy-app'] = this['webpackJsonpmy-app'] || []).push([
    [0],
    {
        100: function (e, a, t) {
            e.exports = { buttonBlock: 'Button2_buttonBlock__1zKV-' }
        },
        137: function (e, a, t) {},
        138: function (e, a, t) {},
        139: function (e, a, t) {},
        140: function (e, a, t) {},
        145: function (e, a, t) {
            e.exports = { button: 'MyButton_button__1nIt2' }
        },
        146: function (e, a, t) {
            e.exports = { headlineBlock: 'SiteHeadline_headlineBlock__14fqw' }
        },
        148: function (e, a, t) {
            e.exports = t.p + 'static/media/loader.4ceb795a.svg'
        },
        151: function (e, a, t) {
            e.exports = { item: 'Item_item__briFZ' }
        },
        152: function (e, a, t) {
            e.exports = t.p + 'static/media/user.f8a15e74.png'
        },
        183: function (e, a, t) {
            e.exports = t(327)
        },
        188: function (e, a, t) {},
        19: function (e, a, t) {
            e.exports = {
                introBlock: 'FrontPage_introBlock__MKv_Y',
                introText: 'FrontPage_introText__1rVsv',
                worksList: 'FrontPage_worksList__36R21',
                icon: 'FrontPage_icon__1BlqP',
                styleBtn: 'FrontPage_styleBtn__2DLIN',
                slider: 'FrontPage_slider__3VmS4',
                btnWidth: 'FrontPage_btnWidth__exYU3',
                benefitsBlock: 'FrontPage_benefitsBlock__3GdqU',
                benefitsText: 'FrontPage_benefitsText__3sf2q',
                gallery__item: 'FrontPage_gallery__item__urGjK',
                galleryText: 'FrontPage_galleryText__3xxaP',
                worksBlock: 'FrontPage_worksBlock__3AYjv',
            }
        },
        210: function (e, a, t) {},
        26: function (e, a, t) {
            e.exports = {
                productsPagination: 'Paginator_productsPagination__1rVOV',
                pageLink: 'Paginator_pageLink__1zzBf',
                selectedPageLink: 'Paginator_selectedPageLink__3rEL4',
                pageItem: 'Paginator_pageItem__1hZTJ',
                'page-link': 'Paginator_page-link__2pSO0',
            }
        },
        31: function (e, a, t) {
            e.exports = {
                sidebar: 'Sidebar_sidebar__2WupE',
                sidebarItem: 'Sidebar_sidebarItem__WUKLw',
                sidebarText: 'Sidebar_sidebarText__12yNW',
            }
        },
        315: function (e, a, t) {},
        316: function (e, a, t) {},
        317: function (e, a, t) {},
        318: function (e, a, t) {},
        319: function (e, a, t) {},
        320: function (e, a, t) {},
        321: function (e, a, t) {},
        322: function (e, a, t) {},
        323: function (e, a, t) {},
        324: function (e, a, t) {},
        325: function (e, a, t) {},
        326: function (e, a, t) {},
        327: function (e, a, t) {
            'use strict'
            t.r(a)
            var n = t(0),
                l = t.n(n),
                r = t(42),
                c = t.n(r),
                s = (t(188), t(8)),
                o = t(9),
                m = t(11),
                i = t(10),
                u = t(5),
                d = t(15),
                E = t(3),
                p = t(29),
                f = t.n(p),
                g = t(51),
                v = { ServerMessage: { message: null, status: null, id: null }, errorsMessage: { message: null, status: null, id: null } },
                N = function () {
                    return { type: 'CLEAR_ERRORS' }
                },
                h = function () {
                    return { type: 'CLEAR_SUCCESS' }
                },
                b = function (e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                    return { type: 'GET_ERRORS', payload: { message: e, status: a, id: t } }
                },
                y = function (e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                    return { type: 'GET_SUCCESS', payload: { message: e, status: a, id: t } }
                },
                _ = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
                        a = arguments.length > 1 ? arguments[1] : void 0
                    switch (a.type) {
                        case 'GET_ERRORS':
                            return { errorsMessage: { message: a.payload.message, status: a.payload.status, id: a.payload.id } }
                        case 'GET_SUCCESS':
                            return { ServerMessage: { message: a.payload.message, status: a.payload.status, id: a.payload.id } }
                        case 'CLEAR_ERRORS':
                        case 'CLEAR_SUCCESS':
                            return v
                        default:
                            return e
                    }
                },
                x = t(35),
                k = 'http://localhost:5000/',
                S = x.create({ baseUrl: k, headers: { 'x-auth-token': sessionStorage.getItem('token') } }),
                O = function (e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                    return x.post('http://localhost:5000/goods?page='.concat(t, '&pageSize=').concat(a), { data: e })
                },
                w = function (e) {
                    return x.post(k + 'auth/subscribe', { email: e })
                },
                I = function (e) {
                    return S.get(k + 'goods/'.concat(e))
                },
                j = function (e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                    return x.post('http://localhost:5000/auth/', { email: e, password: a, rememberMe: t })
                },
                R = function (e, a, t) {
                    return x.post('http://localhost:5000/users', { name: e, email: a, password: t })
                },
                C = function (e) {
                    return x.post('http://localhost:5000/users/forgot_password', { forgotEmail: e })
                },
                T = function (e, a, t) {
                    return S.post('http://localhost:5000/users/reset_password', { newPassword: e, verifyPassword: a, token: t })
                },
                A = function (e, a, t, n) {
                    return S.post('http://localhost:5000/users/change_password', {
                        oldPass: e,
                        newPassword: a,
                        verifyPassword: t,
                        email: n,
                    })
                },
                P = function () {
                    return S.get('http://localhost:5000/auth/user')
                },
                B = function (e, a, t) {
                    return S.post('http://localhost:5000/orders', { items: e, inform: a, userId: t })
                },
                D = function (e) {
                    return S.post('http://localhost:5000/orders/unlogin', { data: e })
                },
                L = function (e) {
                    return S.get('http://localhost:5000/orders/'.concat(e))
                },
                M = function (e) {
                    return S.get('http://localhost:5000/inform/'.concat(e))
                },
                U = function (e, a) {
                    return S.put('http://localhost:5000/inform/'.concat(e), a, { header: { 'Content-Type': 'multipart/form-data' } })
                },
                F = function (e, a) {
                    a.append('isAddInform', !0)
                    return S.post('http://localhost:5000/inform/'.concat(e), a, { header: { 'Content-Type': 'multipart/form-data' } })
                },
                G = function (e, a) {
                    return S.post('http://localhost:5000/users/help', { helpMessage: e, userId: a })
                },
                z = function (e, a, t, n) {
                    var l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 100
                    t.append('name', e), t.append('photo', a), t.append('rating', l)
                    var r = { header: { 'Content-Type': 'multipart/form-data' } }
                    return S.post('http://localhost:5000/goods/reviews/'.concat(n), t, r)
                },
                V = {
                    token: sessionStorage.getItem('token') || '',
                    isAuth: null,
                    isLoading: !1,
                    user: null,
                    userInform: null,
                    forgotEmail: null,
                    emailSent: !1,
                },
                H = function (e, a) {
                    return { type: 'USER_LOADED', payload: e, userInform: a }
                },
                q = function (e, a, t) {
                    return (function () {
                        var n = Object(g.a)(
                            f.a.mark(function n(l) {
                                return f.a.wrap(function (n) {
                                    for (;;)
                                        switch ((n.prev = n.next)) {
                                            case 0:
                                                l({ type: 'USER_LOADING' }),
                                                    j(e, a, t)
                                                        .then(function (e) {
                                                            l(H(e.data, e.data.inform.inform)),
                                                                l({ type: 'LOGIN_SUCCESS', payload: e.data })
                                                        })
                                                        .catch(function (e) {
                                                            l(b(e.response.data.message, e.response.status, 'LOGIN_FAIL')),
                                                                l({ type: 'LOGIN_FAIL' })
                                                        })
                                            case 2:
                                            case 'end':
                                                return n.stop()
                                        }
                                }, n)
                            })
                        )
                        return function (e) {
                            return n.apply(this, arguments)
                        }
                    })()
                },
                W = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
                        a = arguments.length > 1 ? arguments[1] : void 0
                    switch (a.type) {
                        case 'USER_LOADING':
                            return Object(E.a)(Object(E.a)({}, e), {}, { isLoading: !0 })
                        case 'USER_LOADED':
                            return (
                                sessionStorage.setItem('token', a.payload.token),
                                Object(E.a)(Object(E.a)({}, e), {}, { isAuth: !0, user: a.payload.user, userInform: a.userInform })
                            )
                        case 'LOGIN_SUCCESS':
                        case 'REGISTER_SUCCESS':
                            return (
                                sessionStorage.setItem('token', a.payload.token),
                                Object(E.a)(Object(E.a)({}, e), {}, { isAuth: !0, isLoading: !1 })
                            )
                        case 'AUTH_ERROR':
                        case 'LOGIN_FAIL':
                        case 'REGISTER_FAIL':
                        case 'LOGOUT_SUCCESS':
                            return (
                                sessionStorage.removeItem('token'),
                                Object(E.a)(
                                    Object(E.a)({}, e),
                                    {},
                                    { isAuth: !1, isLoading: !1, user: null, userInform: null, token: null }
                                )
                            )
                        case 'FORGOT_PASS':
                            return Object(E.a)(Object(E.a)({}, e), {}, { forgotEmail: a.forgotEmail })
                        case 'EMAIL_SENT':
                            return Object(E.a)(Object(E.a)({}, e), {}, { emailSent: a.bool })
                        case 'FORGOT_PASS_RESET':
                            return Object(E.a)(Object(E.a)({}, e), {}, { forgotEmail: a.forgotEmail, emailSent: !1 })
                        default:
                            return e
                    }
                },
                Y = { inform: null, isAddInform: !1, sendHelpMessage: !1 },
                Q = function (e, a) {
                    return { type: 'GET_INFORM_OF_USER', inform: e, isAddInform: a }
                },
                X = function (e) {
                    return function (a) {
                        M(e).then(function (e) {
                            a(Q(e.data.inform, e.data.isAddInform))
                        })
                    }
                },
                Z = function (e) {
                    return function (a, t) {
                        U(t().auth.user.id, e)
                            .then(function (e) {
                                a(y(e.data.message, e.status, 'SUCCESS_USER_INFORM_CHANGE'))
                            })
                            .catch(function (e) {
                                a(b(e.response.data.message, e.response.status, 'USER_INFORM_CHANGE_ERROR'))
                            })
                    }
                },
                J = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
                        a = arguments.length > 1 ? arguments[1] : void 0
                    switch (a.type) {
                        case 'GET_INFORM_OF_USER':
                            return Object(E.a)(Object(E.a)({}, e), {}, { inform: a.inform, isAddInform: a.isAddInform })
                        default:
                            return e
                    }
                },
                K = { initialized: !1, isPopUp: !1 },
                $ = function (e) {
                    return { type: 'APP_IS_POPUP', isPopUp: e }
                },
                ee = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K,
                        a = arguments.length > 1 ? arguments[1] : void 0
                    switch (a.type) {
                        case 'SET_INITIALIZED':
                            return Object(E.a)(Object(E.a)({}, e), {}, { initialized: !0 })
                        case 'APP_IS_POPUP':
                            return Object(E.a)(Object(E.a)({}, e), {}, { isPopUp: a.isPopUp })
                        default:
                            return e
                    }
                },
                ae = t(4),
                te = t(95),
                ne = t.n(te),
                le = function () {
                    return l.a.createElement(
                        'section',
                        { className: ne.a.linkBlock },
                        l.a.createElement(
                            'div',
                            { className: 'container' },
                            l.a.createElement(
                                'div',
                                { className: 'row' },
                                l.a.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    l.a.createElement(
                                        'ul',
                                        { className: ne.a.linkInform },
                                        l.a.createElement('li', null, 'Home / '),
                                        l.a.createElement('li', null, ' All our products / '),
                                        l.a.createElement('li', null, ' Maxi dress / '),
                                        l.a.createElement('li', null, ' Sussex Copper Fait Maxi dress')
                                    )
                                )
                            )
                        )
                    )
                },
                re = t(31),
                ce = t.n(re),
                se = function () {
                    return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement('p', { className: ce.a.sidebarText }, 'Menu'),
                        l.a.createElement(
                            'div',
                            { className: ce.a.sidebar },
                            l.a.createElement(
                                'ul',
                                null,
                                l.a.createElement(
                                    u.c,
                                    { activeStyle: { color: '#E77E83' }, to: '/orders', className: ce.a.sidebarItem },
                                    l.a.createElement('img', { src: 'images/svg/Vector (16).svg', alt: '' }),
                                    l.a.createElement('li', null, 'My orders')
                                ),
                                l.a.createElement(
                                    u.c,
                                    { activeStyle: { color: '#E77E83' }, to: '/return', className: ce.a.sidebarItem },
                                    l.a.createElement('img', { src: 'images/svg/Vector (17).svg', alt: '' }),
                                    l.a.createElement('li', null, 'Return')
                                ),
                                l.a.createElement(
                                    u.c,
                                    { activeStyle: { color: '#E77E83' }, to: '/inform', className: ce.a.sidebarItem },
                                    l.a.createElement('img', { src: 'images/svg/Vector (18).svg', alt: '' }),
                                    l.a.createElement('li', null, 'My Information')
                                ),
                                l.a.createElement(
                                    u.c,
                                    { activeStyle: { color: '#E77E83' }, to: '/changepass', className: ce.a.sidebarItem },
                                    l.a.createElement('img', { src: 'images/svg/Vector (19).svg', alt: '' }),
                                    l.a.createElement('li', null, 'Change Password')
                                ),
                                l.a.createElement(
                                    u.c,
                                    { activeStyle: { color: '#E77E83' }, to: '/feedback', className: ce.a.sidebarItem },
                                    l.a.createElement('img', { src: 'images/svg/Vector (20).svg', alt: '' }),
                                    l.a.createElement('li', null, 'Share Feedback')
                                ),
                                l.a.createElement(
                                    u.c,
                                    { activeStyle: { color: '#E77E83' }, to: '/help', className: ce.a.sidebarItem },
                                    l.a.createElement('img', { src: 'images/svg/Vector (21).svg', alt: '' }),
                                    l.a.createElement('li', null, 'Help & Contact')
                                )
                            )
                        )
                    )
                },
                oe = t(145),
                me = t.n(oe),
                ie = function (e) {
                    return l.a.createElement(
                        u.b,
                        { to: e.link, className: me.a.button },
                        l.a.createElement('i', { className: 'carousel-control-prev-icon fas fa-chevron-left', 'aria-hidden': 'true' }),
                        l.a.createElement('p', { style: { color: e.color } }, e.text)
                    )
                },
                ue = t(146),
                de = t.n(ue),
                Ee = function (e) {
                    return l.a.createElement('div', { className: de.a.headlineBlock }, l.a.createElement('p', null, e.text))
                },
                pe =
                    (t(210),
                    function (e) {
                        return { errors: e.successErrors.errorsMessage, success: e.successErrors.ServerMessage }
                    }),
                fe = function (e) {
                    var a = (function (a) {
                        Object(m.a)(n, a)
                        var t = Object(i.a)(n)
                        function n() {
                            return Object(s.a)(this, n), t.apply(this, arguments)
                        }
                        return (
                            Object(o.a)(n, [
                                {
                                    key: 'componentWillMount',
                                    value: function () {
                                        this.props.clearErrors(), this.props.clearSuccess()
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function () {
                                        return l.a.createElement(e, this.props)
                                    },
                                },
                            ]),
                            n
                        )
                    })(l.a.Component)
                    return Object(ae.b)(pe, { clearSuccess: h, clearErrors: N })(a)
                },
                ge = t(7),
                ve = t(141),
                Ne = t(142),
                he = t(50),
                be =
                    (t(62),
                    function (e) {
                        var a = e.input,
                            t = e.meta,
                            n = t.touched,
                            r = t.error,
                            c = Object(he.a)(e, ['input', 'meta']),
                            s = r && n
                        return l.a.createElement(
                            'div',
                            { className: 'formControl' },
                            l.a.createElement('input', Object.assign({ className: s ? 'error' : '' }, a, c)),
                            s ? l.a.createElement('span', null, r) : null
                        )
                    }),
                ye = function (e) {
                    return l.a.createElement(
                        'div',
                        { className: 'row justify-content-center align-items-center', style: { color: '#E77E83' } },
                        l.a.createElement(
                            'h4',
                            { className: ' d-flex flex-column align-items-center' },
                            e.message,
                            l.a.createElement('br', null),
                            l.a.createElement('i', { className: 'fab fa-linux' })
                        ),
                        ' '
                    )
                },
                _e = t(328),
                xe = function (e) {
                    return l.a.createElement(
                        'div',
                        { style: { width: '400px' } },
                        e.message ? l.a.createElement(_e.a, { color: 'danger' }, e.message) : null
                    )
                },
                ke = Object(Ne.a)({ form: 'changePassForm' })(function (e) {
                    return l.a.createElement(
                        'form',
                        { className: 'changePassForm', onSubmit: e.handleSubmit },
                        l.a.createElement('h5', { className: 'changePassHeadline' }, 'Change Password'),
                        l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(ve.a, {
                                type: 'password',
                                component: be,
                                className: 'form-control',
                                name: 'oldPass',
                                placeholder: 'Your old password',
                                required: !0,
                                autoFocus: !0,
                            })
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(ve.a, {
                                type: 'password',
                                component: be,
                                className: 'form-control',
                                name: 'newPass',
                                placeholder: 'Your new password',
                                required: !0,
                            })
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(ve.a, {
                                type: 'password',
                                component: be,
                                className: 'form-control',
                                name: 'verifyPass',
                                placeholder: 'Repeat new password',
                                required: !0,
                            })
                        ),
                        l.a.createElement('button', { className: 'buttonBlock1' }, 'Save'),
                        e.errors && 'ERROR_CHANGE_PASS' === e.errors.id ? l.a.createElement(xe, { message: e.errors.message }) : null
                    )
                }),
                Se = function (e) {
                    return l.a.createElement(
                        'div',
                        null,
                        e.success && 'SUCCESS_CHANGE_PASS' === e.success.id
                            ? l.a.createElement(ye, { message: e.success.message })
                            : l.a.createElement(ke, { onSubmit: e.onSubmit, errors: e.errors })
                    )
                },
                Oe = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        var e
                        Object(s.a)(this, t)
                        for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r]
                        return (
                            ((e = a.call.apply(a, [this].concat(l))).onSubmit = function (a) {
                                e.props.changeUserPass(a.oldPass, a.newPass, a.verifyPass)
                            }),
                            e
                        )
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(Se, {
                                        onSubmit: this.onSubmit,
                                        success: this.props.success,
                                        errors: this.props.errors,
                                    })
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                we = Object(ge.d)(
                    fe,
                    Object(ae.b)(null, {
                        changeUserPass: function (e, a, t) {
                            return function (n, l) {
                                A(e, a, t, l().auth.user.email)
                                    .then(function (e) {
                                        n(y(e.data.message, e.status, 'SUCCESS_CHANGE_PASS'))
                                    })
                                    .catch(function (e) {
                                        n(b(e.response.data, e.response.status, 'ERROR_CHANGE_PASS'))
                                    })
                            }
                        },
                    })
                )(Oe),
                Ie = function (e) {
                    return { auth: e.auth.isAuth }
                },
                je = function (e) {
                    return Object(ae.b)(Ie)(function (a) {
                        return a.auth ? l.a.createElement(e, a) : l.a.createElement(d.a, { to: '/sign' })
                    })
                },
                Re = Object(ge.d)(je)(function () {
                    return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(le, null),
                        l.a.createElement(
                            'section',
                            { className: 'changePassBlock' },
                            l.a.createElement(
                                'div',
                                { className: 'container' },
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement('div', { className: 'col-12' }, l.a.createElement(Ee, { text: 'Profile' }))
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement('div', { className: 'col-12 col-md-3' }, l.a.createElement(se, null)),
                                    l.a.createElement('div', { className: 'col-2 col-md-3' }),
                                    l.a.createElement('div', { className: 'col-12  col-md-5 ' }, l.a.createElement(we, null))
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'returnLink' },
                                            l.a.createElement(ie, { link: '/catalog', text: 'Return to catalogue' })
                                        )
                                    )
                                )
                            )
                        )
                    )
                }),
                Ce = function (e) {
                    return e ? void 0 : 'Field is required'
                },
                Te = function (e) {
                    return function (a) {
                        if (a.length > e) return 'max length is '.concat(e)
                    }
                },
                Ae = Te(30),
                Pe = function (e) {
                    if (e.length < 5) return 'MinLength is: '.concat(5)
                },
                Be = function (e) {
                    return l.a.createElement(
                        'form',
                        { className: 'checkoutForm', onSubmit: e.handleSubmit },
                        l.a.createElement(
                            'div',
                            { className: 'form-row' },
                            l.a.createElement('h5', { className: 'formHeadline' }, 'Shipping address')
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-row' },
                            l.a.createElement(
                                'div',
                                { className: 'form-group col-12 col-md-6', id: 'm' },
                                l.a.createElement(ve.a, {
                                    type: 'text',
                                    component: be,
                                    className: 'form-control',
                                    validate: [Ce, Pe, Ae],
                                    name: 'name',
                                    placeholder: '\u0418\u043c\u044f',
                                })
                            ),
                            l.a.createElement(
                                'div',
                                { className: 'form-group col-md-6' },
                                l.a.createElement(ve.a, {
                                    type: 'text',
                                    component: be,
                                    className: 'form-control',
                                    validate: [Ce, Pe, Ae],
                                    name: 'surname',
                                    placeholder: '\u0424\u0430\u043c\u0438\u043b\u0438\u044f',
                                })
                            )
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(ve.a, {
                                type: 'text',
                                component: be,
                                className: 'form-control',
                                validate: [Ce, Pe, Ae],
                                name: 'city',
                                placeholder: '\u0413\u043e\u0440\u043e\u0434',
                            })
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(ve.a, {
                                type: 'text',
                                component: be,
                                className: 'form-control',
                                validate: [Ce, Pe, Ae],
                                name: 'post',
                                placeholder: '\u041d\u043e\u043c\u0435\u0440 \u043d\u043e\u0432\u043e\u0439 \u043f\u043e\u0447\u0442\u044b',
                            })
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-row' },
                            l.a.createElement(
                                'div',
                                { className: 'form-group col-md-6' },
                                l.a.createElement(
                                    'select',
                                    { className: 'form-control' },
                                    l.a.createElement('option', { selected: !0 }, 'Country'),
                                    l.a.createElement('option', null, 'Ukraine'),
                                    l.a.createElement('option', null, 'Russia')
                                )
                            ),
                            l.a.createElement(
                                'div',
                                { className: 'form-group col-md-6' },
                                l.a.createElement(ve.a, {
                                    type: 'text',
                                    component: be,
                                    validate: [Ce, Pe, Ae],
                                    className: 'form-control',
                                    name: 'code',
                                    placeholder: 'Post code',
                                    id: 'inputZip',
                                })
                            )
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-group ' },
                            l.a.createElement(ve.a, {
                                type: 'number',
                                component: be,
                                validate: [Ce, Pe, Ae],
                                className: 'form-control',
                                name: 'phone',
                                placeholder: 'Phone',
                            })
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-row' },
                            l.a.createElement('h5', { className: 'formHeadline' }, 'Billing Address')
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(
                                'div',
                                { className: 'form-check' },
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, {
                                        type: 'checkbox',
                                        validate: [Ce, Pe, Ae],
                                        component: 'input',
                                        name: 'check',
                                        className: 'form-check-label checkbox',
                                    }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { id: 'checkText' }, 'same as Shipping Address')
                                )
                            )
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-row' },
                            l.a.createElement(
                                'div',
                                { className: 'col-12 d-flex align-items-center' },
                                l.a.createElement(ie, { link: '/catalog', text: 'Return to catalogue' })
                            ),
                            l.a.createElement(
                                'div',
                                { className: 'col-12 d-flex align-items-center justify-content-end' },
                                l.a.createElement('button', { className: 'formBtn' }, '\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c')
                            )
                        )
                    )
                },
                De = (Object(Ne.a)({ form: 'userInform' })(Be), Be),
                Le = Object(ae.b)(
                    function (e) {
                        return { userInform: e.inform.inform }
                    },
                    { getInform: X, updateInform: Z }
                )(function (e) {
                    Object(n.useEffect)(function () {
                        e.getInform()
                    })
                    return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(le, null),
                        l.a.createElement(
                            'section',
                            { className: 'checkoutBlock' },
                            l.a.createElement(
                                'div',
                                { className: 'container' },
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement('div', { className: 'col-12' }, l.a.createElement(Ee, { text: 'Check Out' }))
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 col-md-9' },
                                        l.a.createElement(De, {
                                            onSubmit: function (a) {
                                                var t = { data: a }
                                                e.updateInform(t)
                                            },
                                        })
                                    )
                                )
                            )
                        )
                    )
                }),
                Me =
                    (t(315),
                    function (e) {
                        var a = e.input,
                            t = e.meta,
                            n = t.touched,
                            r = t.error,
                            c = Object(he.a)(e, ['input', 'meta']),
                            s = r && n
                        return l.a.createElement(
                            'div',
                            { className: 'formControl' },
                            l.a.createElement('textarea', Object.assign({ className: s ? 'error' : '' }, a, c)),
                            s ? l.a.createElement('span', null, r) : null
                        )
                    }),
                Ue = Object(Ne.a)({ form: 'help' })(function (e) {
                    return l.a.createElement(
                        'form',
                        { className: 'col-12 col-md-7 helpInform', onSubmit: e.handleSubmit },
                        l.a.createElement('p', { className: 'helpText' }, 'Your question'),
                        l.a.createElement(ve.a, {
                            component: Me,
                            name: 'helpMessage',
                            validate: [Ce],
                            className: 'form-control',
                            placeholder: 'text...',
                        }),
                        l.a.createElement('button', { className: 'buttonBlock1', style: { marginTop: '20px' } }, 'Send'),
                        e.errors && 'ERROR_HELP_MESSAGE' === e.errors.id ? l.a.createElement(xe, { message: e.errors.message }) : null
                    )
                }),
                Fe = Object(ge.d)(
                    fe,
                    je,
                    Object(ae.b)(null, {
                        sendHelpMessage: function (e) {
                            return function (a, t) {
                                G(e, t().auth.userId)
                                    .then(function (e) {
                                        a(y(e.data.message, e.status, 'SUCCESS_HELP_MESSAGE'))
                                    })
                                    .catch(function (e) {
                                        a(b(e.response.data.message, e.response.status, 'ERROR_HELP_MESSAGE'))
                                    })
                            }
                        },
                    })
                )(function (e) {
                    return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(le, null),
                        l.a.createElement(
                            'section',
                            { className: 'helpBlock' },
                            l.a.createElement(
                                'div',
                                { className: 'container' },
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement('div', { className: 'col-12' }, l.a.createElement(Ee, { text: 'Help & Contact' }))
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement('div', { className: 'col-12 col-md-3' }, l.a.createElement(se, null)),
                                    l.a.createElement('div', { className: 'col-2' }),
                                    e.success && 'SUCCESS_HELP_MESSAGE' === e.success.id
                                        ? l.a.createElement(ye, { message: e.success.message })
                                        : l.a.createElement(Ue, {
                                              onSubmit: function (a) {
                                                  e.sendHelpMessage(a.helpMessage)
                                              },
                                              errors: e.errors,
                                          })
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'returnLink' },
                                            l.a.createElement(ie, { link: '/catalog', text: 'Return to catalogue' })
                                        )
                                    )
                                )
                            )
                        )
                    )
                }),
                Ge =
                    (t(316),
                    Object(ge.d)(je)(function () {
                        return l.a.createElement(
                            'div',
                            null,
                            l.a.createElement(le, null),
                            l.a.createElement(
                                'section',
                                { className: 'returnBlock' },
                                l.a.createElement(
                                    'div',
                                    { className: 'container' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'row' },
                                        l.a.createElement('div', { className: 'col-12' }, l.a.createElement(Ee, { text: 'My return' }))
                                    ),
                                    l.a.createElement(
                                        'div',
                                        { className: 'returnInform' },
                                        l.a.createElement(
                                            'div',
                                            null,
                                            l.a.createElement(
                                                'div',
                                                { className: 'row' },
                                                l.a.createElement('div', { className: 'col-12 col-lg-2' }, l.a.createElement(se, null))
                                            )
                                        ),
                                        l.a.createElement(
                                            'div',
                                            { className: '' },
                                            l.a.createElement(
                                                'div',
                                                { className: 'row' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'col-12 col-lg-10' },
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'returnText' },
                                                        l.a.createElement(
                                                            'p',
                                                            null,
                                                            l.a.createElement('span', null, ' Return is included in your order!'),
                                                            ' ',
                                                            l.a.createElement('br', null),
                                                            'In your box you will find a pre-payed return label that you need to place on your box and drop off at the nearest post office.'
                                                        )
                                                    )
                                                )
                                            ),
                                            l.a.createElement(
                                                'div',
                                                { className: 'returnLinks' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'container' },
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'row  d-flex align-items ' },
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'col-4' },
                                                            l.a.createElement('p', null, 'Item')
                                                        ),
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'col-2 ' },
                                                            l.a.createElement('p', null, 'Order NO.')
                                                        ),
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'col-2' },
                                                            l.a.createElement('p', null, 'Returns NO.')
                                                        ),
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'col-4 d-flex justify-content-center' },
                                                            'Status'
                                                        )
                                                    )
                                                )
                                            ),
                                            l.a.createElement(
                                                'div',
                                                { className: 'returnItem' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'row' },
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'col-4' },
                                                        l.a.createElement('p', { className: 'bagCard__slogan' }, 'maxi DRESS'),
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'bagCard__list' },
                                                            l.a.createElement('p', null, 'A perfect flirty number for Balls and Black Tie.')
                                                        ),
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'bagCard__size d-flex' },
                                                            l.a.createElement('p', null, 'Size: XS'),
                                                            l.a.createElement('img', { src: 'images/svg/Vector (11).svg', alt: '' })
                                                        ),
                                                        l.a.createElement('p', { className: 'bagCard__p' }, 'Rental period* : 7 days'),
                                                        l.a.createElement('p', null, 'Dates: Mar 17, 2020 - Mar 24, 2020 ')
                                                    ),
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'col-2' },
                                                        l.a.createElement('p', { style: { fontSize: '12px' } }, '4146567738')
                                                    ),
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'col-3' },
                                                        l.a.createElement('p', { style: { fontSize: '12px' } }, '9tmlAIDfmx8B')
                                                    ),
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'col-3' },
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'returnItem-column' },
                                                            l.a.createElement('img', { src: 'images/svg/Vector (24).svg', alt: '' }),
                                                            l.a.createElement(
                                                                'p',
                                                                { style: { fontSize: '12px' } },
                                                                'Return received on Mar 17, 2020'
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        l.a.createElement(
                                            'div',
                                            { className: 'row' },
                                            l.a.createElement(
                                                'div',
                                                { className: 'col-3 returnItem-active' },
                                                l.a.createElement('p', null, 'Item'),
                                                l.a.createElement('p', null, 'Order NO.'),
                                                l.a.createElement('p', null, 'Returns NO.'),
                                                l.a.createElement('p', null, 'Status')
                                            ),
                                            l.a.createElement(
                                                'div',
                                                { className: 'col-9 col-lg-4 returnInform-active' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'returnInformItem-active' },
                                                    l.a.createElement('p', { className: 'bagCard__slogan' }, 'maxi DRESS'),
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'bagCard__list' },
                                                        l.a.createElement('p', null, 'A perfect flirty number for Balls and Black Tie.')
                                                    ),
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'bagCard__size d-flex' },
                                                        l.a.createElement('p', null, 'Size: XS'),
                                                        l.a.createElement('img', { src: 'images/svg/Vector (11).svg', alt: '' })
                                                    ),
                                                    l.a.createElement('p', { className: 'bagCard__p' }, 'Rental period* : 7 days'),
                                                    l.a.createElement('p', null, 'Dates: Mar 17, 2020 - Mar 24, 2020 ')
                                                ),
                                                l.a.createElement('p', null, '4146567738'),
                                                l.a.createElement('p', null, '9tmlAIDfmx8B'),
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'returnItem-column' },
                                                    l.a.createElement('img', { src: 'images/svg/Vector (24).svg', alt: '' }),
                                                    l.a.createElement('p', null, 'Return received on Mar 17, 2020')
                                                )
                                            )
                                        )
                                    )
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'container' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            l.a.createElement(
                                                'div',
                                                { className: 'returnLink' },
                                                l.a.createElement(ie, { link: '/catalog', text: 'Return to catalogue' })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    })),
                ze =
                    (t(317),
                    function (e) {
                        return l.a.createElement('img', {
                            className: 'navbar-brand col-7 col-sm-4 col-lg-3',
                            src: '/images/svg/logo.svg',
                            alt: 'Logo',
                        })
                    }),
                Ve = function (e) {
                    return l.a.createElement(
                        'nav',
                        { className: 'navbar navbar-expand-lg' },
                        l.a.createElement(ze, null),
                        l.a.createElement(
                            'button',
                            {
                                className: ' col-3 col-sm-1 navbar-toggler',
                                id: 'navbar-toggler',
                                type: 'button',
                                'data-toggle': 'collapse',
                                'data-target': '#navbarSupportedContent',
                                'aria-controls': 'navbarSupportedContent',
                                'aria-expanded': 'false',
                                'aria-label': 'Toggle navigation',
                            },
                            l.a.createElement('i', { className: 'navbar-toggler-icon fas fa-bars' })
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'collapse navbar-collapse ', id: 'navbarSupportedContent' },
                            l.a.createElement(
                                'ul',
                                { className: 'navbar-nav col-lg-6' },
                                l.a.createElement(
                                    'li',
                                    null,
                                    l.a.createElement(
                                        u.c,
                                        { to: '/' },
                                        'Rent Outfits',
                                        l.a.createElement('span', { className: 'sr-only' }, '(current)')
                                    )
                                ),
                                l.a.createElement(
                                    'li',
                                    null,
                                    l.a.createElement(u.c, { activeStyle: { color: '#E77E83' }, to: '/catalog' }, 'Our Products')
                                )
                            )
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'nav__cart col-2 col-sm-2 col-lg-1' },
                            l.a.createElement('img', { src: '/images/svg/Vector (4).svg', alt: 'Cart' }),
                            l.a.createElement(
                                u.c,
                                { activeStyle: { color: '#E77E83' }, to: '/card' },
                                0 === e.props.totalSizeCard
                                    ? l.a.createElement('p', null, 'Cart')
                                    : l.a.createElement(
                                          'div',
                                          null,
                                          l.a.createElement('i', { style: { fontSize: '14px' }, className: 'fas fa-cart-arrow-down' }),
                                          '-',
                                          e.props.totalSizeCard
                                      )
                            )
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'nav__search col-2 col-sm-2 col-lg-1' },
                            l.a.createElement('img', { src: '/images/svg/Vector (5).svg', alt: '' }),
                            l.a.createElement('input', { placeholder: 'Search', style: { border: 'none', width: '60px' } })
                        ),
                        l.a.createElement(
                            'div',
                            { className: ' nav__account col-2 col-sm-2 col-lg-1 d-flex align-items flex-column' },
                            e.props.isAuth && e.props.user
                                ? l.a.createElement(
                                      u.c,
                                      {
                                          className: 'd-flex flex-column align-items-center',
                                          activeStyle: { color: '#E77E83' },
                                          to: '/orders',
                                      },
                                      e.props.user.name,
                                      l.a.createElement('p', { onClick: e.logout }, 'Logout')
                                  )
                                : l.a.createElement(
                                      u.c,
                                      { activeStyle: { color: '#E77E83' }, to: '/sign' },
                                      l.a.createElement('img', { src: '/images/svg/Vector (6).svg', className: 'ml-auto', alt: 'Account' })
                                  )
                        )
                    )
                },
                He = function (e) {
                    return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(
                            'div',
                            { className: 'container' },
                            l.a.createElement(
                                'div',
                                { className: 'row' },
                                l.a.createElement(Ve, { props: e, totalSizeCard: e.totalSizeCard, logout: e.logout })
                            )
                        ),
                        e.children
                    )
                },
                qe = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(He, this.props)
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                We = Object(ae.b)(
                    function (e) {
                        return { isAuth: e.auth.isAuth, user: e.auth.user, totalSizeCard: e.card.items.length }
                    },
                    {
                        logout: function () {
                            return function (e) {
                                e({ type: 'LOGOUT_SUCCESS' })
                            }
                        },
                    }
                )(qe),
                Ye = t(49),
                Qe =
                    (t(318),
                    t(137),
                    function (e) {
                        return l.a.createElement(
                            u.b,
                            { to: e.to, className: 'buttonBlock1' },
                            l.a.createElement('button', { className: 'button1' }, e.text)
                        )
                    }),
                Xe =
                    (t(319),
                    Object(ae.b)(null, { isPopUp: $ })(function (e) {
                        return l.a.createElement(
                            'div',
                            null,
                            l.a.createElement(
                                'div',
                                { className: 'popUp' },
                                l.a.createElement(
                                    'div',
                                    {
                                        onClick: function () {
                                            return e.isPopUp(!1)
                                        },
                                        className: 'popUpIcon',
                                    },
                                    l.a.createElement('img', { src: 'images/svg/cross.svg', alt: 'Cross' })
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'popUpInform' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'popUpImg' },
                                        l.a.createElement('img', { src: 'images/girl 1.png', alt: '' })
                                    ),
                                    l.a.createElement(
                                        'div',
                                        { className: 'popUpText' },
                                        l.a.createElement('p', { className: 'popUpHeadline' }, 'We\u2019ve got you covered, girl!'),
                                        l.a.createElement(
                                            'p',
                                            { className: 'popUpText1' },
                                            'Can one dress be enough? We don\u2019t think so!',
                                            l.a.createElement('br', null),
                                            'Rent ',
                                            l.a.createElement('span', null, '2nd'),
                                            ' outfit and keep both items for ',
                                            l.a.createElement('span', null, '14 days'),
                                            '!',
                                            l.a.createElement('br', null),
                                            'Rent ',
                                            l.a.createElement('span', null, '3rd'),
                                            ' outfit and keep all 3 outfits for ',
                                            l.a.createElement('span', null, '21 days'),
                                            '!'
                                        ),
                                        l.a.createElement(
                                            'p',
                                            { className: 'popUpSlogan' },
                                            'P.S. Great idea for vacay or an eventful month, Isn\u2019t it?'
                                        )
                                    )
                                )
                            )
                        )
                    }),
                    t(43),
                    t(26)),
                Ze = t.n(Xe),
                Je = function (e) {
                    for (
                        var a = e.totalCount,
                            t = e.pageSize,
                            r = e.portionSize,
                            c = void 0 === r ? 3 : r,
                            s = e.pageNumber,
                            o = e.onPageChanged,
                            m = Math.ceil(a / t),
                            i = [],
                            d = 1;
                        d <= m;
                        d++
                    )
                        i.push(d)
                    var E = Math.ceil(m / c),
                        p = Object(n.useState)(1),
                        f = Object(Ye.a)(p, 2),
                        g = f[0],
                        v = f[1],
                        N = (g - 1) * c + 1,
                        h = g * c
                    return l.a.createElement(
                        'div',
                        { className: Ze.a.productsPagination },
                        g > 1
                            ? l.a.createElement(
                                  'button',
                                  {
                                      onClick: function () {
                                          v(g - 1)
                                      },
                                  },
                                  '   ',
                                  l.a.createElement(
                                      'li',
                                      { className: Ze.a.pageItem },
                                      l.a.createElement(
                                          u.b,
                                          { to: '#', className: Ze.a.pageLink },
                                          ' ',
                                          l.a.createElement('i', { className: 'fas fa-chevron-left', 'aria-hidden': 'true' })
                                      )
                                  )
                              )
                            : l.a.createElement(
                                  u.b,
                                  { to: '#', className: Ze.a.pageLink },
                                  ' ',
                                  l.a.createElement('i', { className: 'fas fa-chevron-left', 'aria-hidden': 'true' })
                              ),
                        i
                            .filter(function (e) {
                                return e >= N && e <= h
                            })
                            .map(function (e) {
                                return l.a.createElement(
                                    'li',
                                    { key: e, className: Ze.a.pageItem },
                                    l.a.createElement(
                                        u.b,
                                        {
                                            to: '#',
                                            className: s === e ? Ze.a.selectedPageLink : Ze.a.pageLink,
                                            onClick: function (a) {
                                                o(e)
                                            },
                                        },
                                        e
                                    )
                                )
                            }),
                        E > g
                            ? l.a.createElement(
                                  'button',
                                  {
                                      onClick: function () {
                                          v(g + 1)
                                      },
                                  },
                                  '   ',
                                  l.a.createElement(
                                      'li',
                                      { className: Ze.a.pageItem },
                                      l.a.createElement(
                                          u.b,
                                          { to: '#', className: Ze.a.pageLink },
                                          ' ',
                                          l.a.createElement('i', { className: 'fas fa-chevron-right', 'aria-hidden': 'true' })
                                      )
                                  )
                              )
                            : l.a.createElement(
                                  u.b,
                                  { to: '#', className: Ze.a.pageLink },
                                  ' ',
                                  l.a.createElement('i', { className: 'fas fa-chevron-right', 'aria-hidden': 'true' })
                              )
                    )
                },
                Ke = t(148),
                $e = t.n(Ke),
                ea = function () {
                    return l.a.createElement(
                        'div',
                        { className: 'row d-flex justify-content-center' },
                        l.a.createElement('img', { src: $e.a, alt: 'Preloader' })
                    )
                },
                aa = Object(Ne.a)({ form: 'filter' })(function (e) {
                    return l.a.createElement(
                        'form',
                        { className: 'sidebar', onSubmit: e.handleSubmit },
                        l.a.createElement(
                            'div',
                            { className: 'sidebarItem' },
                            l.a.createElement('hr', null),
                            l.a.createElement(
                                'div',
                                { className: 'sidebarText' },
                                l.a.createElement('p', null, 'Size'),
                                l.a.createElement('img', { src: 'images/svg/Vector (7).svg', alt: '' })
                            ),
                            l.a.createElement(
                                'ul',
                                { className: 'sidebarMenu' },
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, {
                                        type: 'checkbox',
                                        component: 'input',
                                        name: 'size36',
                                        className: 'checkbox',
                                    }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, '36')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, {
                                        type: 'checkbox',
                                        component: 'input',
                                        name: 'size38',
                                        className: 'checkbox',
                                    }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, '38')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, {
                                        type: 'checkbox',
                                        component: 'input',
                                        name: 'size40',
                                        className: 'checkbox',
                                    }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, '40')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, {
                                        type: 'checkbox',
                                        component: 'input',
                                        name: 'size42',
                                        className: 'checkbox',
                                    }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, '42')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'S', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'S')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'M', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'M')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'L', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'L')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'XL', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'XL')
                                )
                            )
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'sidebarItem' },
                            l.a.createElement('hr', null),
                            l.a.createElement('div', { className: 'sidebarText' }, l.a.createElement('p', null, 'Colour')),
                            l.a.createElement(
                                'ul',
                                { className: 'sidebarMenu' },
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'Black', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'Black')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'Blue', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'Blue')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'White', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'White')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'Cream', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'Cream')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, {
                                        type: 'checkbox',
                                        component: 'input',
                                        name: 'Floral',
                                        className: 'checkbox',
                                    }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'Floral')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'Pink', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'Pink')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'Red', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'Red')
                                )
                            )
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'sidebarItem' },
                            l.a.createElement('hr', null),
                            l.a.createElement('div', { className: 'sidebarText' }, l.a.createElement('p', null, 'Style')),
                            l.a.createElement(
                                'ul',
                                { className: 'sidebarMenu' },
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'Mini', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'Mini')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'Maxi', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'Maxi')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'Midi', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'Midi')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, {
                                        type: 'checkbox',
                                        component: 'input',
                                        name: 'Jumsuit',
                                        className: 'checkbox',
                                    }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'Jumsuit')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, { type: 'checkbox', component: 'input', name: 'Tops', className: 'checkbox' }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'Tops')
                                ),
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, {
                                        type: 'checkbox',
                                        component: 'input',
                                        name: 'Bottoms',
                                        className: 'checkbox',
                                    }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { className: 'checkText' }, 'Bottoms')
                                )
                            )
                        ),
                        l.a.createElement('div', { className: 'productsBtn' }, l.a.createElement('button', null, 'Apply'))
                    )
                }),
                ta = function (e) {
                    return l.a.createElement(
                        'div',
                        null,
                        e.goods.length > 0
                            ? l.a.createElement(
                                  'div',
                                  null,
                                  l.a.createElement(
                                      'section',
                                      { className: 'linkBlock' },
                                      l.a.createElement(
                                          'div',
                                          { className: 'container' },
                                          l.a.createElement(
                                              'div',
                                              { className: 'row' },
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'col-6 d-flex align-items-center' },
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'linkItem' },
                                                      l.a.createElement('p', null, 'Show'),
                                                      l.a.createElement(
                                                          'select',
                                                          {
                                                              className: 'linkBtn',
                                                              onChange: function (a) {
                                                                  e.changePageSize(a.target.value)
                                                              },
                                                          },
                                                          l.a.createElement('option', { defaultValue: !0 }, '3'),
                                                          l.a.createElement('option', null, '6'),
                                                          l.a.createElement('option', null, '12')
                                                      )
                                                  )
                                              ),
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'col-6 d-flex align-items ' },
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'ml-auto' },
                                                      l.a.createElement(
                                                          'select',
                                                          {
                                                              className: 'sortBtn',
                                                              onChange: function (a) {
                                                                  e.changeSortBy(a.target.value)
                                                              },
                                                          },
                                                          l.a.createElement('option', { defaultValue: !0 }, 'SORT BY'),
                                                          l.a.createElement(
                                                              'option',
                                                              null,
                                                              '\u041e\u0442 \u0434\u0435\u0448\u0435\u0432\u044b\u0445 \u043a \u0434\u043e\u0440\u043e\u0433\u0438\u043c'
                                                          ),
                                                          l.a.createElement(
                                                              'option',
                                                              null,
                                                              '\u041e\u0442 \u0434\u043e\u0440\u043e\u0433\u0438\u043c \u043a \u0434\u0435\u0448\u0435\u0432\u044b\u043c'
                                                          )
                                                      )
                                                  )
                                              )
                                          )
                                      )
                                  ),
                                  l.a.createElement(
                                      'section',
                                      { className: 'ourProducts' },
                                      l.a.createElement(
                                          'div',
                                          { className: 'container' },
                                          l.a.createElement(
                                              'div',
                                              { className: 'row' },
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'col-12 col-sm-2' },
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'productsFilter' },
                                                      l.a.createElement('h4', null, ' Filter'),
                                                      e.filter
                                                          ? e.filter.map(function (a) {
                                                                return l.a.createElement(
                                                                    'p',
                                                                    { className: 'd-flex' },
                                                                    a,
                                                                    ' ',
                                                                    l.a.createElement('img', {
                                                                        onClick: function () {
                                                                            !(function (a) {
                                                                                e.removeFilter(a)
                                                                            })(a)
                                                                        },
                                                                        src: 'images/svg/Vector (14).svg',
                                                                        alt: '',
                                                                    })
                                                                )
                                                            })
                                                          : l.a.createElement('p', null, 'All')
                                                  )
                                              ),
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'col-12 col-sm-10' },
                                                  l.a.createElement(Ee, { text: 'All our products' })
                                              )
                                          ),
                                          l.a.createElement(
                                              'div',
                                              { className: 'catalog' },
                                              l.a.createElement(aa, {
                                                  onSubmit: function (a) {
                                                      for (var t = [], n = 0, l = Object.entries(a); n < l.length; n++) {
                                                          var r = Object(Ye.a)(l[n], 2),
                                                              c = r[0]
                                                          !0 === r[1] && t.push(c)
                                                      }
                                                      e.changeFilter(t)
                                                  },
                                              }),
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'catalogList' },
                                                  e.goods.length > 0
                                                      ? e.goods.map(function (e) {
                                                            return l.a.createElement(
                                                                'div',
                                                                { className: 'goodsItem', key: e._id },
                                                                l.a.createElement(
                                                                    u.b,
                                                                    { to: 'details/'.concat(e._id) },
                                                                    l.a.createElement('img', { src: e.photos.middle, alt: '' })
                                                                ),
                                                                l.a.createElement('h4', null, e.text),
                                                                l.a.createElement('p', null, e.style, ' Dress'),
                                                                l.a.createElement('h5', null, '\u20ac', e.price),
                                                                l.a.createElement(Qe, {
                                                                    to: 'details/'.concat(e._id),
                                                                    text: '\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435',
                                                                })
                                                            )
                                                        })
                                                      : l.a.createElement(
                                                            'div',
                                                            { className: 'row justify-content-center ', style: { color: '#E77E83' } },
                                                            l.a.createElement(
                                                                'h4',
                                                                { className: ' d-flex flex-column align-items-center' },
                                                                '\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e \u043f\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u043d\u0435\u0442 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438',
                                                                l.a.createElement('br', null),
                                                                l.a.createElement('i', { class: 'fab fa-linux' })
                                                            ),
                                                            ' '
                                                        )
                                              )
                                          ),
                                          l.a.createElement(
                                              'div',
                                              { className: 'row' },
                                              l.a.createElement(Je, {
                                                  pageSize: e.pageSize,
                                                  onPageChanged: e.onPageChanged,
                                                  totalCount: e.totalCount,
                                                  pageNumber: e.pageNumber,
                                              })
                                          )
                                      )
                                  )
                              )
                            : l.a.createElement(ea, null)
                    )
                },
                na = t(48),
                la = {
                    goods: [],
                    filter: null,
                    filterBy: ['\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438'],
                    pageSize: 3,
                    totalCount: 0,
                    pageNumber: 1,
                    goodItem: [],
                },
                ra = function () {
                    return { type: 'ClEAR_GOODS_AC' }
                },
                ca = function (e) {
                    return { type: 'CHANGE_PAGE_NUMBER_GOODS', pageNumber: e }
                },
                sa = function (e) {
                    return { type: 'GET_GOODS_AC', dataGoods: e }
                },
                oa = function (e) {
                    return (function () {
                        var a = Object(g.a)(
                            f.a.mark(function a(t) {
                                var n, l
                                return f.a.wrap(function (a) {
                                    for (;;)
                                        switch ((a.prev = a.next)) {
                                            case 0:
                                                return (a.next = 2), I(e)
                                            case 2:
                                                ;(n = a.sent),
                                                    ((l = n.data.goods.data.good).reviews = n.data.goods.data.review),
                                                    (l.goodReviewsQuantity = n.data.reviewQuantity),
                                                    t({ type: 'GET_GOODBYID_AC', goodItem: l })
                                            case 7:
                                            case 'end':
                                                return a.stop()
                                        }
                                }, a)
                            })
                        )
                        return function (e) {
                            return a.apply(this, arguments)
                        }
                    })()
                },
                ma = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : la,
                        a = arguments.length > 1 ? arguments[1] : void 0
                    switch (a.type) {
                        case 'GET_GOODS_AC':
                            return Object(E.a)(
                                Object(E.a)({}, e),
                                {},
                                { goods: Object(na.a)(a.dataGoods.goods), totalCount: a.dataGoods.totalCount }
                            )
                        case 'GET_GOODBYID_AC':
                            return Object(E.a)(Object(E.a)({}, e), {}, { goodItem: [a.goodItem] })
                        case 'REMOVE_GOODBYID_AC':
                            return Object(E.a)(Object(E.a)({}, e), {}, { goodItem: null })
                        case 'ClEAR_GOODS_AC':
                            return la
                        case 'CHANGE_PAGE_SIZE_GOODS':
                            return Object(E.a)(Object(E.a)({}, e), {}, { pageSize: a.pageSize })
                        case 'CHANGE_PAGE_NUMBER_GOODS':
                            return Object(E.a)(Object(E.a)({}, e), {}, { pageNumber: a.pageNumber })
                        case 'CHANGE_SORT_BY':
                            return Object(E.a)(Object(E.a)({}, e), {}, { filterBy: a.filterBy })
                        case 'CHANGE_FILTER':
                            return Object(E.a)(Object(E.a)({}, e), {}, { filter: a.filter })
                        case 'REMOVE_FILTER':
                            return Object(E.a)(
                                Object(E.a)({}, e),
                                {},
                                {
                                    filter: e.filter.filter(function (e) {
                                        return e !== a.filter
                                    }),
                                }
                            )
                        default:
                            return e
                    }
                },
                ia = t(47),
                ua = function (e) {
                    return { popUp: e.app.isPopUp }
                },
                da = t(75),
                Ea = function (e) {
                    return e.goods.filterBy
                },
                pa = Object(da.a)(
                    [
                        function (e) {
                            return e.goods.goods
                        },
                        Ea,
                    ],
                    function (e, a) {
                        return (function (e, a) {
                            switch (a) {
                                case '\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438':
                                    return e
                                case '\u041e\u0442 \u0434\u043e\u0440\u043e\u0433\u0438\u043c \u043a \u0434\u0435\u0448\u0435\u0432\u044b\u043c':
                                    return Object(ia.orderBy)(e, 'price', 'desc')
                                case '\u041e\u0442 \u0434\u0435\u0448\u0435\u0432\u044b\u0445 \u043a \u0434\u043e\u0440\u043e\u0433\u0438\u043c':
                                    return Object(ia.orderBy)(e, 'price', 'asc')
                                default:
                                    return e
                            }
                        })(e, a)
                    }
                ),
                fa = t(17),
                ga = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        var e
                        Object(s.a)(this, t)
                        for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r]
                        return (
                            ((e = a.call.apply(a, [this].concat(l))).onPageChanged = function (a) {
                                var t = e.props.pageSize
                                e.props.getGoodsThunk(a, t, e.props.filter), e.props.changePageNumber(a)
                            }),
                            (e.changePageSize = function (a) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                                e.props.getGoodsThunk(t, a, e.props.filter)
                            }),
                            (e.changeFilter = function (a) {
                                e.props.reset('filter'), e.props.getGoodsThunk(e.props.pageNumber, e.props.pageSize, a)
                            }),
                            e
                        )
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'componentWillUnmount',
                                value: function () {
                                    this.props.ClearGoods()
                                },
                            },
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    var e = this.props,
                                        a = e.pageNumber,
                                        t = e.pageSize
                                    this.props.getGoodsThunk(a, t, this.props.filter)
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function (e) {
                                    var a = this.props,
                                        t = a.pageNumber,
                                        n = a.pageSize
                                    e.filter !== this.props.filter && this.props.getGoodsThunk(t, n, this.props.filter)
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(
                                        l.a.Fragment,
                                        null,
                                        l.a.createElement(
                                            ta,
                                            Object.assign({}, this.props, {
                                                onPageChanged: this.onPageChanged,
                                                changeFilter: this.changeFilter,
                                                removeFilter: this.props.removeFilter,
                                                changeSortBy: this.props.changeSortBy,
                                                changePageSize: this.changePageSize,
                                            })
                                        )
                                    )
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                va = Object(ge.d)(
                    function (e) {
                        return Object(ae.b)(ua)(function (a) {
                            return l.a.createElement(e, a)
                        })
                    },
                    Object(ae.b)(
                        function (e) {
                            return {
                                goods: pa(e),
                                filterBy: Ea(e),
                                filter: e.goods.filter,
                                token: e.auth.token,
                                items: e.card.items,
                                pageSize: e.goods.pageSize,
                                pageNumber: e.goods.pageNumber,
                                totalCount: e.goods.totalCount,
                            }
                        },
                        {
                            getGoodsThunk: function (e, a, t) {
                                return function (n, l) {
                                    O(t, a, e).then(function (l) {
                                        n(ca(e)),
                                            n(
                                                (function (e) {
                                                    return { type: 'CHANGE_PAGE_SIZE_GOODS', pageSize: e }
                                                })(a)
                                            ),
                                            n(sa(l.data)),
                                            n({ type: 'CHANGE_FILTER', filter: t })
                                    })
                                }
                            },
                            getGoodsThunkById: oa,
                            changePageNumber: ca,
                            removeFilter: function (e) {
                                return function (a, t) {
                                    a({ type: 'REMOVE_FILTER', filter: e })
                                    var n = t().goods.filter
                                    O(n, t().goods.pageSize, t().goods.pageNumber).then(function (e) {})
                                }
                            },
                            isPopUp: $,
                            changeSortBy: function (e) {
                                return { type: 'CHANGE_SORT_BY', filterBy: e }
                            },
                            reset: fa.a,
                            ClearGoods: ra,
                        }
                    )
                )(ga),
                Na = (t(320), Te(20)),
                ha = function (e) {
                    if (e.length < 5) return 'MinLength is: '.concat(5)
                },
                ba = Object(Ne.a)({ form: 'login' })(function (e) {
                    return l.a.createElement(
                        'form',
                        { className: 'signForm', onSubmit: e.handleSubmit },
                        l.a.createElement('h5', { className: 'signHeadline' }, 'log-in'),
                        l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(ve.a, {
                                type: 'email',
                                id: 'inputEmail',
                                name: 'email',
                                className: 'form-control',
                                placeholder: 'Email adress',
                                required: !0,
                                component: be,
                                validate: [Ce, ha, Na],
                            })
                        ),
                        l.a.createElement(
                            'div',
                            null,
                            l.a.createElement(ve.a, {
                                type: 'password',
                                id: 'inputPassword',
                                name: 'password',
                                className: 'form-control',
                                placeholder: 'Password',
                                required: !0,
                                component: be,
                                validate: [Ce, ha, Na],
                            })
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'custom-control custom-checkbox d-flex ' },
                            l.a.createElement(
                                'label',
                                { className: 'd-flex align-items-center' },
                                l.a.createElement(ve.a, {
                                    name: 'rememberMe',
                                    type: 'checkbox',
                                    className: 'checkbox',
                                    component: 'input',
                                }),
                                ' ',
                                l.a.createElement('span', { className: 'fake fakeSign' }),
                                l.a.createElement(
                                    'span',
                                    { className: 'checkText span' },
                                    'Remember Me',
                                    l.a.createElement('span', null, '(Privacy Policy)')
                                )
                            ),
                            l.a.createElement(u.b, { className: 'forgotPass', to: '/forgotpassword' }, 'forgot password'),
                            l.a.createElement('button', null, 'Login')
                        ),
                        e.errors && 'LOGIN_FAIL' === e.errors.id ? l.a.createElement(xe, { message: e.errors.message }) : null
                    )
                }),
                ya = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        var e
                        Object(s.a)(this, t)
                        for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r]
                        return (
                            ((e = a.call.apply(a, [this].concat(l))).onSubmit = function (a) {
                                e.props.login(a.email, a.password, a.rememberMe)
                            }),
                            e
                        )
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(ba, { onSubmit: this.onSubmit, errors: this.props.errors })
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                _a = Object(ge.d)(fe, Object(ae.b)(null, { login: q }))(ya),
                xa = Te(50),
                ka = function (e) {
                    if (e.length < 5) return 'MinLength is: '.concat(5)
                },
                Sa = Object(Ne.a)({ form: 'register' })(function (e) {
                    return l.a.createElement(
                        'form',
                        { className: 'signForm', onSubmit: e.handleSubmit },
                        l.a.createElement(
                            'div',
                            { className: 'signPopUpBlock' },
                            l.a.createElement('hr', null),
                            l.a.createElement('div', { className: 'signPopUp' }, l.a.createElement('p', null, 'Or')),
                            l.a.createElement('hr', null)
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(
                                'div',
                                { className: 'form-group' },
                                l.a.createElement(ve.a, {
                                    type: 'Name',
                                    id: 'registerName',
                                    component: be,
                                    validate: [Ce, xa],
                                    name: 'registerName',
                                    className: 'form-control',
                                    placeholder: 'Enter  name',
                                    required: !0,
                                })
                            ),
                            l.a.createElement(
                                'div',
                                { className: 'form-group' },
                                l.a.createElement(ve.a, {
                                    type: 'email',
                                    id: 'registerEmail',
                                    component: be,
                                    validate: [Ce, ka, xa],
                                    name: 'registerEmail',
                                    className: 'form-control',
                                    placeholder: 'Enter  email',
                                    required: !0,
                                })
                            ),
                            l.a.createElement(
                                'div',
                                { className: 'form-group' },
                                l.a.createElement(ve.a, {
                                    type: 'password',
                                    id: 'registerPass',
                                    component: be,
                                    validate: [Ce, ka, xa],
                                    name: 'registerPassword',
                                    className: 'form-control',
                                    placeholder: 'Enter  password',
                                    required: !0,
                                })
                            )
                        ),
                        l.a.createElement('p', { className: 'signGrey' }, 'By joining I agree to receive emails from DressItBox'),
                        l.a.createElement('button', { id: 'signBtn' }, 'Register'),
                        e.errors && 'REGISTER_FAIL' === e.errors.id ? l.a.createElement(xe, { message: e.errors.message }) : null
                    )
                }),
                Oa = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        var e
                        Object(s.a)(this, t)
                        for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r]
                        return (
                            ((e = a.call.apply(a, [this].concat(l))).onSubmit = function (a) {
                                e.props.register(a.registerName, a.registerEmail, a.registerPassword)
                            }),
                            e
                        )
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(Sa, { onSubmit: this.onSubmit, errors: this.props.errors })
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                wa = Object(ge.d)(
                    fe,
                    Object(ae.b)(null, {
                        register: function (e, a, t) {
                            return function (n) {
                                R(e, a, t)
                                    .then(function (e) {
                                        n({ type: 'REGISTER_SUCCESS', payload: e.data }), n(H(e.data))
                                    })
                                    .catch(function (e) {
                                        n(b(e.response.data.message, e.response.status, 'REGISTER_FAIL')), n({ type: 'REGISTER_FAIL' })
                                    })
                            }
                        },
                    })
                )(Oa),
                Ia = t(149),
                ja = t.n(Ia),
                Ra =
                    (t(138),
                    (function (e) {
                        Object(m.a)(t, e)
                        var a = Object(i.a)(t)
                        function t() {
                            var e
                            Object(s.a)(this, t)
                            for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r]
                            return (
                                ((e = a.call.apply(a, [this].concat(l))).responseFacebook = function (a) {
                                    if ((console.log(a), 'unknown' !== a.status)) {
                                        var t = { user: { name: a.name, picture: a.picture.data.url } }
                                        e.props.userLoad(t)
                                    }
                                }),
                                e
                            )
                        }
                        return (
                            Object(o.a)(t, [
                                {
                                    key: 'render',
                                    value: function () {
                                        return l.a.createElement(ja.a, {
                                            appId: '168317654422864',
                                            fields: 'name,email,picture',
                                            callback: this.responseFacebook,
                                            cssClass: 'form-control facebookBtn',
                                            icon: 'fab fa-facebook-square facebookIcon',
                                            textButton: '',
                                        })
                                    },
                                },
                            ]),
                            t
                        )
                    })(l.a.Component)),
                Ca = Object(ae.b)(null, { userLoad: H })(Ra),
                Ta = t(150),
                Aa = t.n(Ta),
                Pa = Object(ae.b)(null, { userLoad: H, login: q })(function (e) {
                    var a = function (a) {
                        console.log(a)
                        var t = {
                            user: { name: a.profileObj.name, email: a.profileObj.email, img: a.profileObj.imageUrl, token: a.tokenId },
                        }
                        e.userLoad(t)
                    }
                    return l.a.createElement(Aa.a, {
                        clientId: '566501002041-u2a7osr7ah155liop5pdd485qolqul7d.apps.googleusercontent.com',
                        buttonText: 'Login',
                        onSuccess: a,
                        onFailure: a,
                        render: function (e) {
                            return l.a.createElement('img', {
                                src: 'images/svg/Vector (23).svg',
                                onClick: e.onClick,
                                disabled: e.disabled,
                                alt: '',
                                className: 'googleIcon',
                            })
                        },
                        cookiePolicy: 'single_host_origin',
                    })
                }),
                Ba = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'render',
                                value: function () {
                                    return this.props.isAuth
                                        ? l.a.createElement(d.a, { to: '/' })
                                        : l.a.createElement(
                                              l.a.Fragment,
                                              null,
                                              l.a.createElement(le, null),
                                              l.a.createElement(
                                                  'section',
                                                  { className: 'signBlock' },
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'container' },
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'row' },
                                                          l.a.createElement(
                                                              'div',
                                                              { className: 'col-12' },
                                                              l.a.createElement(Ee, { text: 'Sign-In' })
                                                          )
                                                      ),
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'row' },
                                                          l.a.createElement(
                                                              'div',
                                                              { className: 'col-12 col-md-7' },
                                                              l.a.createElement(_a, null),
                                                              l.a.createElement(
                                                                  'div',
                                                                  { className: 'signReturnBtn' },
                                                                  l.a.createElement(ie, { link: '/card', text: 'Return to cart' })
                                                              )
                                                          ),
                                                          l.a.createElement(
                                                              'div',
                                                              {
                                                                  className:
                                                                      'col-12 col-md-5 d-flex justify-content-center align-items-center flex-column',
                                                              },
                                                              l.a.createElement(
                                                                  'h5',
                                                                  { className: 'signHeadline' },
                                                                  'Not a member? Sign Up'
                                                              ),
                                                              l.a.createElement(Ca, null),
                                                              l.a.createElement(Pa, null),
                                                              l.a.createElement(wa, null),
                                                              l.a.createElement(
                                                                  'div',
                                                                  { className: 'signReturnBtn-active' },
                                                                  l.a.createElement(
                                                                      'div',
                                                                      { className: 'returnLink' },
                                                                      l.a.createElement(ie, { link: '/card', text: 'Return to cart' })
                                                                  )
                                                              )
                                                          )
                                                      )
                                                  )
                                              )
                                          )
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                Da = Object(ae.b)(function (e) {
                    return { isAuth: e.auth.isAuth }
                }, null)(Ba),
                La = t(19),
                Ma = t.n(La),
                Ua = t(100),
                Fa = t.n(Ua),
                Ga = function (e) {
                    return l.a.createElement(
                        u.b,
                        { to: e.to, className: Fa.a.buttonBlock },
                        l.a.createElement('button', { className: Fa.a.button }, e.text)
                    )
                },
                za = t(151),
                Va = t.n(za),
                Ha = function (e) {
                    return l.a.createElement(
                        'div',
                        { className: Va.a.item },
                        l.a.createElement('img', { src: e.img, alt: '' }),
                        l.a.createElement('h4', null, e.headline),
                        l.a.createElement('p', null, e.text)
                    )
                },
                qa =
                    (t(139),
                    t(140),
                    function (e) {
                        return l.a.createElement(
                            'div',
                            { className: 'item' },
                            l.a.createElement(u.b, { to: '/details/'.concat(e.id) }, l.a.createElement('img', { src: e.img, alt: '' })),
                            l.a.createElement('h4', null, e.headline),
                            l.a.createElement('p', null, e.text),
                            l.a.createElement('h5', null, e.price, ' $'),
                            l.a.createElement(Qe, {
                                to: '/details/'.concat(e.id),
                                text: '\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435',
                            })
                        )
                    }),
                Wa = t(40),
                Ya = t.n(Wa),
                Qa = function () {
                    Ya()('.carousel .carousel-item').each(function () {
                        var e = Ya()(this).next()
                        e.length || (e = Ya()(this).siblings(':first')), e.children(':first-child').clone().appendTo(Ya()(this))
                        for (var a = 0; a < 2; a++)
                            (e = e.next()).length || (e = Ya()(this).siblings(':first')),
                                e.children(':first-child').clone().appendTo(Ya()(this))
                    })
                },
                Xa = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'componentWillUnmount',
                                value: function () {
                                    this.props.ClearGoods()
                                },
                            },
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    this.props.getGoodsForSlider()
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function (e) {
                                    e != this.props && Qa()
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(
                                        'div',
                                        null,
                                        this.props.goods.length > 0
                                            ? l.a.createElement(
                                                  'div',
                                                  { id: this.props.id, className: 'carousel slide w-100', 'data-ride': 'carousel' },
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'carousel-inner w-100', role: 'listbox' },
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'carousel-item active' },
                                                          l.a.createElement(
                                                              'div',
                                                              { className: 'col-12 col-sm-6 col-md-4 col-lg-3  style__item' },
                                                              l.a.createElement(qa, {
                                                                  img: '/images/Mask-3.png',
                                                                  headline: 'Shake It Off Embellished',
                                                                  text: 'BOTTOMS',
                                                                  price: '112',
                                                                  id: this.props.goods[0]._id,
                                                              })
                                                          )
                                                      ),
                                                      this.props.goods.map(function (e) {
                                                          return l.a.createElement(
                                                              'div',
                                                              { className: 'carousel-item', key: e._id },
                                                              l.a.createElement(
                                                                  'div',
                                                                  { className: 'col-12 col-sm-6 col-md-4  col-lg-3 style__item' },
                                                                  l.a.createElement(qa, {
                                                                      img: e.photos.middle,
                                                                      headline: e.text,
                                                                      text: e.style,
                                                                      price: e.price,
                                                                      id: e._id,
                                                                  })
                                                              )
                                                          )
                                                      })
                                                  ),
                                                  l.a.createElement(
                                                      'a',
                                                      {
                                                          className: 'carousel-control-prev',
                                                          href: this.props.a,
                                                          id: 'arrow-prev',
                                                          role: 'button',
                                                          'data-slide': 'prev',
                                                      },
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'arrow' },
                                                          l.a.createElement('i', {
                                                              className: 'carousel-control-prev-icon fas fa-chevron-left',
                                                              'aria-hidden': 'true',
                                                          }),
                                                          l.a.createElement(
                                                              'span',
                                                              { className: 'sr-only' },
                                                              '\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439'
                                                          )
                                                      )
                                                  ),
                                                  l.a.createElement(
                                                      'a',
                                                      {
                                                          className: 'carousel-control-next',
                                                          href: this.props.a,
                                                          id: 'arrow-next',
                                                          role: 'button',
                                                          'data-slide': 'next',
                                                      },
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'arrow' },
                                                          l.a.createElement('i', {
                                                              className: 'carousel-control-next-icon fas fa-chevron-right',
                                                              'aria-hidden': 'true',
                                                          }),
                                                          l.a.createElement(
                                                              'span',
                                                              { className: 'sr-only' },
                                                              'C\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439'
                                                          )
                                                      )
                                                  )
                                              )
                                            : null
                                    )
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                Za = Object(ae.b)(
                    function (e) {
                        return { goods: e.goods.goods }
                    },
                    {
                        getGoodsForSlider: function () {
                            return (function () {
                                var e = Object(g.a)(
                                    f.a.mark(function e(a) {
                                        var t
                                        return f.a.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (e.next = 2), O()
                                                    case 2:
                                                        ;(t = e.sent), a(sa(t.data))
                                                    case 4:
                                                    case 'end':
                                                        return e.stop()
                                                }
                                        }, e)
                                    })
                                )
                                return function (a) {
                                    return e.apply(this, arguments)
                                }
                            })()
                        },
                        ClearGoods: ra,
                    }
                )(Xa),
                Ja = function (e) {
                    return l.a.createElement('div', { className: 'item' }, l.a.createElement('img', { src: e.img, alt: '' }))
                },
                Ka = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    Qa()
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(
                                        'div',
                                        { id: this.props.id, className: 'carousel slide w-100', 'data-ride': 'carousel' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'carousel-inner w-100', role: 'listbox' },
                                            l.a.createElement(
                                                'div',
                                                { className: 'carousel-item active' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'col-12 col-sm-6 col-md-4 col-lg-3  gallery__item' },
                                                    l.a.createElement(Ja, { img: '/images/Mask-8.png' })
                                                )
                                            ),
                                            l.a.createElement(
                                                'div',
                                                { className: 'carousel-item' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'col-12 col-sm-6 col-md-4  col-lg-3 gallery__item' },
                                                    l.a.createElement(Ja, { img: '/images/Mask-9.png' })
                                                )
                                            ),
                                            l.a.createElement(
                                                'div',
                                                { className: ' carousel-item ' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'col-12 col-sm-6 col-md-4  col-lg-3 gallery__item' },
                                                    l.a.createElement(Ja, { img: '/images/Mask-7.png' })
                                                )
                                            ),
                                            l.a.createElement(
                                                'div',
                                                { className: 'carousel-item ' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'col-12 col-sm-6 col-md-4  col-lg-3 gallery__item' },
                                                    l.a.createElement(Ja, { img: '/images/Mask-9.png' })
                                                )
                                            ),
                                            l.a.createElement(
                                                'div',
                                                { className: ' carousel-item ' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'col-12 col-sm-6 col-md-4  col-lg-3 gallery__item' },
                                                    l.a.createElement(Ja, { img: '/images/Mask-8.png' })
                                                )
                                            ),
                                            l.a.createElement(
                                                'div',
                                                { className: 'carousel-item' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'col-12 col-sm-6 col-md-4 col-lg-3 gallery__item' },
                                                    l.a.createElement(Ja, { img: '/images/Mask-7.png' })
                                                )
                                            ),
                                            l.a.createElement(
                                                'div',
                                                { className: ' carousel-item ' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'col-12 col-sm-6 col-md-4 col-lg-3 gallery__item' },
                                                    l.a.createElement(Ja, { img: '/images/Mask-6.png' })
                                                )
                                            )
                                        ),
                                        l.a.createElement(
                                            'a',
                                            {
                                                className: 'carousel-control-prev',
                                                id: 'arrow-prev',
                                                href: this.props.a,
                                                role: 'button',
                                                'data-slide': 'prev',
                                            },
                                            l.a.createElement(
                                                'div',
                                                { className: 'arrow' },
                                                l.a.createElement('i', {
                                                    className: 'carousel-control-prev-icon fas fa-chevron-left',
                                                    'aria-hidden': 'true',
                                                }),
                                                l.a.createElement(
                                                    'span',
                                                    { className: 'sr-only' },
                                                    '\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439'
                                                )
                                            )
                                        ),
                                        l.a.createElement(
                                            'a',
                                            {
                                                className: 'carousel-control-next',
                                                id: 'arrow-next',
                                                href: this.props.a,
                                                role: 'button',
                                                'data-slide': 'next',
                                            },
                                            l.a.createElement(
                                                'div',
                                                { className: 'arrow' },
                                                l.a.createElement('i', {
                                                    className: 'carousel-control-next-icon fas fa-chevron-right',
                                                    'aria-hidden': 'true',
                                                }),
                                                l.a.createElement(
                                                    'span',
                                                    { className: 'sr-only' },
                                                    'C\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439'
                                                )
                                            )
                                        )
                                    )
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                $a = function (e) {
                    return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(
                            'section',
                            { className: Ma.a.introBlock },
                            l.a.createElement(
                                'div',
                                { className: 'container' },
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 ' },
                                        l.a.createElement(
                                            'div',
                                            { className: Ma.a.introText },
                                            l.a.createElement(
                                                'h1',
                                                null,
                                                'One Box ',
                                                l.a.createElement('br', null),
                                                l.a.createElement('span', null, 'Unlimited Choice')
                                            ),
                                            l.a.createElement('p', null, 'DECIDED TO RENT THE DRESS?'),
                                            l.a.createElement(Qe, { to: '/', text: 'rent now' })
                                        )
                                    )
                                )
                            )
                        ),
                        l.a.createElement(
                            'section',
                            { className: Ma.a.worksBlock },
                            l.a.createElement(
                                'div',
                                { className: 'container' },
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement('div', { className: 'col-12 ' }, l.a.createElement(Ee, { text: 'How it works' }))
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: Ma.a.worksList },
                                    l.a.createElement(
                                        'div',
                                        { className: 'row' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-12 col-sm-6 col-lg-3' },
                                            l.a.createElement(Ha, {
                                                img: 'images/svg/pickit.svg',
                                                headline: 'Pick IT',
                                                text: 'Browse to find your unique outfit and rent it for up to 7 days per dress.',
                                            })
                                        ),
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-12 col-sm-6 col-lg-3' },
                                            l.a.createElement(Ha, {
                                                img: 'images/svg/dressit.svg',
                                                headline: 'Dress IT',
                                                text:
                                                    'It\u2019s your time to shine! Share your experience, review the dress and get discount for the next rental. Tag us @dressitbox on insta',
                                            })
                                        ),
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-12 col-sm-6 col-lg-3' },
                                            l.a.createElement(Ha, {
                                                img: 'images/svg/ownit.svg',
                                                headline: 'Own IT',
                                                text:
                                                    'Having a separation anxiety with recently rented piece? No worries \u2013 if you really want to keep it you can buy it at reduced price.',
                                            }),
                                            l.a.createElement('div', { className: Ma.a.icon }, l.a.createElement('p', null, 'Or'))
                                        ),
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-12 col-sm-6 col-lg-3' },
                                            l.a.createElement(Ha, {
                                                img: 'images/svg/returnit.svg',
                                                headline: 'Return it',
                                                text:
                                                    ' Time to say \u2018Goodbye\u2019! Place the outfit back in the box youreceived it in, place the return label on it and leave it at your nearest post office.',
                                            })
                                        )
                                    )
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 d-flex justify-content-center' },
                                        l.a.createElement(Qe, { to: '/', text: 'rent now' })
                                    )
                                )
                            )
                        ),
                        l.a.createElement(
                            'section',
                            { className: Ma.a.styleBlock },
                            l.a.createElement(
                                'div',
                                { className: 'container' },
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 col-md-6' },
                                        l.a.createElement(Ee, { text: 'Few of our styles' })
                                    ),
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 col-md-6 ' },
                                        l.a.createElement(
                                            'div',
                                            { className: Ma.a.styleBtn },
                                            l.a.createElement(Ga, { to: '/follow', text: 'follow us' })
                                        )
                                    )
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: Ma.a.slider },
                                    l.a.createElement(
                                        'div',
                                        { className: 'row' },
                                        l.a.createElement(Za, { id: 'multiCarousel', a: '#multiCarousel' })
                                    )
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: Ma.a.btnWidth },
                                    l.a.createElement(
                                        'div',
                                        { className: 'row' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            l.a.createElement(Ga, { to: '/follow', text: 'All CATALOG' })
                                        )
                                    )
                                )
                            )
                        ),
                        l.a.createElement(
                            'section',
                            { className: Ma.a.benefitsBlock },
                            l.a.createElement(
                                'div',
                                { className: 'container' },
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement('div', { className: 'col-12 ' }, l.a.createElement(Ee, { text: 'Benefits' }))
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12' },
                                        l.a.createElement(
                                            'div',
                                            { className: Ma.a.benefitsText },
                                            l.a.createElement('p', null, 'Decided to rent the dress? You\u2019ve just')
                                        )
                                    )
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 col-sm-6 col-lg-3' },
                                        l.a.createElement(Ha, { img: 'images/svg/Vector.svg', headline: 'Saved 165l of water' })
                                    ),
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 col-sm-6 col-lg-3' },
                                        l.a.createElement(Ha, {
                                            img: 'images/svg/Vector (1).svg',
                                            headline: 'Reduced 14kg of co2 emmissions',
                                        })
                                    ),
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 col-sm-6 col-lg-3' },
                                        l.a.createElement(Ha, {
                                            img: 'images/svg/Vector (2).svg',
                                            headline: 'Reduced 1kg of textile waste',
                                        })
                                    ),
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 col-sm-6 col-lg-3' },
                                        l.a.createElement(Ha, {
                                            img: 'images/svg/Vector (3).svg',
                                            headline: 'Saved 1.5 kg of oil and gas consumption',
                                        })
                                    )
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 d-flex justify-content-center' },
                                        l.a.createElement(Qe, { to: '/', text: 'rent now' })
                                    )
                                )
                            )
                        ),
                        l.a.createElement(
                            'section',
                            { className: Ma.a.galleryBlock },
                            l.a.createElement(
                                'div',
                                { className: 'container' },
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 col-md-6' },
                                        l.a.createElement(Ee, { text: 'Follow Us on Instagram' })
                                    ),
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 col-md-6' },
                                        l.a.createElement(
                                            'div',
                                            { className: Ma.a.styleBtn },
                                            l.a.createElement(Ga, { to: '/follow', text: 'follow us' })
                                        )
                                    )
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: Ma.a.slider },
                                    l.a.createElement(
                                        'div',
                                        { className: 'row' },
                                        l.a.createElement(Ka, { id: 'multiCarousel2', a: '#multiCarousel2' })
                                    )
                                )
                            ),
                            l.a.createElement(
                                'div',
                                { className: 'row' },
                                l.a.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    l.a.createElement(
                                        'div',
                                        { className: Ma.a.galleryText },
                                        l.a.createElement('p', null, 'Follow us on Instagram @dressitbox')
                                    )
                                )
                            )
                        )
                    )
                },
                et =
                    (t(321),
                    function (e, a) {
                        return Math.ceil(Math.abs(new Date(e).getTime() - new Date(a).getTime()) / 864e5)
                    }),
                at = function (e) {
                    return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(le, null),
                        l.a.createElement(
                            'div',
                            { className: 'container' },
                            l.a.createElement(
                                'div',
                                { className: 'row' },
                                l.a.createElement('div', { className: 'col-12' }, l.a.createElement(Ee, { text: 'Your bag' }))
                            )
                        ),
                        e.items.length
                            ? l.a.createElement(
                                  l.a.Fragment,
                                  null,
                                  l.a.createElement(
                                      'div',
                                      { className: 'container' },
                                      l.a.createElement(
                                          'section',
                                          { className: 'cardLink' },
                                          l.a.createElement(
                                              'div',
                                              { className: 'row' },
                                              l.a.createElement('div', { className: 'col-3' }),
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'col-4 d-flex align-items' },
                                                  l.a.createElement('p', null, 'Item')
                                              ),
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'col-2 d-flex align-items' },
                                                  l.a.createElement('p', { className: 'ml-auto' }, 'Price')
                                              ),
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'col-3 d-flex justify-content-center' },
                                                  l.a.createElement('p', null, 'Quantity')
                                              )
                                          )
                                      )
                                  ),
                                  l.a.createElement(
                                      'section',
                                      { className: 'cardBlock' },
                                      l.a.createElement(
                                          'div',
                                          { className: 'container' },
                                          e.items.map(function (a) {
                                              return l.a.createElement(
                                                  'div',
                                                  { className: 'row cardItem', key: a._id },
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'col-12 col-sm-3' },
                                                      l.a.createElement('img', { className: 'cardPhoto', src: a.photo, alt: '' })
                                                  ),
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'col-9' },
                                                      l.a.createElement(
                                                          'p',
                                                          { className: 'cardSlogan', style: { fontSize: '10px !important' } },
                                                          'maxi DRESS'
                                                      ),
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'cardList' },
                                                          l.a.createElement('p', null, 'A perfect flirty number for Balls and Black Tie.'),
                                                          l.a.createElement(
                                                              'div',
                                                              { className: 'col-3 d-flex justify-content-end' },
                                                              l.a.createElement('p', { className: 'cardPrice' }, '\u20ac', a.price)
                                                          ),
                                                          l.a.createElement(
                                                              'div',
                                                              { className: 'col-3 d-flex justify-content-center' },
                                                              l.a.createElement('p', { className: 'cardPrice' }, a.quantity),
                                                              l.a.createElement(
                                                                  'button',
                                                                  {
                                                                      className: 'increase',
                                                                      onClick: function () {
                                                                          return (function (a) {
                                                                              ;(a.quantity = a.quantity + 1),
                                                                                  e.changeQuantity(a._id, a.quantity)
                                                                          })(a)
                                                                      },
                                                                  },
                                                                  '+'
                                                              ),
                                                              l.a.createElement(
                                                                  'button',
                                                                  {
                                                                      className: 'decrease',
                                                                      onClick: function () {
                                                                          return (function (a) {
                                                                              a.quantity > 1 &&
                                                                                  ((a.quantity = a.quantity - 1),
                                                                                  e.changeQuantity(a._id, a.quantity))
                                                                          })(a)
                                                                      },
                                                                  },
                                                                  '-'
                                                              )
                                                          ),
                                                          l.a.createElement('img', {
                                                              onClick: function () {
                                                                  var t
                                                                  ;(t = a._id), e.removeProduct(t)
                                                              },
                                                              src: 'images/svg/Vector (14).svg',
                                                              alt: '',
                                                          })
                                                      ),
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'cardSize d-flex' },
                                                          l.a.createElement('p', null, 'Size:', a.size),
                                                          l.a.createElement('img', { src: 'images/svg/Vector (11).svg', alt: '' })
                                                      ),
                                                      l.a.createElement(
                                                          'p',
                                                          { className: 'cardText' },
                                                          'Rental period',
                                                          l.a.createElement('span', { className: 'starSmall' }, '*'),
                                                          ' ',
                                                          et(a.startDate, a.endDate),
                                                          ' days'
                                                      ),
                                                      l.a.createElement('p', null, 'Dates: ', a.startDate, '-', a.endDate, ' '),
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'cardDiscount' },
                                                          a.insurance
                                                              ? l.a.createElement(
                                                                    l.a.Fragment,
                                                                    null,
                                                                    l.a.createElement(
                                                                        'div',
                                                                        null,
                                                                        l.a.createElement('img', {
                                                                            onClick: function () {
                                                                                !(function (a) {
                                                                                    e.removeInsurance(a._id, !1)
                                                                                })(a)
                                                                            },
                                                                            src: 'images/svg/Vector (14).svg',
                                                                            alt: '',
                                                                        })
                                                                    ),
                                                                    l.a.createElement(
                                                                        'div',
                                                                        null,
                                                                        l.a.createElement(
                                                                            'p',
                                                                            null,
                                                                            'This product has insurance ',
                                                                            l.a.createElement('span', null, '\u20ac5')
                                                                        ),
                                                                        l.a.createElement(
                                                                            'p',
                                                                            { className: 'cardTextGrey' },
                                                                            'This will cover accidental damage (example: zip break) but not unrepairable damage'
                                                                        )
                                                                    )
                                                                )
                                                              : l.a.createElement(
                                                                    l.a.Fragment,
                                                                    null,
                                                                    l.a.createElement(
                                                                        'div',
                                                                        null,
                                                                        l.a.createElement('img', {
                                                                            src: 'images/svg/Vector (15).svg',
                                                                            alt: '',
                                                                            onClick: function () {
                                                                                return (function (a) {
                                                                                    e.addInsurance(a._id, !0)
                                                                                })(a)
                                                                            },
                                                                        })
                                                                    ),
                                                                    l.a.createElement(
                                                                        'div',
                                                                        null,
                                                                        l.a.createElement(
                                                                            'p',
                                                                            null,
                                                                            l.a.createElement('span', null, 'Add '),
                                                                            'insurance for this item for \u20ac5'
                                                                        ),
                                                                        l.a.createElement(
                                                                            'p',
                                                                            { className: 'cardTextGrey' },
                                                                            'This will cover accidental damage (example: zip break) but not unrepairable damage'
                                                                        )
                                                                    )
                                                                )
                                                      )
                                                  )
                                              )
                                          }),
                                          l.a.createElement(
                                              'div',
                                              { className: 'row cardActive' },
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'col-3 cardLinkActive' },
                                                  l.a.createElement('p', null, 'Item'),
                                                  l.a.createElement('p', null, 'Price'),
                                                  l.a.createElement('p', null, 'Price')
                                              ),
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'col-9  d-flex flex-column', style: { marginTop: '20px' } },
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'd-flex cardActiveInform' },
                                                      l.a.createElement(
                                                          'div',
                                                          null,
                                                          l.a.createElement('img', {
                                                              className: 'cardPhotoActive',
                                                              src: 'images/Mask-3.png',
                                                              alt: '',
                                                          })
                                                      ),
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'cardText' },
                                                          l.a.createElement('img', {
                                                              className: 'ml-auto',
                                                              src: 'images/svg/Vector (14).svg',
                                                              alt: '',
                                                          }),
                                                          l.a.createElement('p', { className: 'cardSlogan' }, 'maxi DRESS'),
                                                          l.a.createElement('p', null, 'A perfect flirty number for Balls and Black Tie.'),
                                                          l.a.createElement(
                                                              'div',
                                                              { className: 'cardSize d-flex' },
                                                              l.a.createElement('p', null, 'Size: XS', e.items.size),
                                                              l.a.createElement('img', { src: 'images/svg/Vector (11).svg', alt: '' })
                                                          ),
                                                          l.a.createElement(
                                                              'p',
                                                              { className: 'cardText' },
                                                              'Rental period',
                                                              l.a.createElement('span', { className: 'starSmall' }, '*'),
                                                              ' : 7 days'
                                                          ),
                                                          l.a.createElement('p', null, 'Dates: Mar 17, 2020 - Mar 24, 2020 ')
                                                      )
                                                  ),
                                                  l.a.createElement(
                                                      'p',
                                                      { className: 'cardPrice d-flex justify-content-center' },
                                                      '\u20ac61.17'
                                                  ),
                                                  l.a.createElement('p', { className: 'cardPrice ' }, '\u20ac61.17'),
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'cardDiscount' },
                                                      l.a.createElement(
                                                          'div',
                                                          null,
                                                          l.a.createElement('img', { src: 'images/svg/Vector (15).svg', alt: '' })
                                                      ),
                                                      l.a.createElement(
                                                          'div',
                                                          { style: { textAlign: 'center' } },
                                                          l.a.createElement(
                                                              'p',
                                                              null,
                                                              l.a.createElement('span', null, 'Add '),
                                                              'insurance for this item for \u20ac5'
                                                          ),
                                                          l.a.createElement(
                                                              'p',
                                                              { className: 'cardTextGrey' },
                                                              'This will cover accidental damage (example: zip break) but not unrepairable damage'
                                                          )
                                                      )
                                                  )
                                              )
                                          ),
                                          l.a.createElement(
                                              'div',
                                              { className: 'cardExtraText' },
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'row' },
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'col-10' },
                                                      l.a.createElement(
                                                          'p',
                                                          null,
                                                          l.a.createElement('span', { className: 'starSmall' }, '*'),
                                                          ' Tip: Rent 2nd outfit now and keep both outfits for 14 days in total. Upgrade to 3rd outfit and keep all 3 outfits for 21 days! Wear all outfits for as many times as you want.'
                                                      )
                                                  )
                                              )
                                          ),
                                          l.a.createElement(
                                              'div',
                                              { className: 'cardInform' },
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'row cardInformList' },
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'col-12 col-md-3' },
                                                      l.a.createElement(ie, { color: '#E77E83 ', link: '/catalog', text: 'Rent more' })
                                                  ),
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'col-12 col-md-9' },
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'cardInformListText d-flex' },
                                                          l.a.createElement('h5', null, 'Subtotal: \u20ac', e.totalPrice),
                                                          l.a.createElement(Qe, { text: 'order', to: 'buy' }),
                                                          l.a.createElement(
                                                              'p',
                                                              null,
                                                              'By proceeding you are agreeing to our ',
                                                              l.a.createElement('span', null, 'Terms & Conditions')
                                                          )
                                                      )
                                                  )
                                              )
                                          )
                                      )
                                  )
                              )
                            : l.a.createElement(
                                  'div',
                                  { className: 'row justify-content-center ', style: { color: '#E77E83' } },
                                  l.a.createElement(
                                      'h4',
                                      { className: ' d-flex flex-column align-items-center' },
                                      '\u0412\u0430\u0448\u0430 \u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430',
                                      l.a.createElement('br', null),
                                      l.a.createElement('i', { className: 'fab fa-linux' })
                                  )
                              )
                    )
                },
                tt = { items: [], isLoaded: !1, totalPrice: 0 },
                nt = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt,
                        a = arguments.length > 1 ? arguments[1] : void 0
                    switch (a.type) {
                        case 'CARD_ADD_ITEMS':
                            return Object(E.a)(
                                Object(E.a)({}, e),
                                {},
                                { items: [].concat(Object(na.a)(e.items), [a.payload]), isLoaded: !0 }
                            )
                        case 'CARD_REMOVE_ITEMS':
                            return Object(E.a)(
                                Object(E.a)({}, e),
                                {},
                                {
                                    items: e.items.filter(function (e) {
                                        return e._id !== a.itemId
                                    }),
                                }
                            )
                        case 'REMOVE_CARD_ITEMS':
                            return Object(E.a)(Object(E.a)({}, e), {}, { items: [], totalPrice: null, totalItemCount: null })
                        case 'CHANGE_ITEMS_QUANTITY':
                            return Object(E.a)(
                                Object(E.a)({}, e),
                                {},
                                {
                                    items: e.items.filter(function (e) {
                                        return e._id === a.id ? e.quantity : a.quantity
                                    }),
                                }
                            )
                        case 'CARD_ADD_INSURANCE':
                            var t = a.id
                            return Object(E.a)(
                                Object(E.a)({}, e),
                                {},
                                {
                                    items: e.items.map(function (e) {
                                        return e._id === t
                                            ? Object(E.a)(Object(E.a)({}, e), {}, { insurance: a.insurance, price: e.price + 5 })
                                            : e
                                    }),
                                }
                            )
                        case 'CARD_REMOVE_INSURANCE':
                            var n = a.id
                            return Object(E.a)(
                                Object(E.a)({}, e),
                                {},
                                {
                                    items: e.items.map(function (e) {
                                        return e._id === n
                                            ? Object(E.a)(Object(E.a)({}, e), {}, { insurance: a.insurance, price: e.price - 5 })
                                            : e
                                    }),
                                }
                            )
                        default:
                            return e
                    }
                },
                lt = function (e) {
                    return Object(ia.uniqBy)(e.card.items, function (e) {
                        return e._id
                    })
                },
                rt = Object(da.a)(lt, function (e) {
                    return e.reduce(function (e, a) {
                        return e + a.price * a.quantity
                    }, 0)
                }),
                ct = Object(ae.b)(
                    function (e) {
                        return { items: lt(e), totalPrice: rt(e), isLoaded: e.card.isLoaded }
                    },
                    {
                        changeQuantity: function (e, a) {
                            return { type: 'CHANGE_ITEMS_QUANTITY', id: e, quantity: a }
                        },
                        addInsurance: function (e, a) {
                            return { type: 'CARD_ADD_INSURANCE', id: e, insurance: a }
                        },
                        removeInsurance: function (e, a) {
                            return { type: 'CARD_REMOVE_INSURANCE', id: e, insurance: a }
                        },
                        removeProduct: function (e) {
                            return { type: 'CARD_REMOVE_ITEMS', itemId: e }
                        },
                    }
                )(at),
                st =
                    (t(322),
                    function (e) {
                        var a = e.input,
                            t = e.type,
                            n = e.meta,
                            r = n.touched,
                            c = n.error
                        n.warning
                        delete a.value
                        var s = c && r
                        return l.a.createElement(
                            'div',
                            { className: 'formControl' },
                            l.a.createElement(
                                'input',
                                Object.assign({ className: s ? 'error' : '', type: t, name: a.name }, a, { multiple: !0 })
                            ),
                            s ? l.a.createElement('span', null, c) : null
                        )
                    }),
                ot = function (e) {
                    return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(ve.a, { type: 'file', validate: [Ce], component: st, name: e.name, className: 'form-control' })
                    )
                },
                mt = Object(Ne.a)({ form: 'feedback' })(function (e) {
                    return l.a.createElement(
                        'div',
                        { className: 'row' },
                        l.a.createElement('div', { className: 'col-3' }),
                        l.a.createElement(
                            'div',
                            { className: 'col-9' },
                            l.a.createElement(
                                'form',
                                { onSubmit: e.handleSubmit, className: 'feedbackForm' },
                                l.a.createElement(ot, { name: 'images' }),
                                l.a.createElement(
                                    'div',
                                    { className: 'feedbackFormSubmit' },
                                    l.a.createElement(ve.a, {
                                        validate: [Ce],
                                        component: Me,
                                        className: 'form-control',
                                        id: 'feedbackForm2-textarea',
                                        name: 'feedbackTextarea',
                                    }),
                                    l.a.createElement('button', { className: 'formBtn ml-auto' }, 'Send')
                                )
                            ),
                            e.errors && 'ERRORS_FILE_UPLOAD' === e.errors.id ? l.a.createElement(xe, { message: e.errors.message }) : null
                        )
                    )
                }),
                it = function (e) {
                    var a = e.match.params.id,
                        t = function (t) {
                            var n = new FormData()
                            if (t.images) for (var l = 0; l < t.images.length; l++) n.append('file', t.images[l])
                            n.append('reviewText', t.feedbackTextarea), e.setReviews(n, a)
                        }
                    return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(le, null),
                        l.a.createElement(
                            'section',
                            { className: 'feedbackBlock' },
                            l.a.createElement(
                                'div',
                                { className: 'container' },
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement('div', { className: 'col-12' }, l.a.createElement(Ee, { text: 'Profile' }))
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'feedbackInform' },
                                    l.a.createElement(
                                        'div',
                                        null,
                                        l.a.createElement(
                                            'div',
                                            { className: 'row' },
                                            l.a.createElement('div', { className: 'col-12 col-lg-2' }, l.a.createElement(se, null))
                                        )
                                    ),
                                    e.success && e.success.message
                                        ? l.a.createElement(ye, { message: e.success.message })
                                        : e.review.length > 0
                                        ? l.a.createElement(
                                              'div',
                                              { className: 'feedbackList' },
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'returnLinks' },
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'container' },
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'row' },
                                                          l.a.createElement('div', { className: 'col-3' }),
                                                          l.a.createElement(
                                                              'div',
                                                              { className: 'col-4' },
                                                              l.a.createElement('p', null, 'Item')
                                                          ),
                                                          l.a.createElement(
                                                              'div',
                                                              { className: 'col-5 d-flex justify-content-center' },
                                                              l.a.createElement('p', null, 'Rate')
                                                          )
                                                      )
                                                  )
                                              ),
                                              e.review.map(function (a) {
                                                  return l.a.createElement(
                                                      'div',
                                                      { className: 'feedbackItem' },
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'container' },
                                                          l.a.createElement(
                                                              'div',
                                                              { className: 'row' },
                                                              l.a.createElement(
                                                                  'div',
                                                                  { className: 'col-3' },
                                                                  l.a.createElement('img', {
                                                                      className: 'feedbackItemImg',
                                                                      src: a.photos ? a.photos.middle : a.photo,
                                                                      alt: '',
                                                                  })
                                                              ),
                                                              l.a.createElement(
                                                                  'div',
                                                                  { className: 'col-5' },
                                                                  l.a.createElement(
                                                                      'p',
                                                                      { className: 'bagCard__slogan' },
                                                                      a.style,
                                                                      ' DRESS'
                                                                  ),
                                                                  l.a.createElement(
                                                                      'div',
                                                                      { className: 'bagCard__list' },
                                                                      l.a.createElement(
                                                                          'p',
                                                                          null,
                                                                          'A perfect flirty number for Balls and Black Tie.'
                                                                      )
                                                                  ),
                                                                  l.a.createElement(
                                                                      'div',
                                                                      { className: 'bagCard__size d-flex' },
                                                                      l.a.createElement('p', null, 'Size:', a.size),
                                                                      l.a.createElement('img', {
                                                                          src: 'images/svg/Vector (11).svg',
                                                                          alt: '',
                                                                      })
                                                                  ),
                                                                  l.a.createElement(
                                                                      'p',
                                                                      { className: 'bagCard__p' },
                                                                      'Rental period* : ',
                                                                      et(a.startDate, a.endDate),
                                                                      ' days'
                                                                  ),
                                                                  l.a.createElement(
                                                                      'p',
                                                                      null,
                                                                      'Dates: ',
                                                                      a.startDate,
                                                                      ' - ',
                                                                      a.endDate,
                                                                      ' '
                                                                  ),
                                                                  l.a.createElement(
                                                                      'p',
                                                                      { className: 'feedbackItemText' },
                                                                      'Show others how this outfit looks on you!',
                                                                      l.a.createElement('br', null),
                                                                      'Upload pictures here'
                                                                  )
                                                              ),
                                                              l.a.createElement(
                                                                  'div',
                                                                  { className: 'col-4' },
                                                                  l.a.createElement(
                                                                      'div',
                                                                      { className: 'feedbackItemColumn2' },
                                                                      l.a.createElement('img', {
                                                                          onClick: function () {
                                                                              e.clearReview()
                                                                          },
                                                                          src: '/images/svg/Vector (14).svg',
                                                                          alt: '',
                                                                          className: 'ml-auto',
                                                                      }),
                                                                      l.a.createElement(
                                                                          'div',
                                                                          { className: 'stars' },
                                                                          l.a.createElement(
                                                                              'i',
                                                                              { className: 'far fa-star stars__out' },
                                                                              l.a.createElement('i', {
                                                                                  className: 'fas fa-star stars__in',
                                                                                  style: { width: '100%' },
                                                                              })
                                                                          ),
                                                                          l.a.createElement(
                                                                              'i',
                                                                              { className: 'far fa-star stars__out' },
                                                                              l.a.createElement('i', {
                                                                                  className: 'fas fa-star stars__in',
                                                                                  style: { width: '100%' },
                                                                              })
                                                                          ),
                                                                          l.a.createElement(
                                                                              'i',
                                                                              { className: 'far fa-star stars__out' },
                                                                              l.a.createElement('i', {
                                                                                  className: 'fas fa-star stars__in',
                                                                                  style: { width: '100%' },
                                                                              })
                                                                          ),
                                                                          l.a.createElement(
                                                                              'i',
                                                                              { className: 'far fa-star stars__out' },
                                                                              l.a.createElement('i', {
                                                                                  className: 'fas fa-star stars__in',
                                                                                  style: { width: '100%' },
                                                                              })
                                                                          ),
                                                                          l.a.createElement(
                                                                              'i',
                                                                              { className: 'far fa-star stars__out' },
                                                                              l.a.createElement('i', {
                                                                                  className: 'fas fa-star stars__in',
                                                                                  style: { width: '100%' },
                                                                              })
                                                                          )
                                                                      ),
                                                                      l.a.createElement(
                                                                          'div',
                                                                          null,
                                                                          l.a.createElement(
                                                                              'p',
                                                                              { className: 'feedbackItemGrey' },
                                                                              'Rate your rented outfit.',
                                                                              l.a.createElement('br', null),
                                                                              'Let others know what you think!'
                                                                          )
                                                                      ),
                                                                      l.a.createElement('p', null, 'Review')
                                                                  )
                                                              )
                                                          )
                                                      )
                                                  )
                                              }),
                                              l.a.createElement(mt, { errors: e.errors, onSubmit: t })
                                          )
                                        : l.a.createElement(
                                              'div',
                                              { className: 'row justify-content-center  align-items-center', style: { color: '#E77E83' } },
                                              l.a.createElement(
                                                  'h4',
                                                  { className: ' d-flex flex-column align-items-center' },
                                                  '\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u043e\u0432\u0430\u0440 \u0434\u043b\u044f \u043e\u0442\u0437\u044b\u0432\u0430 \u0432 \u0432\u0430\u0448\u044b\u0445 \u0437\u0430\u043a\u0430\u0437\u0430\u0445',
                                                  l.a.createElement(u.b, { style: { color: 'grey' }, to: '/orders' }, 'orders'),
                                                  '\u0438\u043b\u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 \u0442\u043e\u0432\u0430\u0440\u043e\u0432',
                                                  l.a.createElement(u.b, { style: { color: 'grey' }, to: '/catalog' }, 'catalog')
                                              ),
                                              ' '
                                          ),
                                    l.a.createElement(
                                        'div',
                                        { className: 'row feedbackList-active' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-3 returnItem-active' },
                                            l.a.createElement('p', { style: { minHeight: '250px' } }, 'Item'),
                                            l.a.createElement('p', { style: { minHeight: '150px ' } }, 'Rate')
                                        ),
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-9  d-flex flex-column', style: { marginTop: '20px' } },
                                            l.a.createElement(
                                                'div',
                                                { className: 'd-flex', style: { minHeight: '250px !important' } },
                                                l.a.createElement(
                                                    'div',
                                                    null,
                                                    l.a.createElement('img', { src: 'images/Mask-4.png', alt: '' })
                                                ),
                                                l.a.createElement(
                                                    'div',
                                                    null,
                                                    l.a.createElement('p', null, 'maxi DRESS'),
                                                    l.a.createElement('p', null, 'A perfect flirty number for Balls and Black Tie.'),
                                                    l.a.createElement(
                                                        'div',
                                                        { className: ' d-flex' },
                                                        l.a.createElement('p', null, 'Size: XS'),
                                                        l.a.createElement('img', { src: 'images/svg/Vector (11).svg', alt: '' })
                                                    ),
                                                    l.a.createElement('p', null, 'Rental period* : 7 days'),
                                                    l.a.createElement('p', null, 'Dates: Mar 17, 2020 - Mar 24, 2020 ')
                                                )
                                            ),
                                            l.a.createElement(
                                                'div',
                                                {
                                                    className: 'feedbackItemColumn2',
                                                    style: {
                                                        minHeight: '250px !important',
                                                        display: 'flex',
                                                        justifyVontent: 'center',
                                                        alignItems: 'center',
                                                        flexDirection: 'column',
                                                    },
                                                },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'stars' },
                                                    l.a.createElement(
                                                        'i',
                                                        { className: 'far fa-star stars__out' },
                                                        l.a.createElement('i', {
                                                            className: 'fas fa-star stars__in',
                                                            style: { width: '100%' },
                                                        })
                                                    ),
                                                    l.a.createElement(
                                                        'i',
                                                        { className: 'far fa-star stars__out' },
                                                        l.a.createElement('i', {
                                                            className: 'fas fa-star stars__in',
                                                            style: { width: '100%' },
                                                        })
                                                    ),
                                                    l.a.createElement(
                                                        'i',
                                                        { className: 'far fa-star stars__out' },
                                                        l.a.createElement('i', {
                                                            className: 'fas fa-star stars__in',
                                                            style: { width: '100%' },
                                                        })
                                                    ),
                                                    l.a.createElement(
                                                        'i',
                                                        { className: 'far fa-star stars__out' },
                                                        l.a.createElement('i', {
                                                            className: 'fas fa-star stars__in',
                                                            style: { width: '100%' },
                                                        })
                                                    ),
                                                    l.a.createElement(
                                                        'i',
                                                        { className: 'far fa-star stars__out' },
                                                        l.a.createElement('i', {
                                                            className: 'fas fa-star stars__in',
                                                            style: { width: '100%' },
                                                        })
                                                    )
                                                ),
                                                l.a.createElement(
                                                    'div',
                                                    null,
                                                    l.a.createElement(
                                                        'p',
                                                        { className: 'feedbackItemGrey' },
                                                        'Rate your rented outfit.',
                                                        l.a.createElement('br', null),
                                                        'Let others know what you think!'
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    l.a.createElement(
                                        'div',
                                        { className: 'row feedbackItem-active' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            l.a.createElement(
                                                'form',
                                                { action: '', style: { marginTop: '20px' } },
                                                l.a.createElement('p', { style: { textAlign: 'center' } }, 'Review'),
                                                l.a.createElement(
                                                    'p',
                                                    { className: 'feedbackItemText' },
                                                    'Show others how this outfit looks on you!',
                                                    l.a.createElement('br', null),
                                                    'Upload pictures here'
                                                ),
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'form-group' },
                                                    l.a.createElement('input', {
                                                        type: 'file',
                                                        alt: '',
                                                        src: 'images/svg/Vector (25).svg',
                                                        className: 'form-control',
                                                    })
                                                ),
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'form-group' },
                                                    l.a.createElement('input', {
                                                        type: 'file',
                                                        alt: '',
                                                        src: 'images/svg/Vector (25).svg',
                                                        className: 'form-control',
                                                    })
                                                ),
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'form-group' },
                                                    l.a.createElement('input', {
                                                        type: 'file',
                                                        alt: '',
                                                        src: 'images/svg/Vector (25).svg',
                                                        className: 'form-control',
                                                    })
                                                )
                                            )
                                        ),
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-12 d-flex align-items flex-column' },
                                            l.a.createElement(mt, { errors: e.errors, onSubmit: t })
                                        ),
                                        l.a.createElement('div', null)
                                    )
                                )
                            )
                        )
                    )
                },
                ut = { reviews: [] },
                dt = function (e) {
                    return { type: 'SET_REVIEW', item: e }
                },
                Et = function () {
                    return { type: 'INITIAL_REVIEWS' }
                },
                pt = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut,
                        a = arguments.length > 1 ? arguments[1] : void 0
                    switch (a.type) {
                        case 'INITIAL_REVIEWS':
                            return ut
                        case 'SET_REVIEW':
                            return Object(E.a)(Object(E.a)({}, e), {}, { reviews: [a.item] })
                        default:
                            return e
                    }
                },
                ft = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(it, this.props)
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                gt = Object(ge.d)(
                    je,
                    fe,
                    Object(ae.b)(
                        function (e) {
                            return { review: e.reviews.reviews }
                        },
                        {
                            setReviews: function (e, a, t, n) {
                                return function (l, r) {
                                    var c
                                    r().auth.userInform && (c = r().auth.userInform.userImage),
                                        z(r().auth.user.name, c, e, a, t, n).then(function (e) {
                                            e.data.success
                                                ? (l(y(e.data.message, e.status, 'SUCCESS_FILE_UPLOAD')), l({ type: 'INITIAL_REVIEWS' }))
                                                : l(b(e.data.message, e.status, 'ERRORS_FILE_UPLOAD'))
                                        })
                                }
                            },
                            clearReview: Et,
                        }
                    )
                )(ft),
                vt =
                    (t(323),
                    function (e) {
                        return l.a.createElement(
                            l.a.Fragment,
                            null,
                            l.a.createElement(le, null),
                            l.a.createElement(
                                'section',
                                { className: 'orders' },
                                l.a.createElement(
                                    'div',
                                    { className: 'container' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'row' },
                                        l.a.createElement('div', { className: 'col-12' }, l.a.createElement(Ee, { text: 'Profile' }))
                                    ),
                                    l.a.createElement(
                                        'div',
                                        { className: 'ordersBlock' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'row' },
                                            l.a.createElement('div', { className: 'col-12 col-lg-2' }, l.a.createElement(se, null))
                                        ),
                                        e.orders.length
                                            ? l.a.createElement(
                                                  'div',
                                                  null,
                                                  l.a.createElement(
                                                      'h3',
                                                      null,
                                                      '\u0417\u0430\u043a\u0430\u0437\u043e\u0432: ',
                                                      e.orders.length
                                                  ),
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'returnLinks' },
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'container' },
                                                          l.a.createElement(
                                                              'div',
                                                              { className: 'row' },
                                                              l.a.createElement('div', { className: 'col-2' }),
                                                              l.a.createElement(
                                                                  'div',
                                                                  { className: 'col-4 ' },
                                                                  l.a.createElement('p', null, 'Item')
                                                              ),
                                                              l.a.createElement(
                                                                  'div',
                                                                  { className: 'col-3 d-flex align-items' },
                                                                  l.a.createElement('p', { className: 'ml-auto' }, 'Rental')
                                                              ),
                                                              l.a.createElement(
                                                                  'div',
                                                                  { className: 'col-3 d-flex align-items' },
                                                                  l.a.createElement('p', { className: 'ml-auto' }, 'Purchase')
                                                              )
                                                          )
                                                      )
                                                  ),
                                                  e.orders.map(function (a) {
                                                      return l.a.createElement(
                                                          'div',
                                                          { className: 'order', key: a._id },
                                                          l.a.createElement(
                                                              'h6',
                                                              { style: { color: 'pink' } },
                                                              '\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437\u0430:',
                                                              a._id
                                                          ),
                                                          a.items.map(function (a) {
                                                              return l.a.createElement(
                                                                  'div',
                                                                  { key: a._id },
                                                                  l.a.createElement(
                                                                      'div',
                                                                      { className: 'orders__item' },
                                                                      l.a.createElement(
                                                                          'div',
                                                                          { className: 'row' },
                                                                          l.a.createElement(
                                                                              'div',
                                                                              { className: 'col-3 col-lg-3' },
                                                                              l.a.createElement('img', {
                                                                                  className: 'orders__photo',
                                                                                  src: a.photo,
                                                                                  alt: '',
                                                                              })
                                                                          ),
                                                                          l.a.createElement(
                                                                              'div',
                                                                              { className: 'col-4 col-lg-6' },
                                                                              l.a.createElement(
                                                                                  'p',
                                                                                  { className: 'bagCard__slogan' },
                                                                                  a.style,
                                                                                  ' DRESS'
                                                                              ),
                                                                              l.a.createElement('p', null, a.text),
                                                                              l.a.createElement(
                                                                                  'div',
                                                                                  { className: 'bagCard__size d-flex' },
                                                                                  l.a.createElement('p', null, 'Size: ', a.size),
                                                                                  l.a.createElement('img', {
                                                                                      src: 'images/svg/Vector (11).svg',
                                                                                      alt: '',
                                                                                  })
                                                                              ),
                                                                              l.a.createElement(
                                                                                  'p',
                                                                                  { className: 'bagCard__p' },
                                                                                  'Rental period* : 7 days'
                                                                              ),
                                                                              l.a.createElement(
                                                                                  'p',
                                                                                  null,
                                                                                  'Dates: ',
                                                                                  a.startDate,
                                                                                  '-',
                                                                                  a.endDate,
                                                                                  ' '
                                                                              )
                                                                          ),
                                                                          l.a.createElement(
                                                                              'div',
                                                                              { className: 'col-5 col-lg-3' },
                                                                              l.a.createElement(
                                                                                  'div',
                                                                                  { className: 'orders__price ' },
                                                                                  l.a.createElement(
                                                                                      'div',
                                                                                      {
                                                                                          className:
                                                                                              'col-6 d-flex align-items justify-content-center',
                                                                                      },
                                                                                      l.a.createElement(
                                                                                          'p',
                                                                                          { className: 'bagCard__listPrice ' },
                                                                                          '\u20ac',
                                                                                          a.price
                                                                                      )
                                                                                  ),
                                                                                  l.a.createElement(
                                                                                      'div',
                                                                                      { className: 'col-5 d-flex align-items' },
                                                                                      l.a.createElement(
                                                                                          'p',
                                                                                          { className: 'bagCard__listPrice ml-auto' },
                                                                                          a.quantity
                                                                                      )
                                                                                  )
                                                                              )
                                                                          )
                                                                      ),
                                                                      l.a.createElement(
                                                                          u.b,
                                                                          {
                                                                              style: { marginTop: '10px', width: '150px', height: '30px' },
                                                                              className: 'buttonBlock',
                                                                              to: '/feedback/'.concat(a._id),
                                                                              onClick: function () {
                                                                                  return e.setItemOfReview(a)
                                                                              },
                                                                          },
                                                                          'Write a Review'
                                                                      )
                                                                  ),
                                                                  l.a.createElement(
                                                                      'div',
                                                                      { className: 'row orders__item-active' },
                                                                      l.a.createElement(
                                                                          'div',
                                                                          { className: 'col-3 returnBlock__item-active' },
                                                                          l.a.createElement(
                                                                              'p',
                                                                              { style: { minHeight: '230px !important' } },
                                                                              'Item'
                                                                          ),
                                                                          l.a.createElement(
                                                                              'p',
                                                                              { style: { minHeight: '150px !important' } },
                                                                              'Rental'
                                                                          ),
                                                                          l.a.createElement(
                                                                              'p',
                                                                              { style: { minHeight: '100px !important' } },
                                                                              'Purchase'
                                                                          )
                                                                      ),
                                                                      l.a.createElement(
                                                                          'div',
                                                                          {
                                                                              className: 'col-9  d-flex flex-column',
                                                                              style: { marginTop: '20px' },
                                                                          },
                                                                          l.a.createElement(
                                                                              'div',
                                                                              {
                                                                                  className: 'd-flex',
                                                                                  style: { minHeight: '230px !important' },
                                                                              },
                                                                              l.a.createElement(
                                                                                  'div',
                                                                                  null,
                                                                                  l.a.createElement('img', {
                                                                                      className: 'orders__photo',
                                                                                      src: 'images/Mask-4.png',
                                                                                      alt: '',
                                                                                  })
                                                                              ),
                                                                              l.a.createElement(
                                                                                  'div',
                                                                                  null,
                                                                                  l.a.createElement(
                                                                                      'p',
                                                                                      { className: 'bagCard__slogan' },
                                                                                      'maxi DRESS'
                                                                                  ),
                                                                                  l.a.createElement(
                                                                                      'p',
                                                                                      null,
                                                                                      'A perfect flirty number for Balls and Black Tie.'
                                                                                  ),
                                                                                  l.a.createElement(
                                                                                      'div',
                                                                                      { className: 'bagCard__size d-flex' },
                                                                                      l.a.createElement('p', null, 'Size: XS'),
                                                                                      l.a.createElement('img', {
                                                                                          src: 'images/svg/Vector (11).svg',
                                                                                          alt: '',
                                                                                      })
                                                                                  ),
                                                                                  l.a.createElement(
                                                                                      'p',
                                                                                      { className: 'bagCard__p' },
                                                                                      'Rental period* : 7 days'
                                                                                  ),
                                                                                  l.a.createElement(
                                                                                      'p',
                                                                                      null,
                                                                                      'Dates: Mar 17, 2020 - Mar 24, 2020 '
                                                                                  )
                                                                              )
                                                                          ),
                                                                          l.a.createElement(
                                                                              'p',
                                                                              {
                                                                                  className:
                                                                                      'bagCard__listPrice d-flex justify-content-center',
                                                                                  style: {
                                                                                      minHeight: '150px !important',
                                                                                      alignItems: 'center',
                                                                                  },
                                                                              },
                                                                              '\u20ac61.17'
                                                                          ),
                                                                          l.a.createElement(
                                                                              'div',
                                                                              { className: 'd-flex  flex-column align-items-center' },
                                                                              l.a.createElement(
                                                                                  'p',
                                                                                  {
                                                                                      className: 'bagCard__listPrice ',
                                                                                      style: {
                                                                                          minHeight: '100px !important',
                                                                                          display: 'flex',
                                                                                          alignItems: 'center',
                                                                                      },
                                                                                  },
                                                                                  '\u20ac61.17'
                                                                              ),
                                                                              l.a.createElement(
                                                                                  'button',
                                                                                  { className: 'style__btn', style: { margin: '0' } },
                                                                                  'BUY'
                                                                              ),
                                                                              l.a.createElement(
                                                                                  'p',
                                                                                  {
                                                                                      style: {
                                                                                          textAlign: 'center',
                                                                                          marginTop: '10px !important',
                                                                                      },
                                                                                  },
                                                                                  'Buy that dress that you are renting at a reduced price'
                                                                              )
                                                                          )
                                                                      )
                                                                  )
                                                              )
                                                          })
                                                      )
                                                  })
                                              )
                                            : l.a.createElement(
                                                  'div',
                                                  {
                                                      className: 'row d-flex justify-content-center align-items-center',
                                                      style: { color: '#E77E83' },
                                                  },
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'col-12' },
                                                      l.a.createElement(
                                                          'h4',
                                                          { className: 'd-flex flex-column justify-content-center align-items-center' },
                                                          '\u0423 \u0432\u0430\u0441 \u0435\u0449\u0435 \u043d\u0435 \u0431\u044b\u043b\u043e \u0437\u0430\u043a\u0430\u0437\u043e\u0432',
                                                          l.a.createElement('br', null),
                                                          l.a.createElement('i', { className: 'fab fa-linux' })
                                                      )
                                                  )
                                              )
                                    ),
                                    l.a.createElement(
                                        'div',
                                        { className: 'row' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'returnLink' },
                                            l.a.createElement(
                                                'div',
                                                { className: 'col-12' },
                                                l.a.createElement(ie, { link: '/catalog', text: 'Return to catalogue' })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    }),
                Nt = { orders: [], unloginOrder: null, inform: null },
                ht = function (e) {
                    return { type: 'ADD_ORDERS', data: e }
                },
                bt = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Nt,
                        a = arguments.length > 1 ? arguments[1] : void 0
                    switch (a.type) {
                        case 'ADD_ORDERS':
                            return Object(E.a)(Object(E.a)({}, e), {}, { orders: Object(na.a)(a.data) })
                        case 'ADD_UNLOGINORDER':
                            return Object(E.a)(Object(E.a)({}, e), {}, { unloginOrder: a.data })
                        default:
                            return e
                    }
                },
                yt = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    this.props.getOrders(this.props.userId)
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(l.a.Fragment, null, l.a.createElement(vt, this.props))
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                _t = Object(ge.d)(
                    je,
                    Object(ae.b)(
                        function (e) {
                            return { orders: e.orders.orders, userId: e.auth.user.id }
                        },
                        {
                            getOrders: function (e) {
                                return function (a) {
                                    L(e).then(function (e) {
                                        a(ht(e.data))
                                    })
                                }
                            },
                            setItemOfReview: dt,
                        }
                    )
                )(yt),
                xt = (t(324), Te(50)),
                kt = function (e) {
                    if (e.length < 5) return 'MinLength is: '.concat(5)
                },
                St = Object(Ne.a)({ form: 'checkout' })(function (e) {
                    return l.a.createElement(
                        'div',
                        { className: 'container' },
                        l.a.createElement(
                            'div',
                            { className: 'row' },
                            l.a.createElement(
                                'div',
                                { className: 'col-12' },
                                'SUCCESS_ADD_ORDER' === e.success.id
                                    ? l.a.createElement(ye, { message: e.success.message })
                                    : l.a.createElement(
                                          'form',
                                          {
                                              className: 'checkoutForm',
                                              style: { margin: '0px', marginTop: '50px', marginBottom: '50px' },
                                              onSubmit: e.handleSubmit,
                                          },
                                          l.a.createElement(
                                              'div',
                                              { className: 'form-row' },
                                              l.a.createElement('h5', { className: 'formHeadline' }, 'Shipping address')
                                          ),
                                          l.a.createElement(
                                              'div',
                                              { className: 'form-row' },
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'form-group col-12 col-md-6', id: 'm' },
                                                  l.a.createElement(ve.a, {
                                                      type: 'text',
                                                      component: be,
                                                      className: 'form-control',
                                                      validate: [Ce, kt, xt],
                                                      name: 'name',
                                                      placeholder: '\u0418\u043c\u044f',
                                                  })
                                              ),
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'form-group col-md-6' },
                                                  l.a.createElement(ve.a, {
                                                      type: 'text',
                                                      component: be,
                                                      className: 'form-control',
                                                      validate: [Ce, kt, xt],
                                                      name: 'surname',
                                                      placeholder: '\u0424\u0430\u043c\u0438\u043b\u0438\u044f',
                                                  })
                                              )
                                          ),
                                          l.a.createElement(
                                              'div',
                                              { className: 'form-group' },
                                              l.a.createElement(ve.a, {
                                                  type: 'text',
                                                  component: be,
                                                  className: 'form-control',
                                                  validate: [Ce, kt, xt],
                                                  name: 'city',
                                                  placeholder: '\u0413\u043e\u0440\u043e\u0434',
                                              })
                                          ),
                                          l.a.createElement(
                                              'div',
                                              { className: 'form-group' },
                                              l.a.createElement(ve.a, {
                                                  type: 'text',
                                                  component: be,
                                                  className: 'form-control',
                                                  validate: [Ce],
                                                  name: 'post',
                                                  placeholder:
                                                      '\u041d\u043e\u043c\u0435\u0440 \u043d\u043e\u0432\u043e\u0439 \u043f\u043e\u0447\u0442\u044b',
                                              })
                                          ),
                                          l.a.createElement(
                                              'div',
                                              { className: 'form-row' },
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'form-group col-md-6' },
                                                  l.a.createElement(
                                                      'select',
                                                      { className: 'form-control' },
                                                      l.a.createElement('option', { defaultValue: !0 }, 'Country'),
                                                      l.a.createElement('option', null, 'Ukraine'),
                                                      l.a.createElement('option', null, 'Russia')
                                                  )
                                              ),
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'form-group col-md-6' },
                                                  l.a.createElement(ve.a, {
                                                      type: 'text',
                                                      component: be,
                                                      validate: [Ce],
                                                      className: 'form-control',
                                                      name: 'code',
                                                      placeholder: 'Post code',
                                                      id: 'inputZip',
                                                  })
                                              )
                                          ),
                                          l.a.createElement(
                                              'div',
                                              { className: 'form-group ' },
                                              l.a.createElement(ve.a, {
                                                  type: 'number',
                                                  component: be,
                                                  validate: [Ce, kt, xt],
                                                  className: 'form-control',
                                                  name: 'phone',
                                                  placeholder: 'Phone',
                                              })
                                          ),
                                          l.a.createElement(
                                              'div',
                                              { className: 'form-row' },
                                              l.a.createElement('h5', { className: 'formHeadline' }, 'Billing Address')
                                          ),
                                          l.a.createElement(
                                              'div',
                                              { className: 'form-group' },
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'form-check' },
                                                  l.a.createElement(
                                                      'label',
                                                      null,
                                                      l.a.createElement(ve.a, {
                                                          type: 'checkbox',
                                                          component: 'input',
                                                          name: 'check',
                                                          className: 'form-check-label checkbox',
                                                      }),
                                                      l.a.createElement('span', { className: 'fake' }),
                                                      l.a.createElement('span', { id: 'checkText' }, 'same as Shipping Address')
                                                  )
                                              )
                                          ),
                                          l.a.createElement(
                                              'div',
                                              { className: 'form-row' },
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'col-12 d-flex align-items-center' },
                                                  l.a.createElement(ie, { link: '/catalog', text: 'Return to catalogue' })
                                              ),
                                              l.a.createElement(
                                                  'div',
                                                  { className: 'col-12 d-flex align-items-center justify-content-end' },
                                                  l.a.createElement(
                                                      'button',
                                                      { className: 'formBtn' },
                                                      '\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c'
                                                  )
                                              )
                                          )
                                      )
                            )
                        )
                    )
                }),
                Ot = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        var e
                        Object(s.a)(this, t)
                        for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r]
                        return (
                            ((e = a.call.apply(a, [this].concat(l))).onSubmit = function (a) {
                                var t
                                e.props.auth.isAuth
                                    ? ((t = { items: e.props.items, inform: a, id: e.props.auth.userId }), e.props.addOrdersThunk(t))
                                    : ((t = { items: e.props.items, formData: a }),
                                      e.props.addUnloginOrdersThunk(t),
                                      e.props.history.push('/order'))
                            }),
                            e
                        )
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(St, {
                                        initialValues: this.props.userInform,
                                        onSubmit: this.onSubmit,
                                        success: this.props.success,
                                        errors: this.props.errors,
                                    })
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                wt = Object(ge.d)(
                    fe,
                    Object(ae.b)(
                        function (e) {
                            return { errors: e.errors, items: e.card.items, auth: e.auth, userInform: e.auth.userInform }
                        },
                        {
                            addOrdersThunk: function (e) {
                                var a = e.items,
                                    t = e.inform
                                e.id
                                return function (e, n) {
                                    B(a, t, n().auth.user.id).then(function (a) {
                                        e({ type: 'REMOVE_CARD_ITEMS' }), e(y(a.data.message, a.status, 'SUCCESS_ADD_ORDER'))
                                    })
                                }
                            },
                            addUnloginOrdersThunk: function (e) {
                                return function (a) {
                                    D(e).then(function (e) {
                                        a(
                                            (function (e) {
                                                return { type: 'ADD_UNLOGINORDER', data: e }
                                            })(e.data.item.inform)
                                        ),
                                            a({ type: 'REMOVE_CARD_ITEMS' })
                                    })
                                }
                            },
                            addOrders: ht,
                            getInform: X,
                        }
                    )
                )(Ot),
                It = Object(ae.b)(function (e) {
                    return { order: e.orders.unloginOrder }
                }, {})(function (e) {
                    return l.a.createElement(
                        'div',
                        null,
                        e.order
                            ? l.a.createElement(
                                  'div',
                                  null,
                                  l.a.createElement(
                                      'div',
                                      { className: 'row' },
                                      l.a.createElement(
                                          'div',
                                          { className: 'container d-flex justify-content-center align-items-center ' },
                                          l.a.createElement(
                                              'div',
                                              {
                                                  style: { padding: '10px 10px', height: '500px', color: 'white', background: 'pink' },
                                                  className: 'col-12 d-flex justify-content-center align-items-center flex-column',
                                              },
                                              l.a.createElement(
                                                  'div',
                                                  null,
                                                  l.a.createElement(
                                                      'h1',
                                                      null,
                                                      '\u0417\u0430\u043a\u0430\u0437: ',
                                                      ((new Date().getTime() / 1e3) | 0).toString(16) +
                                                          'xxxxxxxxxxxxxxxx'
                                                              .replace(/[x]/g, function () {
                                                                  return ((16 * Math.random()) | 0).toString(16)
                                                              })
                                                              .toLowerCase()
                                                  ),
                                                  l.a.createElement(
                                                      'p',
                                                      { style: { color: 'black' } },
                                                      '\u0441\u0442\u0430\u0442\u0443\u0441: processing'
                                                  )
                                              ),
                                              l.a.createElement(
                                                  'h2',
                                                  null,
                                                  '\u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u044c: ',
                                                  e.order.name
                                              ),
                                              l.a.createElement('h3', null, '\u0410\u0434\u0440\u0435\u0441: ', e.order.city),
                                              l.a.createElement('h4', null, '\u0422\u0435\u043b\u0435\u0444\u043e\u043d:', e.order.phone),
                                              l.a.createElement(
                                                  'p',
                                                  { style: { color: '#D2691E', fontSize: '16px', marginTop: '20px' } },
                                                  '\u0412 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0441 \u0412\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u043d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440'
                                              )
                                          )
                                      )
                                  ),
                                  l.a.createElement(
                                      'div',
                                      { className: 'row d-flex justify-content-center', style: { marginTop: '20px' } },
                                      l.a.createElement(ie, { text: 'to catalog', link: '/catalog' })
                                  )
                              )
                            : null
                    )
                }),
                jt = Object(Ne.a)({ form: 'userInform' })(function (e) {
                    return l.a.createElement(
                        'form',
                        { className: 'checkoutForm', onSubmit: e.handleSubmit },
                        e.initialValues && e.initialValues.userImage
                            ? l.a.createElement('img', {
                                  style: { width: '100px', height: '100px', margin: '0 auto' },
                                  src: 'http://localhost:5000/'.concat(e.initialValues.userImage),
                              })
                            : l.a.createElement('p', null, 'Here will be your photo'),
                        l.a.createElement(
                            'div',
                            { className: 'form-row' },
                            l.a.createElement('h5', { className: 'formHeadline' }, 'Shipping address')
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-row' },
                            l.a.createElement(
                                'div',
                                { className: 'form-group col-12 col-md-6', id: 'm' },
                                l.a.createElement(ve.a, {
                                    type: 'text',
                                    component: be,
                                    className: 'form-control',
                                    name: 'name',
                                    placeholder: '\u0418\u043c\u044f',
                                })
                            ),
                            l.a.createElement(
                                'div',
                                { className: 'form-group col-md-6' },
                                l.a.createElement(ve.a, {
                                    type: 'text',
                                    component: be,
                                    className: 'form-control',
                                    name: 'surname',
                                    placeholder: '\u0424\u0430\u043c\u0438\u043b\u0438\u044f',
                                })
                            )
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(ve.a, {
                                type: 'text',
                                component: be,
                                className: 'form-control',
                                name: 'city',
                                placeholder: '\u0413\u043e\u0440\u043e\u0434',
                            })
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(ve.a, {
                                type: 'text',
                                component: be,
                                className: 'form-control',
                                name: 'post',
                                placeholder: '\u041d\u043e\u043c\u0435\u0440 \u043d\u043e\u0432\u043e\u0439 \u043f\u043e\u0447\u0442\u044b',
                            })
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-row' },
                            l.a.createElement(
                                'div',
                                { className: 'form-group col-md-6' },
                                l.a.createElement(
                                    'select',
                                    { className: 'form-control' },
                                    l.a.createElement('option', { defaultValue: !0 }, 'Country'),
                                    l.a.createElement('option', null, 'Ukraine'),
                                    l.a.createElement('option', null, 'Russia')
                                )
                            ),
                            l.a.createElement(
                                'div',
                                { className: 'form-group col-md-6' },
                                l.a.createElement(ve.a, {
                                    type: 'text',
                                    component: be,
                                    className: 'form-control',
                                    name: 'code',
                                    placeholder: 'Post code',
                                    id: 'inputZip',
                                })
                            )
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-group ' },
                            l.a.createElement(ve.a, {
                                type: 'number',
                                component: be,
                                className: 'form-control',
                                name: 'phone',
                                placeholder: 'Phone',
                            })
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-row' },
                            l.a.createElement('h5', { className: 'formHeadline' }, 'Billing Address')
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-group' },
                            l.a.createElement(
                                'div',
                                { className: 'form-check' },
                                l.a.createElement(
                                    'label',
                                    null,
                                    l.a.createElement(ve.a, {
                                        type: 'checkbox',
                                        component: 'input',
                                        name: 'check',
                                        className: 'form-check-label checkbox',
                                    }),
                                    l.a.createElement('span', { className: 'fake' }),
                                    l.a.createElement('span', { id: 'checkText' }, 'same as Shipping Address')
                                )
                            ),
                            l.a.createElement(ot, { name: 'userImage' })
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'form-row d-flex align-items-center' },
                            l.a.createElement(
                                'div',
                                { className: 'returnLink' },
                                l.a.createElement(ie, { link: '/catalog', text: 'Return to catalogue' })
                            ),
                            !0 === e.isAddInform
                                ? l.a.createElement(
                                      'div',
                                      { className: 'ml-auto' },
                                      l.a.createElement(
                                          'button',
                                          { className: 'formBtn' },
                                          '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c'
                                      )
                                  )
                                : l.a.createElement(
                                      'div',
                                      { className: 'ml-auto' },
                                      l.a.createElement(
                                          'button',
                                          { className: 'formBtn' },
                                          '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c'
                                      )
                                  )
                        ),
                        e.errors && 'USER_INFORM_CHANGE_ERROR' === e.errors.id ? l.a.createElement(xe, { message: e.errors.message }) : null
                    )
                }),
                Rt = function (e) {
                    return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(le, null),
                        l.a.createElement(
                            'section',
                            { className: 'checkoutBlock' },
                            l.a.createElement(
                                'div',
                                { className: 'container' },
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement('div', { className: 'col-12' }, l.a.createElement(Ee, { text: 'My information' }))
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'row' },
                                    l.a.createElement('div', { className: 'col-12 col-md-3' }, l.a.createElement(se, null)),
                                    l.a.createElement(
                                        'div',
                                        { className: 'col-12 col-md-8' },
                                        e.success && null != e.success.message
                                            ? l.a.createElement(ye, { message: e.success.message })
                                            : e.inform
                                            ? l.a.createElement(jt, {
                                                  onSubmit: function (a) {
                                                      var t = new FormData()
                                                      null != a.userImage
                                                          ? t.append('file', a.userImage[0])
                                                          : t.append('file', e.inform.userImage),
                                                          t.append('city', a.city),
                                                          t.append('code', a.code),
                                                          t.append('name', a.name),
                                                          t.append('phone', a.phone),
                                                          t.append('post', a.post),
                                                          t.append('surname', a.surname),
                                                          t.append('country', a.country),
                                                          e.updateInform(t)
                                                  },
                                                  errors: e.errors,
                                                  isAddInform: e.isAddInform,
                                                  initialValues: e.inform,
                                              })
                                            : l.a.createElement(jt, {
                                                  isAddInform: e.isAddInform,
                                                  onSubmit: function (a) {
                                                      var t = new FormData()
                                                      a.userImage ? t.append('file', a.userImage[0]) : t.append('file', e.inform.userImage),
                                                          t.append('city', a.city),
                                                          t.append('code', a.code),
                                                          t.append('name', a.name),
                                                          t.append('phone', a.phone),
                                                          t.append('post', a.post),
                                                          t.append('surname', a.surname),
                                                          t.append('country', a.country),
                                                          e.setInform(t)
                                                  },
                                                  errors: e.errors,
                                              })
                                    )
                                )
                            )
                        )
                    )
                },
                Ct = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    this.props.getInform(this.props.userId)
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function (e) {
                                    e.inform !== this.props.inform && this.props.getInform(this.props.userId)
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(
                                        l.a.Fragment,
                                        null,
                                        l.a.createElement(
                                            Rt,
                                            Object.assign({}, this.props, {
                                                isAddInform: this.props.isAddInform,
                                                updateInform: this.props.updateInform,
                                                setInform: this.props.setInform,
                                                success: this.props.success,
                                                errors: this.props.errors,
                                            })
                                        )
                                    )
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                Tt = Object(ge.d)(
                    je,
                    fe,
                    Object(ae.b)(
                        function (e) {
                            return { inform: e.inform.inform, userId: e.auth.user.id, isAddInform: e.inform.isAddInform }
                        },
                        {
                            getInform: X,
                            updateInform: Z,
                            setInform: function (e) {
                                var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                                return function (t, n) {
                                    F(n().auth.user.id, e, a)
                                        .then(function (e) {
                                            t(y(e.data.message, e.status, 'SUCCESS_USER_INFORM_SET')), t(Q(e.data))
                                        })
                                        .catch(function (e) {
                                            t(b(e.response.data.message, e.response.status, 'ERROR_USER_INFORM_SET'))
                                        })
                                }
                            },
                        }
                    )
                )(Ct),
                At = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        var e
                        Object(s.a)(this, t)
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
                        return (
                            ((e = a.call.apply(a, [this].concat(r))).onSubmit = function (a) {
                                var t = e.props.match.params.token
                                e.props.resetPass(a.newPassword, a.verifyPassword, t)
                            }),
                            (e.generateForm = function () {
                                return l.a.createElement(Pt, { onSubmit: e.onSubmit, errors: e.props.errors })
                            }),
                            e
                        )
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(
                                        'div',
                                        null,
                                        this.props.success && 'SUCCESS_RESET' === this.props.success.id
                                            ? l.a.createElement(ye, { message: this.props.success.message })
                                            : this.generateForm()
                                    )
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                Pt = Object(Ne.a)({ form: 'forgotForm' })(function (e) {
                    return l.a.createElement(
                        'div',
                        { className: 'container', style: { marginBottom: '20px' } },
                        l.a.createElement(
                            'div',
                            { className: 'row' },
                            l.a.createElement(
                                'div',
                                { className: 'col-12 d-flex justif-content-center flex-column align-items-center' },
                                l.a.createElement(
                                    'div',
                                    null,
                                    l.a.createElement('h3', null, 'Password confirmation!'),
                                    l.a.createElement(
                                        'form',
                                        { onSubmit: e.handleSubmit, style: { marginTop: '20px' } },
                                        l.a.createElement('label', { for: 'newPassword' }, 'New Password'),
                                        l.a.createElement(ve.a, {
                                            className: 'form-control',
                                            type: 'text',
                                            component: be,
                                            name: 'newPassword',
                                            id: 'newPassword',
                                            required: !0,
                                        }),
                                        l.a.createElement('label', { for: 'verifyPassword' }, 'Confirm Password'),
                                        l.a.createElement(ve.a, {
                                            className: 'form-control',
                                            type: 'text',
                                            component: be,
                                            name: 'verifyPassword',
                                            id: 'verifyPassword',
                                            required: !0,
                                        }),
                                        l.a.createElement(
                                            'button',
                                            { className: 'btn btn-success', style: { marginTop: '10px', width: '100%' } },
                                            '  Reset Password'
                                        )
                                    )
                                )
                            )
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'row d-flex justify-content-center' },
                            e.errors && 'RESET_ERROR' === e.errors.id
                                ? l.a.createElement(_e.a, { color: 'danger' }, e.errors.message.message)
                                : null
                        )
                    )
                }),
                Bt = Object(ge.d)(
                    fe,
                    Object(ae.b)(null, {
                        resetPass: function (e, a, t) {
                            return function (n) {
                                T(e, a, t)
                                    .then(function (e) {
                                        n({ type: 'RESET_PASS' }), n(y(e.data.message, e.status, 'SUCCESS_RESET'))
                                    })
                                    .catch(function (e) {
                                        n(b(e.response.data, e.response.status, 'RESET_ERROR')), n({ type: 'RESET_ERROR' })
                                    })
                            }
                        },
                    })
                )(At),
                Dt = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        var e
                        Object(s.a)(this, t)
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c]
                        return (
                            ((e = a.call.apply(a, [this].concat(r))).changePassword = function (a) {
                                e.props.changePass(a.target.value)
                            }),
                            (e.handleSubmit = function (a) {
                                a.preventDefault(), e.props.requestToken()
                            }),
                            (e.generateForm = function () {
                                return l.a.createElement(
                                    'div',
                                    null,
                                    l.a.createElement(
                                        'div',
                                        { className: 'container' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'row ' },
                                            l.a.createElement(
                                                'div',
                                                { className: 'col-12 d-flex justify-content-center' },
                                                l.a.createElement(
                                                    'form',
                                                    { onSubmit: e.handleSubmit },
                                                    l.a.createElement('input', {
                                                        className: 'form-control',
                                                        type: 'email',
                                                        onChange: e.changePassword,
                                                        placeholder: 'Enter your email',
                                                    }),
                                                    l.a.createElement('input', {
                                                        className: 'btn btn-success',
                                                        style: { width: '100%', marginTop: '20px' },
                                                        type: 'submit',
                                                        value: '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c',
                                                    })
                                                )
                                            )
                                        ),
                                        l.a.createElement(
                                            'div',
                                            { className: 'd-flex justify-content-center' },
                                            'FORGOT_ERROR' === e.props.errors.id
                                                ? l.a.createElement(xe, { message: e.props.errors.message })
                                                : null
                                        )
                                    )
                                )
                            }),
                            e
                        )
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    this.props.resetEmailSentClear()
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(
                                        'div',
                                        null,
                                        this.props.emailSent
                                            ? l.a.createElement(ye, {
                                                  message: 'If account exist you will recieve message with instructions',
                                              })
                                            : this.generateForm()
                                    )
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                Lt = Object(ge.d)(
                    fe,
                    Object(ae.b)(
                        function (e) {
                            return { email: e.auth.forgotEmail, emailSent: e.auth.emailSent }
                        },
                        {
                            clearSuccess: h,
                            clearErrors: N,
                            changePass: function (e) {
                                return { type: 'FORGOT_PASS', forgotEmail: e }
                            },
                            requestToken: function () {
                                return function (e, a) {
                                    C(a().auth.forgotEmail)
                                        .then(function (a) {
                                            e({ type: 'EMAIL_SENT', bool: !0 })
                                        })
                                        .catch(function (a) {
                                            e(b(a.response.data, a.response.status, 'FORGOT_ERROR')), e({ type: 'FORGOT_ERROR' })
                                        })
                                }
                            },
                            resetEmailSentClear: function (e) {
                                return { type: 'FORGOT_PASS_RESET', forgotEmail: e }
                            },
                        }
                    )
                )(Dt),
                Mt = (t(325), l.a.createContext()),
                Ut = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        var e
                        Object(s.a)(this, t)
                        for (var n = arguments.length, l = new Array(n), r = 0; r < n; r++) l[r] = arguments[r]
                        return (
                            ((e = a.call.apply(a, [this].concat(l))).state = { modalOpen: !1, modalProduct: null, size: null }),
                            (e.openModal = function (a, t) {
                                e.setState(function () {
                                    return { modalProduct: a, size: t, modalOpen: !0 }
                                })
                            }),
                            (e.closeModal = function () {
                                e.setState(function () {
                                    return { modalProduct: null, modalOpen: !1 }
                                })
                            }),
                            e
                        )
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(
                                        Mt.Provider,
                                        {
                                            value: Object(E.a)(
                                                Object(E.a)({}, this.state),
                                                {},
                                                { openModal: this.openModal, closeModal: this.closeModal }
                                            ),
                                        },
                                        this.props.children
                                    )
                                },
                            },
                        ]),
                        t
                    )
                })(n.Component),
                Ft = Mt.Consumer,
                Gt = function (e) {
                    var a = e.input,
                        t = e.meta,
                        n = t.touched,
                        r = t.error,
                        c = Object(he.a)(e, ['input', 'meta']),
                        s = r && n
                    return l.a.createElement(
                        'div',
                        { className: 'formControl' },
                        l.a.createElement('select', Object.assign({ className: s ? 'error' : '' }, a, c)),
                        s ? l.a.createElement('span', null, r) : null
                    )
                },
                zt = t(152),
                Vt = t.n(zt),
                Ht = Object(Ne.a)({ form: 'product' })(function (e) {
                    var a = Object(n.useState)(),
                        t = Object(Ye.a)(a, 2),
                        r = t[0],
                        c = t[1]
                    return l.a.createElement(
                        'form',
                        { onSubmit: e.handleSubmit },
                        l.a.createElement(
                            'div',
                            { className: 'detailsInformList' },
                            l.a.createElement('h6', null, 'Step 1.'),
                            l.a.createElement(
                                'div',
                                { className: 'd-flex align-items-center' },
                                l.a.createElement(
                                    ve.a,
                                    {
                                        validate: [Ce],
                                        component: Gt,
                                        onChange: function (e) {
                                            c(e.target.value)
                                        },
                                        name: 'size',
                                        className: 'detailsBtn',
                                    },
                                    e.item.sizes
                                        ? e.item.sizes.map(function (e) {
                                              return l.a.createElement('option', { key: e }, e)
                                          })
                                        : l.a.createElement(
                                              'option',
                                              null,
                                              ' \u0420\u0430\u0437\u043c\u0435\u0440\u043e\u0432 \u043d\u0435\u0442'
                                          )
                                ),
                                l.a.createElement(
                                    'div',
                                    { className: 'd-flex detailsSize' },
                                    l.a.createElement('img', { src: '/images/svg/Vector (11).svg', alt: '' }),
                                    l.a.createElement('p', null, 'size guide')
                                )
                            ),
                            l.a.createElement('p', { className: 'detailsInformListRental' }, 'Rental Period *'),
                            l.a.createElement(
                                'div',
                                { className: 'detailsInformListRentalBlock' },
                                l.a.createElement('img', { src: '/images/svg/Vector (12).svg', alt: '' }),
                                l.a.createElement('p', null, '7 day rental')
                            )
                        ),
                        l.a.createElement(
                            'div',
                            { className: 'detailsInformList' },
                            l.a.createElement('h6', null, 'Step 2.'),
                            l.a.createElement(
                                'div',
                                { className: 'detailsInformListDate' },
                                l.a.createElement(
                                    'div',
                                    null,
                                    l.a.createElement('p', null, 'Delivery Date'),
                                    l.a.createElement(ve.a, {
                                        validate: [Ce],
                                        type: 'date',
                                        component: be,
                                        name: 'startDate',
                                        className: 'form-control',
                                    })
                                ),
                                l.a.createElement(
                                    'div',
                                    null,
                                    l.a.createElement('p', null, 'Delivery Date'),
                                    l.a.createElement(ve.a, {
                                        validate: [Ce],
                                        type: 'date',
                                        component: be,
                                        name: 'endDate',
                                        className: 'form-control',
                                    })
                                )
                            ),
                            e.submitSucceeded ? e.value.openModal(e.item, r) : null,
                            l.a.createElement(
                                'p',
                                { className: 'detailsInformListDateTextarea' },
                                l.a.createElement('span', { style: { paddingRight: '3px' }, className: 'starSmall' }, '*'),
                                ' Tip: Rent 2nd outfit now and keep both outfits for 14 days in total. Upgrade to 3rd outfit and keep all 3 outfits for 21 days! Wear all outfits for as many times as you want.'
                            ),
                            l.a.createElement('button', { className: 'buttonBlock1' }, ' Add to cart')
                        )
                    )
                }),
                qt = function (e) {
                    var a = function (a) {
                        var t = a.size,
                            n = a.startDate,
                            l = a.endDate,
                            r = e.items,
                            c = e.goodItem[0],
                            s = c.price,
                            o = c.photos,
                            m = c._id,
                            i = c.style,
                            u = { photo: o.middle, price: s, _id: m, style: i },
                            d = !1
                        if (r.length > 0) {
                            for (var E = 0; E < r.length; E++)
                                if (r[E]._id.includes(m)) {
                                    r[E].quantity++, (d = !0)
                                    break
                                }
                            0 == d && e.addToCart(Object.assign({ size: t, startDate: n, endDate: l, quantity: 1 }, u))
                        } else e.addToCart(Object.assign({ size: t, startDate: n, endDate: l, quantity: 1 }, u))
                    }
                    return l.a.createElement(Ft, null, function (t) {
                        return l.a.createElement(
                            'div',
                            null,
                            e.goodItem.map(function (n) {
                                return l.a.createElement(
                                    'div',
                                    { key: n._id },
                                    l.a.createElement(le, null),
                                    l.a.createElement(
                                        'section',
                                        { className: 'detailsBlock' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'container' },
                                            l.a.createElement(
                                                'div',
                                                { className: 'row' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'col-12' },
                                                    l.a.createElement(Ee, { text: 'Sussex Copper Foil Maxi dress' })
                                                )
                                            ),
                                            l.a.createElement(
                                                'div',
                                                { className: 'row' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'col-12 col-sm-12 col-lg-2' },
                                                    l.a.createElement(
                                                        'div',
                                                        {
                                                            id: 'multiCarousel_3',
                                                            className: 'carousel slide w-100',
                                                            'data-ride': 'carousel',
                                                        },
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'carousel-inner-2 w-100', role: 'listbox' },
                                                            l.a.createElement(
                                                                'div',
                                                                { className: 'carousel-item active' },
                                                                l.a.createElement('img', {
                                                                    className: 'carousel__img',
                                                                    src: '/images/photo4.png',
                                                                    alt: '',
                                                                })
                                                            ),
                                                            n.photos.small.map(function (e) {
                                                                return l.a.createElement(
                                                                    'div',
                                                                    { key: e._id, className: 'carousel-item' },
                                                                    l.a.createElement('img', {
                                                                        className: 'carousel__img',
                                                                        src: e,
                                                                        alt: '',
                                                                    })
                                                                )
                                                            })
                                                        ),
                                                        l.a.createElement(
                                                            'a',
                                                            {
                                                                id: 'arrow-prev1',
                                                                to: '#',
                                                                href: '#multiCarousel_3',
                                                                role: 'button',
                                                                'data-slide': 'prev',
                                                            },
                                                            l.a.createElement(
                                                                'div',
                                                                { className: 'arrow-1' },
                                                                l.a.createElement('i', {
                                                                    className: 'big fas fa-chevron-up',
                                                                    'aria-hidden': 'true',
                                                                }),
                                                                l.a.createElement('i', {
                                                                    className: 'smallLeft fas fa-chevron-left',
                                                                    'aria-hidden': 'true',
                                                                }),
                                                                l.a.createElement(
                                                                    'span',
                                                                    { className: 'sr-only' },
                                                                    '\u041f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0439'
                                                                )
                                                            )
                                                        ),
                                                        l.a.createElement(
                                                            'a',
                                                            {
                                                                id: 'arrow-next1',
                                                                to: '#',
                                                                href: '#multiCarousel_3',
                                                                role: 'button',
                                                                'data-slide': 'next',
                                                            },
                                                            l.a.createElement(
                                                                'div',
                                                                { className: 'arrow-1' },
                                                                l.a.createElement('i', {
                                                                    className: 'big fas fa-chevron-down',
                                                                    'aria-hidden': 'true',
                                                                }),
                                                                l.a.createElement('i', {
                                                                    className: 'smallRight fas fa-chevron-right',
                                                                    'aria-hidden': 'true',
                                                                }),
                                                                l.a.createElement(
                                                                    'span',
                                                                    { className: 'sr-only' },
                                                                    'C\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439'
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'col-12 col-sm-4 col-lg-4 d-flex justify-content-center' },
                                                    l.a.createElement('img', { className: 'detailsPhoto', src: n.photos.middle, alt: '' })
                                                ),
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'col-12 col-sm-8 col-lg-4' },
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'detailsInform' },
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'detailsInformList' },
                                                            l.a.createElement('p', { className: 'detailsListSlogan' }, n.style, ' Dress'),
                                                            l.a.createElement('p', { className: 'detailsListText' }, n.text),
                                                            l.a.createElement(
                                                                'div',
                                                                { className: 'detailsListStars' },
                                                                l.a.createElement(
                                                                    'div',
                                                                    { className: 'stars' },
                                                                    l.a.createElement(
                                                                        'i',
                                                                        { className: 'far fa-star ' },
                                                                        l.a.createElement('i', { className: 'fas fa-star ' })
                                                                    ),
                                                                    l.a.createElement(
                                                                        'i',
                                                                        { className: 'far fa-star ' },
                                                                        l.a.createElement('i', { className: 'fas fa-star ' })
                                                                    ),
                                                                    l.a.createElement(
                                                                        'i',
                                                                        { className: 'far fa-star ' },
                                                                        l.a.createElement('i', { className: 'fas fa-star ' })
                                                                    ),
                                                                    l.a.createElement(
                                                                        'i',
                                                                        { className: 'far fa-star ' },
                                                                        l.a.createElement('i', { className: 'fas fa-star ' })
                                                                    ),
                                                                    l.a.createElement(
                                                                        'i',
                                                                        { className: 'far fa-star ' },
                                                                        l.a.createElement('i', { className: 'fas fa-star ' })
                                                                    )
                                                                ),
                                                                l.a.createElement(
                                                                    'p',
                                                                    null,
                                                                    n.reviews ? n.goodReviewsQuantity : null,
                                                                    ' Reviews'
                                                                )
                                                            ),
                                                            l.a.createElement(
                                                                'p',
                                                                { className: 'detailsItem-price-line' },
                                                                '\u20ac',
                                                                n.salePrice
                                                            ),
                                                            l.a.createElement('p', { className: 'detailsItem-price' }, '\u20ac', n.price),
                                                            l.a.createElement('hr', null)
                                                        ),
                                                        l.a.createElement(Ht, { onSubmit: a, item: n, value: t }),
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'detailsInformList' },
                                                            l.a.createElement(
                                                                'p',
                                                                { className: 'detailsInformListTextarea ' },
                                                                'Gorgeous Finders Keepers red ruffle midi dress - is guaranteed to turn heads at any occasion. Uber flattering fit with adjustable tie back and beautiful ruffle detail.',
                                                                l.a.createElement('br', null),
                                                                l.a.createElement('br', null),
                                                                "Remember all our outfits are available to rent from 4 to 16 days and you don't have to worry about the cleaning - we do that for you!",
                                                                l.a.createElement('br', null),
                                                                l.a.createElement('br', null),
                                                                'Click here to browse other Midi Dresses.',
                                                                l.a.createElement('br', null),
                                                                l.a.createElement('br', null),
                                                                'Renting with Hirestreet is easy\u201a Simply choose your outfit, select your rental period and checkout to reserve your item. Once you have received your outfit, wear & share your look as much as you like until your return date.'
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        ),
                                        l.a.createElement(
                                            'section',
                                            { className: 'styleBlock' },
                                            l.a.createElement(
                                                'div',
                                                { className: 'container' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'row' },
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'col-12 col-sm-6' },
                                                        l.a.createElement(Ee, { text: 'Recommended For You' })
                                                    ),
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'col-12 col-md-6' },
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'styleBtn' },
                                                            l.a.createElement(Ga, { text: 'ALL CATALOG', to: '/catalog' })
                                                        )
                                                    )
                                                ),
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'row' },
                                                    l.a.createElement(Za, { id: 'multiCarousel3', a: '#multiCarousel3' })
                                                ),
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'row' },
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'col-12 btnWidth' },
                                                        l.a.createElement(Ga, { text: 'All CATALOG', to: '/catalog' })
                                                    )
                                                )
                                            )
                                        ),
                                        l.a.createElement(
                                            'section',
                                            { className: 'reviewBlock' },
                                            l.a.createElement(
                                                'div',
                                                { className: 'container' },
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'row' },
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'col-6' },
                                                        l.a.createElement(Ee, { text: 'Reviews' })
                                                    ),
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'col-6' },
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'styleBtn' },
                                                            l.a.createElement(
                                                                u.b,
                                                                {
                                                                    style: { border: '1px solid #E77E83' },
                                                                    className: 'buttonBlock',
                                                                    to: '/feedback/'.concat(n._id),
                                                                    onClick: function () {
                                                                        return e.setItemOfReview(n)
                                                                    },
                                                                },
                                                                'Write a Review'
                                                            )
                                                        )
                                                    )
                                                ),
                                                n.reviews.length
                                                    ? null
                                                    : l.a.createElement(
                                                          'div',
                                                          { className: 'row justify-content-center ', style: { color: '#E77E83' } },
                                                          l.a.createElement(
                                                              'h4',
                                                              { className: ' d-flex flex-column align-items-center' },
                                                              '\u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432 \u044d\u0442\u043e\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u0430 \u043d\u0435\u0442 \u043e\u0442\u0437\u044b\u0432\u043e\u0432',
                                                              l.a.createElement('br', null),
                                                              l.a.createElement('i', { class: 'fab fa-linux' })
                                                          )
                                                      ),
                                                n.reviews.map(function (e) {
                                                    return l.a.createElement(
                                                        'div',
                                                        { key: e._id, className: 'reviewItem' },
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'row' },
                                                            l.a.createElement(
                                                                'div',
                                                                { className: 'col-12 col-sm-12  col-lg-3 ' },
                                                                l.a.createElement(
                                                                    'div',
                                                                    { className: 'reviewInform ' },
                                                                    l.a.createElement(
                                                                        'div',
                                                                        { className: 'reviewImg' },
                                                                        l.a.createElement('img', {
                                                                            src:
                                                                                'undefined' != e.photo
                                                                                    ? 'http://localhost:5000/'.concat(e.photo)
                                                                                    : Vt.a,
                                                                            alt: '',
                                                                        })
                                                                    ),
                                                                    l.a.createElement(
                                                                        'div',
                                                                        { className: 'reviewText' },
                                                                        l.a.createElement('h5', null, e.name),
                                                                        l.a.createElement('p', null, e.rating),
                                                                        l.a.createElement(
                                                                            'div',
                                                                            { className: 'stars' },
                                                                            l.a.createElement(
                                                                                'i',
                                                                                { className: 'far fa-star ' },
                                                                                l.a.createElement('i', { className: 'fas fa-star ' })
                                                                            ),
                                                                            l.a.createElement(
                                                                                'i',
                                                                                { className: 'far fa-star ' },
                                                                                l.a.createElement('i', { className: 'fas fa-star ' })
                                                                            ),
                                                                            l.a.createElement(
                                                                                'i',
                                                                                { className: 'far fa-star ' },
                                                                                l.a.createElement('i', { className: 'fas fa-star ' })
                                                                            ),
                                                                            l.a.createElement(
                                                                                'i',
                                                                                { className: 'far fa-star ' },
                                                                                l.a.createElement('i', { className: 'fas fa-star ' })
                                                                            ),
                                                                            l.a.createElement(
                                                                                'i',
                                                                                { className: 'far fa-star ' },
                                                                                l.a.createElement('i', { className: 'fas fa-star ' })
                                                                            )
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            l.a.createElement(
                                                                'div',
                                                                { className: 'col-12 col-sm-12 col-lg-9' },
                                                                l.a.createElement(
                                                                    'div',
                                                                    { className: 'reviewCard' },
                                                                    l.a.createElement(
                                                                        'ul',
                                                                        { className: 'reviewList' },
                                                                        l.a.createElement('li', null, 'Your height (in feet)?  5.7'),
                                                                        l.a.createElement('li', null, 'About the fit True to size'),
                                                                        l.a.createElement('li', null, 'About your curves  Curvey')
                                                                    ),
                                                                    l.a.createElement(
                                                                        'p',
                                                                        null,
                                                                        l.a.createElement('span', null, e.reviewText)
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        l.a.createElement('hr', null)
                                                    )
                                                }),
                                                l.a.createElement(
                                                    'div',
                                                    { className: 'row' },
                                                    l.a.createElement(
                                                        'div',
                                                        { className: 'col-12 d-flex justify-content-center' },
                                                        l.a.createElement(
                                                            'div',
                                                            { className: 'stars', id: 'stars' },
                                                            l.a.createElement(
                                                                'i',
                                                                { className: 'far fa-star ' },
                                                                l.a.createElement('i', { className: 'fas fa-star ' })
                                                            ),
                                                            l.a.createElement(
                                                                'i',
                                                                { className: 'far fa-star ' },
                                                                l.a.createElement('i', { className: 'fas fa-star ' })
                                                            ),
                                                            l.a.createElement(
                                                                'i',
                                                                { className: 'far fa-star ' },
                                                                l.a.createElement('i', { className: 'fas fa-star ' })
                                                            ),
                                                            l.a.createElement(
                                                                'i',
                                                                { className: 'far fa-star ' },
                                                                l.a.createElement('i', { className: 'fas fa-star ' })
                                                            ),
                                                            l.a.createElement(
                                                                'i',
                                                                { className: 'far fa-star ' },
                                                                l.a.createElement('i', { className: 'fas fa-star ' })
                                                            )
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    ),
                                    ');'
                                )
                            })
                        )
                    })
                },
                Wt = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'refreshProfile',
                                value: function () {
                                    var e = this.props.match.params.id
                                    e && this.props.getGoodsThunkById(e)
                                },
                            },
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    this.refreshProfile()
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function (e) {
                                    this.props.match.params.id !== e.match.params.id && this.refreshProfile()
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(qt, this.props)
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                Yt = Object(ae.b)(
                    function (e) {
                        return { goodItem: e.goods.goodItem, items: e.card.items }
                    },
                    {
                        getGoodsThunkById: oa,
                        addToCart: function (e) {
                            return { type: 'CARD_ADD_ITEMS', payload: e }
                        },
                        removeGood: function () {
                            return { type: 'REMOVE_GOODBYID_AC' }
                        },
                        setItemOfReview: dt,
                    }
                )(Wt),
                Qt = t(76),
                Xt = t(77)
            function Zt() {
                var e = Object(Qt.a)([
                    '\n  text-transform: capitalize;\n  font-size: 1.4rem;\n  background: transparent;\n  border: 0.05rem solid grey;\n  border-color: grey;\n  color:pink;\n  border-radius: 0.5rem;\n  padding: 0.2rem 0.5rem;\n  outline-color: red;\n  cursor: pointer;\n  display: inline-block;\n  margin: 0.2rem 0.5rem 0.2rem 0;\n  transition: all 0.5s ease-in-out;\n  &:hover {\n    background: pink;\n    color:white;\n  }\n  &:focus {\n    outline: none;\n  }\n',
                ])
                return (
                    (Zt = function () {
                        return e
                    }),
                    e
                )
            }
            var Jt = Xt.a.button(Zt())
            function Kt() {
                var e = Object(Qt.a)([
                    '\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  #modal {\n    background: white\n  }\n',
                ])
                return (
                    (Kt = function () {
                        return e
                    }),
                    e
                )
            }
            var $t = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'render',
                                value: function () {
                                    return l.a.createElement(Ft, null, function (e) {
                                        var a = e.modalOpen,
                                            t = e.closeModal
                                        return a
                                            ? l.a.createElement(
                                                  en,
                                                  null,
                                                  l.a.createElement(
                                                      'div',
                                                      { className: 'container' },
                                                      l.a.createElement(
                                                          'div',
                                                          { className: 'row' },
                                                          l.a.createElement(
                                                              'div',
                                                              {
                                                                  className:
                                                                      'col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize',
                                                                  id: 'modal',
                                                              },
                                                              l.a.createElement('h5', null, 'Your good added to cart'),
                                                              l.a.createElement('img', {
                                                                  src: e.modalProduct.photos.middle,
                                                                  className: 'img-fluid',
                                                                  alt: '',
                                                              }),
                                                              l.a.createElement('h5', null, e.modalProduct.text),
                                                              l.a.createElement(
                                                                  'h5',
                                                                  { className: 'text-muted' },
                                                                  'price : $',
                                                                  l.a.createElement(
                                                                      'span',
                                                                      { style: { fontWeight: 'bold' } },
                                                                      e.modalProduct.price
                                                                  )
                                                              ),
                                                              l.a.createElement(
                                                                  'h5',
                                                                  { className: 'text-muted' },
                                                                  'size : ',
                                                                  l.a.createElement('span', { style: { fontWeight: 'bold' } }, e.size)
                                                              ),
                                                              l.a.createElement(
                                                                  'h5',
                                                                  { className: 'text-muted' },
                                                                  'color : ',
                                                                  l.a.createElement(
                                                                      'span',
                                                                      { style: { fontWeight: 'bold' } },
                                                                      e.modalProduct.color
                                                                  )
                                                              ),
                                                              l.a.createElement(
                                                                  u.b,
                                                                  { to: '/catalog' },
                                                                  l.a.createElement(
                                                                      Jt,
                                                                      {
                                                                          onClick: function () {
                                                                              t()
                                                                          },
                                                                      },
                                                                      'Continue Shopping'
                                                                  )
                                                              ),
                                                              l.a.createElement(
                                                                  u.b,
                                                                  { to: '/card' },
                                                                  l.a.createElement(
                                                                      Jt,
                                                                      {
                                                                          onClick: function () {
                                                                              t()
                                                                          },
                                                                      },
                                                                      'Go To Cart'
                                                                  )
                                                              )
                                                          )
                                                      )
                                                  )
                                              )
                                            : null
                                    })
                                },
                            },
                        ]),
                        t
                    )
                })(n.Component),
                en = Xt.a.div(Kt()),
                an = $t,
                tn =
                    (t(326),
                    function () {
                        return l.a.createElement(
                            'div',
                            { id: 'notfound' },
                            l.a.createElement(
                                'div',
                                { className: 'notfound' },
                                l.a.createElement('div', { className: 'notfound-404' }, l.a.createElement('h1', null, '404')),
                                l.a.createElement('h2', null, "Oops, The Page you are looking for can't be found!"),
                                l.a.createElement(u.b, { to: '/' }, l.a.createElement('span', { className: 'arrow' }), 'Return To Homepage')
                            )
                        )
                    }),
                nn = t(36),
                ln = t.n(nn),
                rn = Te(30),
                cn = function (e) {
                    if (e.length < 5) return 'MinLength is: '.concat(5)
                },
                sn = Object(Ne.a)({ form: 'submitEmail' })(function (e) {
                    return l.a.createElement(
                        'form',
                        { className: ln.a.footerForm, onSubmit: e.handleSubmit },
                        l.a.createElement(ve.a, {
                            name: 'submitEmail',
                            type: 'email',
                            component: be,
                            placeholder: 'Your email',
                            validate: [Ce, rn, cn],
                        }),
                        l.a.createElement('button', null, 'Send'),
                        e.errors && 'SUBSCRIBER_FAIL' === e.errors.id ? l.a.createElement(xe, { message: e.errors.message }) : null
                    )
                }),
                on = function (e) {
                    return l.a.createElement(
                        'div',
                        null,
                        l.a.createElement(
                            'footer',
                            { className: 'footer' },
                            l.a.createElement(
                                'section',
                                null,
                                l.a.createElement(
                                    'div',
                                    { className: 'container' },
                                    l.a.createElement('hr', { style: { border: '0.5px solid #111111 !important' } }),
                                    l.a.createElement(
                                        'div',
                                        { className: 'row' },
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center' },
                                            l.a.createElement(
                                                'div',
                                                { className: ln.a.footerItem },
                                                l.a.createElement('p', null, 'Help'),
                                                l.a.createElement(u.b, { to: '/' }, l.a.createElement('li', null, 'How it Works')),
                                                l.a.createElement(u.b, { to: '/' }, l.a.createElement('li', null, 'FAQs')),
                                                l.a.createElement(u.b, { to: '/' }, l.a.createElement('li', null, 'Size Charts'))
                                            )
                                        ),
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-12 col-sm-6 col-lg-2' },
                                            l.a.createElement(
                                                'div',
                                                { className: ln.a.footerItem },
                                                l.a.createElement('p', null, 'About Us'),
                                                l.a.createElement(u.b, { to: '/' }, l.a.createElement('li', null, 'About Dress IT Box')),
                                                l.a.createElement(
                                                    u.b,
                                                    { to: '/' },
                                                    l.a.createElement('li', null, 'Privacy & Cookie Policy')
                                                ),
                                                l.a.createElement(u.b, { to: '/' }, l.a.createElement('li', null, 'Terms & Conditions'))
                                            )
                                        ),
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-12 d-flex flex-column align-items-center col-sm-6 col-lg-3' },
                                            l.a.createElement(
                                                'div',
                                                { className: ln.a.footerItem },
                                                l.a.createElement('p', null, 'Quick Links'),
                                                l.a.createElement(u.b, { to: '/' }, l.a.createElement('li', null, 'Blog')),
                                                l.a.createElement(u.b, { to: '/' }, l.a.createElement('li', null, 'Refer a friend'))
                                            )
                                        ),
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-12 col-sm-6 col-lg-4' },
                                            l.a.createElement(
                                                'div',
                                                { className: ln.a.footerItem },
                                                l.a.createElement(
                                                    'p',
                                                    { className: ln.a.span },
                                                    ' Subscribe and',
                                                    l.a.createElement('span', null, ' get 10% off'),
                                                    ' your first rental'
                                                ),
                                                e.success && 'SUBSCRIBER_SUCCESS' === e.success.id
                                                    ? l.a.createElement(ye, { message: e.success.message })
                                                    : l.a.createElement(sn, {
                                                          errors: e.errors,
                                                          onSubmit: function (a) {
                                                              e.subscribeNewUser(a.submitEmail)
                                                          },
                                                      })
                                            )
                                        )
                                    )
                                )
                            ),
                            l.a.createElement(
                                'section',
                                { className: ln.a.footerBottom },
                                l.a.createElement(
                                    'div',
                                    { className: 'container' },
                                    l.a.createElement(
                                        'div',
                                        { className: 'row' },
                                        l.a.createElement('div', { className: 'col-1' }),
                                        l.a.createElement(
                                            'div',
                                            { className: 'col-11' },
                                            l.a.createElement('p', null, '\xa9 2020 dressitbox.com')
                                        )
                                    )
                                )
                            )
                        )
                    )
                },
                mn = Object(ge.d)(
                    fe,
                    Object(ae.b)(null, {
                        subscribeNewUser: function (e) {
                            return function (a) {
                                w(e)
                                    .then(function (e) {
                                        a(y(e.data.message, e.status, 'SUBSCRIBER_SUCCESS'))
                                        var t = setTimeout(function () {
                                            a({ type: 'CLEAR_SUCCESS' })
                                        }, 3e3)
                                        return function () {
                                            return clearTimeout(t)
                                        }
                                    })
                                    .catch(function (e) {
                                        a(b(e.response.data.message, e.response.status, 'SUBSCRIBER_FAIL'))
                                    })
                            }
                        },
                    })
                )(on),
                un = (function (e) {
                    Object(m.a)(t, e)
                    var a = Object(i.a)(t)
                    function t() {
                        return Object(s.a)(this, t), a.apply(this, arguments)
                    }
                    return (
                        Object(o.a)(t, [
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    this.props.initializeThunkApp()
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    return this.props.isInitialized
                                        ? l.a.createElement(
                                              u.a,
                                              null,
                                              l.a.createElement(
                                                  n.Suspense,
                                                  {
                                                      fallback: l.a.createElement(
                                                          'div',
                                                          null,
                                                          '\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...'
                                                      ),
                                                  },
                                                  l.a.createElement(We, null),
                                                  l.a.createElement(
                                                      d.d,
                                                      null,
                                                      l.a.createElement(d.b, { exact: !0, path: '/', component: $a }),
                                                      l.a.createElement(d.b, { path: '/catalog', component: va }),
                                                      l.a.createElement(d.b, { path: '/details/:id?', component: Yt }),
                                                      l.a.createElement(d.b, { path: '/card', component: ct }),
                                                      l.a.createElement(d.b, { path: '/changepass', component: Re }),
                                                      l.a.createElement(d.b, { path: '/checkout', component: Le }),
                                                      l.a.createElement(d.b, { path: '/feedback/:id?', component: gt }),
                                                      l.a.createElement(d.b, { path: '/help', component: Fe }),
                                                      l.a.createElement(d.b, { path: '/inform', component: Tt }),
                                                      l.a.createElement(d.b, { path: '/orders', component: _t }),
                                                      l.a.createElement(d.b, { path: '/return', component: Ge }),
                                                      l.a.createElement(d.b, { path: '/sign', component: Da }),
                                                      l.a.createElement(d.b, { path: '/forgotpassword', component: Lt }),
                                                      l.a.createElement(d.b, { path: '/forgotchangepass/:token?', component: Bt }),
                                                      l.a.createElement(d.b, { path: '/buy', component: wt }),
                                                      l.a.createElement(d.b, { path: '/order', component: It }),
                                                      l.a.createElement(d.b, { component: tn })
                                                  ),
                                                  l.a.createElement(an, null),
                                                  l.a.createElement(mn, null)
                                              )
                                          )
                                        : l.a.createElement(ea, null)
                                },
                            },
                        ]),
                        t
                    )
                })(l.a.Component),
                dn = Object(ae.b)(
                    function (e) {
                        return { isInitialized: e.app.initialized }
                    },
                    {
                        initializeThunkApp: function () {
                            return function (e) {
                                var a = e(
                                    (function () {
                                        var e = Object(g.a)(
                                            f.a.mark(function e(a, t) {
                                                var n, l
                                                return f.a.wrap(
                                                    function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    return (e.prev = 0), (n = t().auth.token), (e.next = 4), P(n)
                                                                case 4:
                                                                    ;(l = e.sent), a(H(l.data)), (e.next = 11)
                                                                    break
                                                                case 8:
                                                                    ;(e.prev = 8), (e.t0 = e.catch(0)), a({ type: 'AUTH_ERROR' })
                                                                case 11:
                                                                case 'end':
                                                                    return e.stop()
                                                            }
                                                    },
                                                    e,
                                                    null,
                                                    [[0, 8]]
                                                )
                                            })
                                        )
                                        return function (a, t) {
                                            return e.apply(this, arguments)
                                        }
                                    })()
                                )
                                Promise.all([a]).then(function () {
                                    e({ type: 'SET_INITIALIZED' })
                                })
                            }
                        },
                    }
                )(un)
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
            )
            var En = t(156),
                pn = t(143),
                fn = Object(ge.c)({
                    auth: W,
                    goods: ma,
                    form: pn.a,
                    app: ee,
                    card: nt,
                    orders: bt,
                    inform: J,
                    successErrors: _,
                    reviews: pt,
                }),
                gn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ge.d,
                vn = Object(ge.e)(fn, gn(Object(ge.a)(En.a)))
            window.store = vn
            var Nn = vn
            c.a.render(
                l.a.createElement(
                    l.a.StrictMode,
                    null,
                    l.a.createElement(Ut, null, l.a.createElement(ae.a, { store: Nn }, l.a.createElement(dn, null)))
                ),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready
                        .then(function (e) {
                            e.unregister()
                        })
                        .catch(function (e) {
                            console.error(e.message)
                        })
        },
        36: function (e, a, t) {
            e.exports = {
                footerBottom: 'Footer_footerBottom__1Awa9',
                footerItem: 'Footer_footerItem__3vV4O',
                footerForm: 'Footer_footerForm__1SPzY',
                span: 'Footer_span__jxhsM',
            }
        },
        62: function (e, a, t) {},
        95: function (e, a, t) {
            e.exports = { linkBlock: 'HeaderBottom_linkBlock__y_tfU', linkInform: 'HeaderBottom_linkInform__1yhuC' }
        },
    },
    [[183, 1, 2]],
])
//# sourceMappingURL=main.375d4f79.chunk.js.map
