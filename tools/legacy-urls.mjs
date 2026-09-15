/**
 * THE FIFTEEN URLS THE OLD SITE PUBLISHED.
 *
 * cpfmasonry.com is being rebuilt in place, so every one of these has to keep
 * resolving. They carry twenty years of indexing and inbound links, and the
 * north star for this rebuild is to change nothing about the URL structure
 * that we do not have to.
 *
 * `built: false` means the page does not exist in this build YET. The audit
 * reports those loudly every run so they cannot be quietly forgotten, and
 * fails outright if a page marked `built: true` ever disappears — that is a
 * regression, and the expensive kind.
 *
 * Flip a flag to true in the same commit that adds the page. Before cutover,
 * every entry must be true.
 *
 * Source: REBUILD-PLAN-v2.md section 3 / _docs/cpfmasonry-SITE-CAPTURE.md.
 */
export const LEGACY_URLS = [
  { url: '/',                                                          title: 'Home',                            built: true  },
  { url: '/services/',                                                 title: 'Services',                        built: true  },
  { url: '/custom-concrete/',                                          title: 'Custom Concrete',                 built: true  },
  { url: '/custom-concrete-driveways/',                                title: 'Custom Concrete Driveways',       built: true  },
  { url: '/concrete-countertops/',                                     title: 'Concrete Countertops',            built: true  },
  { url: '/masonry/',                                                  title: 'Masonry',                         built: true  },
  { url: '/stonework/',                                                title: 'Stonework',                       built: true  },
  { url: '/fireplaces-and-barbecues/',                                 title: 'Outdoor Kitchens and Fireplaces', built: true  },
  { url: '/grading-and-excavation/',                                   title: 'Grading and Excavation',          built: true  },
  { url: '/featured-work/',                                            title: 'Featured Work',                   built: true  },
  { url: '/featured-project-dos-vientos-villa/',                       title: 'Dos Vientos Villa',               built: true  },
  { url: '/featured-project-triunfo-ymca-baseball-fields/',            title: 'Triunfo YMCA',                    built: true  },
  { url: '/featured-project-robertson-family-field-viewpoint-school/', title: 'Viewpoint School',                built: true  },
  { url: '/about-us/',                                                 title: 'About Us',                        built: true  },
  { url: '/contact-us/',                                               title: 'Contact Us',                      built: true  },
];
