import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

/********************************************/
/**************** ROUTES ********************/
/********************************************/

const routes = [
  // home
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'weTruck - Your Logistics Solution',
      metaTags: [
        {
          name: 'description',
          content: 'Your logistics solution.'
        },
        {
          property: 'og:description',
          content: 'Your logistics solution.'
        }
      ]
    }
  },
  // FAQs
  {
    path: '/cesto-postavljana-pitanja',
    name: "FAQs",
    component: () => import("@/views/FAQs")
  },
  // pretraga ponuda
  {
    path: '/pretraga-ponuda',
    name: "searchOffers",
    component: () => import("@/views/SearchOffers")
  },
  // rezultati pretrage
  {
    path: '/pretraga',
    component: () => import("@/views/SearchResults"),
    props: route => ({ query: route.query.iz,
                       query: route.query.za,
                       query: route.query.d, // duljina
                       query: route.query.s, // sirina
                       query: route.query.v, // visina
                       query: route.query.masa  })
  },
  //pojedinačna novost (objava)
  {
    path: '/blog/:id/:slug',
    name: "post",
    component: () => import("@/views/posts/Post"),
    props: true
  },
  //sve novosti (objava)
  {
    path: '/blog',
    name: "blog",
    component: () => import("@/views/posts/AllPosts"),
  },
  //pojedinačna ponuda
  {
    path: '/ponude/:id/:slug',
    name: "offer",
    component: () => import("@/views/offers/Offer"),
    props: true
  },
  // auth
  {
    path: '/registracija',
    name: 'registracija',
    component: () => import("@/views/auth/Register")
  },
  {
    path: '/prijava',
    name: 'login',
    component: () => import("@/views/auth/Login")
  },
  {
    path: '/resetiranje-lozinke',
    name: 'reset-password',
    component: () => import("@/views/auth/ResetPassword")
  },

/****************************************************/
/************ OGLAŠIVAČI NADZORNA PLOČA *************/
/****************************************************/

// moj-racun
{
  path: '/oglasivaci',
  redirect: '/oglasivaci/moj-racun',
  name: 'advertisers-home',
  component: () => import("@/views/advertisers/DashboardHome"),
  // meta: { requiresAuth: true },
  meta: {
    title: 'Moj weTruck',
    metaTags: [
      {
        name: 'description',
        content: 'Moj weTruck'
      },
      {
        property: 'og:description',
        content: 'Moj weTruck'
      }
    ]
  },
  children: [

    {
      path: 'moj-racun',
      name: 'advertisers-my-account',
      component: () => import("@/views/advertisers/MyAccount"),

    },
    {
      path: 'voznje',
      name: 'advertisers-transports',
      component: () => import("@/views/advertisers/MyTransports"),


    },
    {
      path: 'vozaci',
      name: 'advertisers-drivers',
      component: () => import("@/views/advertisers/MyDrivers"),
    },
    {
      path: 'weTruck-kredit',
      name: 'advertisers-weTruck-credit',
      component: () => import("@/views/advertisers/WeTruckCredit"),
    }
  ]
},


/****************************************************/


  //404 redirect
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import("@/views/NotFound"),
    meta: {
      title: 'Stranica nije pronađena',
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


/********************************************/
/************ NAVIGATION GUARDS *************/
/********************************************/

/*----------- SET META ------------*/

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});


export default router
