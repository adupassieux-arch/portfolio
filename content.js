/* =============================================================
   CONTENU DU SITE — c'est le seul fichier à modifier au quotidien
   -------------------------------------------------------------
   • Ajouter un projet : copiez un bloc { ... } dans PROJECTS,
     changez slug / title / text / images, et placez les images
     dans le dossier images/<slug>/.
   • L'ordre des blocs = l'ordre d'affichage dans la galerie.
   • Dans "text", chaque ligne = un paragraphe.
       "## Titre"      → intertitre
       "**gras**"      → gras        "*italique*" → italique
       "[texte](url)"  → lien
   • "web" = adresse de secours de l'image chez Adobe ; vous
     pourrez la supprimer une fois les images téléchargées.
   ============================================================= */

window.SITE = {
  "name": "Aurélie Dupassieux",
  "description": "Interior design, art direction and strategy & markets — Aurélie Dupassieux, Paris.",
  "galleries": [
    {
      "id": "strategy",
      "label": "Strategy & Markets",
      "page": "strategy.html"
    },
    {
      "id": "design",
      "label": "Design",
      "page": "index.html"
    }
  ],
  "mainSite": "https://adupassieux-arch.github.io/",
  "contactUrl": "https://adupassieux-arch.github.io/#contact",
  "contactEmail": "",
  "contactIntro": "For projects, collaborations or enquiries, please get in touch."
};

window.PROJECTS = [
  {
    "slug": "a-moroccan-suite-in-soft-light",
    "gallery": "design",
    "title": "A Moroccan Suite in Soft Light",
    "year": "2026",
    "cover": {
      "src": "images/a-moroccan-suite-in-soft-light/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/3127be9d-3334-489f-8a1d-334bc0900545_carw_16x9x5120.jpg?h=cb4ec6d1370ec4ba6c23bab0d8900d5d"
    },
    "text": [
      "Riad Nour — \"light\" in Arabic — reinterprets the traditional Moroccan suite through warm minimalism. Natural stone, washed linen, hand-woven wool and chiselled brass compose a soft, mineral palette, extended by a travertine spa."
    ],
    "images": [
      {
        "src": "images/a-moroccan-suite-in-soft-light/01.png",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/5bb62a2a-0bae-4ebf-8dba-7790446177e6_rw_1920.png?h=12cf4a330a84ae42f498cc49691a7f08"
      },
      {
        "src": "images/a-moroccan-suite-in-soft-light/02.png",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/723e8052-8d1f-461a-ac13-a062b9b970ca_rw_1920.png?h=d8e47306caae4b7d3b75aa29dcdbe568"
      },
      {
        "src": "images/a-moroccan-suite-in-soft-light/03.png",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/e752d3df-4641-41af-90bd-a9b1cd7dfa71_rw_1920.png?h=00a38bdbb8a752fcd50c1a52e0b28228"
      },
      {
        "src": "images/a-moroccan-suite-in-soft-light/04.png",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/7e26bec5-96c2-485a-925b-f18bee191232_rw_1920.png?h=c0f703206071816d6bc692ac8d3034cf"
      },
      {
        "src": "images/a-moroccan-suite-in-soft-light/05.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/9d05489c-7c23-4e45-b947-6ca2d071aeb8_rw_1200.jpg?h=368d361bb40671a78a9bba5d1954b65b"
      }
    ]
  },
  {
    "slug": "nocturne-interior",
    "gallery": "design",
    "title": "Nocturne Interior",
    "year": "2026",
    "cover": {
      "src": "images/nocturne-interior/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/7e0424a6-abab-4545-a4ee-7ab0f5c50f13_carw_16x9x5120.jpg?h=e12d28565a3885486c1ae62e8b0852b0"
    },
    "text": [
      "Nocturne Interior explores the transformation of an existing living space into a theatrical and immersive environment. Deep blue tones, shadow, antique materials and curated objects create an interior suspended between memory and imagination."
    ],
    "images": [
      {
        "src": "images/nocturne-interior/01.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/972dc522-d2ed-4b08-942f-7cdb0f0fd22a_rw_1200.jpg?h=9a5b6b3d3a644810046710e38b7572ff"
      },
      {
        "src": "images/nocturne-interior/02.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/c91277a1-0ea3-4091-9981-78c474d3ee10_rw_1200.jpg?h=586486691a0f9d6b8a3bcfd2073601f0"
      },
      {
        "src": "images/nocturne-interior/03.png",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/b9c92a96-386d-48d2-aaa8-ef853a46473a_rw_1920.png?h=98a8312d76d0e28bb164541fbd1dce53"
      }
    ]
  },
  {
    "slug": "upper-east-side-residences-contemporary-architecture",
    "gallery": "design",
    "title": "Upper East Side Residences — Contemporary Architecture",
    "year": "2026",
    "cover": {
      "src": "images/upper-east-side-residences-contemporary-architecture/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/0c881894-d5ed-4641-8713-3193d29e2c7a_carw_16x9x5120.jpg?h=ac7fe8aee56094e9b70713c368e99859"
    },
    "text": [
      "This project explores the design of a luxury residential building in New York City, where classical architecture meets a contemporary sensibility. The brick façade, punctuated by three tiers of arched windows, draws on New York’s historic architectural language while introducing fluted detailing and a distinctly modern vertical composition.",
      "Inside, the living spaces are shaped by natural light and generous ceiling heights. The main living room, framed by soaring arched windows, opens onto a sweeping view of the city skyline — a constant dialogue between refined interiors and the pulse of the city beyond. The kitchen, open and light-filled, pairs pale oak, veined marble, and organic furniture pieces for a warm, timeless atmosphere.",
      "The rooftop terrace extends the apartment outward, conceived as a suspended living room above Manhattan — dense greenery set against an open view of the city’s iconic towers.",
      "Together, these spaces bring architectural prestige, residential comfort, and an aesthetic where New York’s heritage meets a contemporary vocabulary."
    ],
    "images": [
      {
        "src": "images/upper-east-side-residences-contemporary-architecture/01.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/c0d5f690-3a52-45a9-9821-2566c8b652f5_rw_1200.jpg?h=bd8412f328568e8ca49c85444c5c2769"
      },
      {
        "src": "images/upper-east-side-residences-contemporary-architecture/02.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/a0bc5ccb-3587-4f08-b55e-9d6db0b7d5b9_rw_1200.jpg?h=d8496414befa17503892153436f5b582"
      },
      {
        "src": "images/upper-east-side-residences-contemporary-architecture/03.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/18fb2b51-cf86-4665-891b-9a6d65fa7690_rw_1200.jpg?h=b9ba772a33c777a322931457b38c054d"
      },
      {
        "src": "images/upper-east-side-residences-contemporary-architecture/04.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/f4425e47-ba76-4a70-bf33-e388d8da4f51_rw_1200.jpg?h=528ae4cafd089a9e5a1e47dfd46ec40e"
      }
    ]
  },
  {
    "slug": "richer-colors-moody-lighting",
    "gallery": "design",
    "title": "Richer Colors, Moody Lighting",
    "year": "2026",
    "cover": {
      "src": "images/richer-colors-moody-lighting/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/8d7094a3-4192-4ca3-aa86-b0180d3b7ef2_carw_16x9x5120.jpg?h=f50a6cdcb053e21b12078781e2b3f387"
    },
    "text": [
      "This project explores the tension between density and light — a rich, sophisticated palette where dark wood, brass, and stone speak to one another across every room. The goal was a timeless cocoon: deep browns, burgundy, and touches of gold and lacquer, warmed by carefully framed natural light."
    ],
    "images": [
      {
        "src": "images/richer-colors-moody-lighting/01.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/3ad487e9-98dc-451b-9f80-56ed809889b7_rw_1200.jpg?h=0b2f42e469a8d81b9033dd956608320c"
      },
      {
        "src": "images/richer-colors-moody-lighting/02.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/ddb83eb9-de1b-4a62-a1bf-61860312d54f_rw_1200.jpg?h=29338a8b91b0e0013a0a351ace90daf5"
      },
      {
        "src": "images/richer-colors-moody-lighting/03.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/124cf2f8-fb57-4320-a081-cf9c58e0d484_rw_1200.jpg?h=50e3295b53ab8c3f7ebce5477c581655"
      },
      {
        "src": "images/richer-colors-moody-lighting/04.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/76d7a45e-55a2-41b2-992f-e873c6f16a26_rw_1200.jpg?h=89d9a7680d189425a0d93caa41518c12"
      }
    ]
  },
  {
    "slug": "harmonie-zen",
    "gallery": "design",
    "title": "Harmonie Zen",
    "year": "2026",
    "cover": {
      "src": "images/harmonie-zen/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/1d83ad86-b7b8-40f8-8c8b-757ccad73cc7_carw_16x9x5120.jpg?h=316890448f246b167115a88be31be16a"
    },
    "text": [
      "An interior design concept exploring the balance between a deep, expressive workspace and a quiet, light-filled resting environment."
    ],
    "images": [
      {
        "src": "images/harmonie-zen/01.png",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/7533ae87-0d98-405f-9181-e838536586fe_rw_1920.png?h=34b665bf7cbb2439fbb3c875e54080dd"
      },
      {
        "src": "images/harmonie-zen/02.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/1393ce18-6c2a-4597-a7d9-52f6e8f7f516_rw_600.jpg?h=0c5bfee71e34b70db48e5d462064feb7"
      },
      {
        "src": "images/harmonie-zen/03.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/2c335f0f-de97-4d4b-a784-b700236c958b_rw_1200.jpg?h=e74985aae9feb262bdad8ecff23b7e80"
      },
      {
        "src": "images/harmonie-zen/04.png",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/68d00821-7503-4e05-9fd8-62e4122dc30f_rw_1200.png?h=fe49ab50946638d874e267285bc359cc"
      }
    ]
  },
  {
    "slug": "floral-artwork-timeless-elegant-study",
    "gallery": "design",
    "title": "Floral Artwork - Timeless elegant study",
    "year": "2026",
    "cover": {
      "src": "images/floral-artwork-timeless-elegant-study/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/5b4edf07-c89b-4860-a4df-30daf10b78ab_carw_16x9x5120.jpg?h=fe8e4616ccc45b47c2380ecb67d6c096"
    },
    "text": [
      "Deep red meets classic architecture. A single, expressive floral painting sets the tone — bordeaux velvet, garnet glass, lacquered wood, and crisp white moldings pull the rest of the room into orbit."
    ],
    "images": [
      {
        "src": "images/floral-artwork-timeless-elegant-study/01.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/e0a58310-fe9a-4ee8-a78b-a784424b7841_rw_1200.jpg?h=d7765255faee82f0a092a5c9bd3e7d98"
      },
      {
        "src": "images/floral-artwork-timeless-elegant-study/02.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/97934d4c-34f9-4b44-afee-d422968a133b_rw_1200.jpg?h=6145fd3324b0eb64e69e9242925dd1eb"
      },
      {
        "src": "images/floral-artwork-timeless-elegant-study/03.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/40a66ba6-bc71-4308-8dc1-e7877928cede_rw_1200.jpg?h=24bc9797b04d832b0e1ed661b6648b0c"
      },
      {
        "src": "images/floral-artwork-timeless-elegant-study/04.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/be6bca9d-4a15-40f5-b649-28da8b5a3b71_rw_600.jpg?h=2e7104b634d305a22d7e6170306b39ef"
      },
      {
        "src": "images/floral-artwork-timeless-elegant-study/05.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/efca5e2a-948c-4f31-a2a6-aadd13ec29a7_rw_600.jpg?h=cbd0c3be0ad735b0cf0b619f05a2a2c8"
      }
    ]
  },
  {
    "slug": "mediterranean-silence-an-artists-retreat",
    "gallery": "design",
    "title": "Mediterranean Silence - An artist’s retreat",
    "year": "2026",
    "cover": {
      "src": "images/mediterranean-silence-an-artists-retreat/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/0f75dba3-5468-4a42-9cbf-f6204531dfda_carw_16x9x5120.jpg?h=4e9bbeeafa5443e291e7434fa903d052"
    },
    "text": [
      "## Mediterranean × Japanese × Contemporary Art",
      "The project deliberately brings together three visual languages:",
      "**Mediterranean architecture** — White, mineral, luminous, organic and connected to the sea.",
      "**Japanese simplicity** — Low furniture, tatami, empty space, natural materials and contemplation.",
      "**Contemporary art** — Photography, sculptural objects, graphic contrasts and carefully composed visual frames.",
      "The combination creates something quieter than a conventional luxury interior. It is a form of quiet luxury — based not on abundance, but on atmosphere.",
      "## An Artist’s Atelier",
      "The room is intentionally designed to feel less like a conventional living room and more like an artist’s studio.",
      "Large-format photographs of the sea become visual windows. Their pale blue, white and sand tones extend the architecture beyond the physical walls and create the impression of an ever-present Mediterranean horizon.",
      "The large rectangular floor mirror, with its intricate silver-grey frame, becomes an object in its own right — somewhere between furniture, sculpture and artwork.",
      "Nothing is excessively decorative. Each object has space around it. The atmosphere is created through composition, texture, light and silence.",
      "## Natural Materials",
      "The tactile dimension is essential to the project.",
      "Jute curtains introduce an earthy, organic texture while a white sheer curtain filters the light from behind them. The contrast between rough woven fibres and delicate translucent fabric creates a dialogue between raw and refined.",
      "The floor mattress, placed directly on a tatami, reinforces the Japanese influence of simplicity and low living.",
      "Silk pale-pink sheets bring softness and sensuality, while the white duvet with restrained black graphic details introduces a contemporary artistic accent."
    ],
    "images": [
      {
        "src": "images/mediterranean-silence-an-artists-retreat/01.png",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/4e0e08e1-ea27-4888-be42-7ef194e445e4_rw_1200.png?h=529ac4d876c48405ec0b032300c87858"
      },
      {
        "src": "images/mediterranean-silence-an-artists-retreat/02.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/5a9b987f-4f76-4a37-add9-79df5b5e2dc8_rw_1920.jpg?h=243603e0494cf23a1263ef8fc16d9ff2"
      },
      {
        "src": "images/mediterranean-silence-an-artists-retreat/03.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/ee7246b3-465d-4d23-b3e7-a7a7477a3fa5_rw_1200.jpg?h=2ca067d62b9aaa07871d348da013ced0"
      }
    ]
  },
  {
    "slug": "calacatta-noir-a-modern-marble-bathroom",
    "gallery": "design",
    "title": "Calacatta Noir — A Modern Marble Bathroom",
    "year": "2026",
    "cover": {
      "src": "images/calacatta-noir-a-modern-marble-bathroom/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/c31425a2-32ef-4800-97a5-133c006f7d4d_carw_16x9x5120.jpg?h=dc73d8f42e9e6d0aed74dbefc5c30cca"
    },
    "text": [],
    "images": [
      {
        "src": "images/calacatta-noir-a-modern-marble-bathroom/01.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/157c4e43-b810-4282-ab64-d033e4982037_rw_1200.jpg?h=49f8aa9812ec6559bda73ebf7a47c642"
      },
      {
        "src": "images/calacatta-noir-a-modern-marble-bathroom/02.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/44943a87-f74b-4a0c-838f-187d17aee89e_rw_1200.jpg?h=200fa2af5001337b15342e8512838c5c"
      },
      {
        "src": "images/calacatta-noir-a-modern-marble-bathroom/03.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/88ca537c-4b03-456f-a843-7da54c9af29a_rw_1200.jpg?h=f63e0e9805d304187a77136f36ab2f47"
      },
      {
        "src": "images/calacatta-noir-a-modern-marble-bathroom/04.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/9a50f9b8-0936-4e70-861a-330877685017_rw_1200.jpg?h=f59739b7030b546ba08bb3863f29b038"
      }
    ]
  },
  {
    "slug": "burgundy-private-office-dark-luxury-timeless-design",
    "gallery": "design",
    "title": "Burgundy Private Office - Dark luxury & Timeless Design",
    "year": "2026",
    "cover": {
      "src": "images/burgundy-private-office-dark-luxury-timeless-design/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/8570f3b3-56c2-448a-ac4c-b93bfa5f187e_carw_16x9x5120.jpg?h=a68bdc341370eb4558cc9160104f3b1e"
    },
    "text": [],
    "images": [
      {
        "src": "images/burgundy-private-office-dark-luxury-timeless-design/01.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/986f7781-47ac-4f6b-bfa1-0170b75ef097_rw_1200.jpg?h=834a2d8cdcb628394d546438efd75dc4"
      },
      {
        "src": "images/burgundy-private-office-dark-luxury-timeless-design/02.png",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/341ef7d2-411b-405b-babb-462453940199_rw_1920.png?h=7c095567027d54b4e32bc6f9af6797bc"
      },
      {
        "src": "images/burgundy-private-office-dark-luxury-timeless-design/03.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/d56a2852-22ed-4f92-8a19-40c4ba8c1f32_rw_1200.jpg?h=2541574893ed8fd2d826c6b8ae31890e"
      }
    ]
  },
  {
    "slug": "china-tradition-harmony-partnership",
    "gallery": "strategy",
    "title": "China : Tradition, Harmony, Partnership",
    "year": "2026",
    "cover": {
      "src": "images/china-tradition-harmony-partnership/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/a092cc3f-bfc5-4856-a91f-5279b3966dd0_carw_16x9x5120.jpg?h=5a668e466dfa29374738193e81455f0b"
    },
    "text": [
      "This moodboard explores a visual language for AD International Consulting’s positioning at the intersection of Chinese heritage and Western business rigor. Rather than leaning on tourist iconography, the direction draws from craft and material culture — lacquer, jade, blue-and-white porcelain, calligraphy, imperial red — to build a vocabulary that feels authoritative in a cross-border negotiation room, not decorative on a travel brochure.",
      "The concept rests on three pillars: Tradition (motifs, calligraphy, and noble materials as visual bedrock), Harmony (the 和 seal as a recurring anchor, balancing Chinese warmth with Western restraint), and Partnership (an image built for durable business relationships rather than surface-level cultural reference).",
      "The palette is dominated by lacquered burgundy and ink black, with imperial gold used sparingly as an accent and natural linen for breathing room — roughly 60% ink, 25% burgundy and linen, 15% gold. Typography pairs a serif display face for titles and seals with a clean sans-serif for body copy and working documents, keeping the system legible across formats.",
      "The board closes with a set of early applications — business card, presentation folder, and letterhead — showing how the concept translates from inspiration to working brand tools without tipping into pastiche.",
      "*Direction artistique · AD International Consulting · Paris*"
    ],
    "images": [
      {
        "src": "images/china-tradition-harmony-partnership/01.png",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/c2f973d8-e47f-44ab-b661-1c3e89670efb_rw_1920.png?h=928d4c293feea926922bd855edb4d11c"
      }
    ]
  },
  {
    "slug": "onyx-project",
    "gallery": "strategy",
    "title": "ONYX Project",
    "year": "2026",
    "cover": {
      "src": "images/onyx-project/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/2c0d4107-79b1-4494-b028-fa6b2e865ef4_carw_16x9x5120.jpg?h=fc1e065f0adfed844f82acfb821484c6"
    },
    "text": [
      "## Where legacy finance meets tokenized markets",
      "Project Onyx is a brand and visual-direction exploration for a legacy financial institution entering tokenized real-world assets. The moodboard bridges two eras: the marble-and-top-hat gravitas of 19th-century banking, and the glass, light, and network imagery of real-time digital markets. A navy and gold palette, paired with serif headlines and clean sans-serif body type, sets a tone that reads as continuity rather than disruption — precision and scale, built on inherited trust.",
      "**Audience** — Institutional stakeholders evaluating digital-asset infrastructure.",
      "**Objective** — A visual language that pairs 150 years of banking gravitas with real-time market velocity.",
      "**Mood** — Nocturnal, architectural, precise trust rendered in glass, steel and gold light.",
      "Client : JP Morgan"
    ],
    "images": [
      {
        "src": "images/onyx-project/01.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/d7804114-7385-471e-8b66-0c56f7daa086_rw_1200.jpg?h=6094f91df3c030fc2276b85056a07951"
      },
      {
        "src": "images/onyx-project/02.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/6c6bf3a8-be4d-4f09-9c21-820edeeae4b1_rw_1200.jpg?h=ddb69982fb2d5356e1c2df01ae2454ca"
      },
      {
        "src": "images/onyx-project/03.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/88c1181e-4216-4ebc-8ff1-7b667d4c3c39_rw_1200.jpg?h=860deaf5dc6904d27ca4e0b70b8424e8"
      },
      {
        "src": "images/onyx-project/04.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/9926ca76-99e7-4557-b615-28a145b6b500_rw_1200.jpg?h=348d14628202753628fcc152c5e2f6b8"
      }
    ]
  },
  {
    "slug": "crude-oil-why-buy-now",
    "gallery": "strategy",
    "title": "Crude oil - Why Buy Now ?",
    "year": "2026",
    "cover": {
      "src": "images/crude-oil-why-buy-now/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/836336fc-2727-4e09-81fe-8a29917eff84_carw_16x9x5120.jpg?h=8143f5ff013ec90cb79d71c6e34529dc"
    },
    "text": [
      "In an increasingly unstable geopolitical environment, physical crude oil remains one of the few strategic assets whose value strengthens under global pressure.",
      "This briefing outlines the current macroeconomic and geopolitical dynamics shaping the oil market in 2026 - from supply disruptions and regional instability to structural inflationary pressures and tightening global production capacity.",
      "For qualified buyers and institutional counterparts, timing, security of supply, and pricing structure have become critical strategic considerations."
    ],
    "images": [
      {
        "src": "images/crude-oil-why-buy-now/01.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/b1c1fb17-102a-44ee-9f48-884a9137ad8b_rw_1200.jpg?h=365054e39a7479b3df483949057ae463"
      }
    ]
  },
  {
    "slug": "damir-international-usa",
    "gallery": "strategy",
    "title": "Damir International USA",
    "year": "2026",
    "cover": {
      "src": "images/damir-international-usa/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/d700a213-10ea-49c1-a304-738177ae302a_carw_16x9x5120.jpg?h=4788ccedb5de9648c28e78cb0b44c84e"
    },
    "text": [],
    "images": [
      {
        "src": "images/damir-international-usa/01.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/ce1c0475-0617-430e-8736-577061812f4a_rw_1200.jpg?h=bd1d1e683f00fe47e7f27ea1943ed95a"
      },
      {
        "src": "images/damir-international-usa/02.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/5ad7fd5a-4980-4e29-a1c9-e1ac3b80cf23_rw_1200.jpg?h=b2fae07478626e53d75b6ba2471d43af"
      },
      {
        "src": "images/damir-international-usa/03.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/240ec280-b109-4975-9a83-1c06c2ff3b6f_rw_1200.jpg?h=572486495ef311a0cffb1dd5d73803bf"
      },
      {
        "src": "images/damir-international-usa/04.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/7bc7405d-3d42-412a-9ce3-15afdf32b22b_rw_600.jpg?h=642cf1034468b34bb24861890c9b8e62"
      },
      {
        "src": "images/damir-international-usa/05.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/8a4698eb-5aa4-4722-935c-8a8cc2776a9b_rw_1200.jpg?h=d3b11815bf916feb2034699b3ff04646"
      },
      {
        "src": "images/damir-international-usa/06.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/a9956028-bec4-4da5-b45d-a802522765ea_rw_1200.jpg?h=00a1144eacc030cae235ff22167401f3"
      },
      {
        "src": "images/damir-international-usa/07.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/920c534c-eb88-454f-b90f-40d5350b769e_rw_1200.jpg?h=b55b5155b2a8651ab694c43d8e524030"
      },
      {
        "src": "images/damir-international-usa/08.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/c197a9f2-3a96-430e-a039-98d4d0ebc9d8_rw_1200.jpg?h=127f5fa466a9ae274841290ef080b4ae"
      },
      {
        "src": "images/damir-international-usa/09.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/399be5f0-e30b-4f1a-ab66-2fb44ebfa514_rw_1920.jpg?h=b3791b3547ac5c6f8c3f1ed49cb58008"
      }
    ]
  },
  {
    "slug": "tokenization-capital-markets",
    "gallery": "strategy",
    "title": "Tokenization & Capital Markets",
    "year": "2026",
    "cover": {
      "src": "images/tokenization-capital-markets/cover.jpg",
      "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/48f766f6-5d5f-4c48-989c-91e6924247aa_carw_16x9x5120.jpg?h=a496b46f86a240fc2b4a0041b8a28358"
    },
    "text": [
      "## Institutional Digital Liquidity Access — Private Mandate",
      "Damir International LLC has validated a proprietary framework for institutional digital liquidity within a permissioned blockchain environment.",
      "The structure integrates compliant onboarding, asset-backed tokenization, and full alignment with regulated banking systems.",
      "Engagement is strictly limited to a select number of strategic counterparties.",
      "[Further reading: JPMorgan’s tokenized money market fund and the future of real-world asset tokenisation](https://www.blockdeed.com/journal/jpmorgan-s-tokenized-money-market-fund-and-the-future-of-real-world-asset-tokenisation)"
    ],
    "images": [
      {
        "src": "images/tokenization-capital-markets/01.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/09f6b583-eb65-42f0-b93a-3cfdaf8978ee_rw_1920.jpg?h=778175112cf709c95e3be1a8717c1296"
      },
      {
        "src": "images/tokenization-capital-markets/02.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/a62324a9-8cbc-43fa-9100-69a8a45e6824_rw_1200.jpg?h=3e7858e927ce5dbebd8c9aa22968486c"
      },
      {
        "src": "images/tokenization-capital-markets/03.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/768ef799-996f-4eed-aac5-fa432788dd61_rw_1200.jpg?h=fdd3d888d5d221032c3404fa70ed6282"
      },
      {
        "src": "images/tokenization-capital-markets/04.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/a1ed361e-86e0-44e2-983d-5812ac3d0bf6_rw_1200.jpg?h=1de040ee26075e8c148ff6972ad8a4a6"
      },
      {
        "src": "images/tokenization-capital-markets/05.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/5bbb6b79-a9a8-4655-9aff-2ba4c839db18_rw_1200.jpg?h=51df254741e49f0d0f04f55b4a1a3f9d"
      },
      {
        "src": "images/tokenization-capital-markets/06.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/b9f9058d-dba7-4ad0-9bbb-2f95b24c404f_rw_1200.jpg?h=f28707d6300920a7ec371d2c1af3b694"
      },
      {
        "src": "images/tokenization-capital-markets/07.jpg",
        "web": "https://cdn.myportfolio.com/8591b32d-3423-4616-8ca6-1beffee9ecfa/81af2962-7ab0-4f8a-afb1-7c0772ee4587_rw_1200.jpg?h=e80ddf8cede25abb34b50b62d7c1f728"
      }
    ]
  }
];
