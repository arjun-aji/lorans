export interface ServiceItem {
  name: string;
  description: string;
  tag?: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  label: string;
  description: string;
  detailHeading: string;
  detailDescription: string;
  image: string;
  totalServices: string;
  featured: string[];
  iconType: 'scissors' | 'spa' | 'facial' | 'makeup' | 'waxing' | 'hand';
  items: ServiceItem[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'hair-cutting-and-styling',
    slug: 'hair-cutting-and-styling',
    title: 'Hair Cutting & Styling',
    shortTitle: 'Hair',
    label: 'HAIR CUTTING & STYLING',
    description: 'Classic cuts, modern styles and premium finishing for every look.',
    detailHeading: 'Precision Cuts & Timeless Styling',
    detailDescription: 'Classic cuts, modern fades, and custom styling tailored specifically to your facial structure and personal hair type.',
    image: '/assets/fade_haircut.png',
    totalServices: '6+ SERVICES',
    iconType: 'scissors',
    featured: [
      'Gents Haircut',
      'Ladies Haircut',
      'Kids Haircut',
      'Hair Wash',
      'Hair Styling'
    ],
    items: [
      {
        name: 'Gents Haircut',
        description: 'Customized haircut options tailored specifically to your facial structure and hair type.',
      },
      {
        name: 'Ladies Haircut',
        description: 'Layer cuts, bob cuts, and precision trims designed to bring out your natural beauty and hair volume.',
      },
      {
        name: 'Kids Haircut',
        description: 'Comfortable, stylish, and quick haircuts for our younger clients',
      },
      {
        name: 'Hair Wash & Conditioning',
        description: 'Deep cleansing scalp wash with shampoo followed by a conditioning.',
      },
      {
        name: 'Beard Styling & Shaving',
        description: 'Shaping, line cleaning, and trimming ',
      },
    ]
  },
  {
    id: 'hair-treatments',
    slug: 'hair-treatments',
    title: 'Hair Treatments',
    shortTitle: 'Treatments',
    label: 'HAIR TREATMENTS',
    description: 'Treatments that repair, nourish and transform your hair.',
    detailHeading: 'Advanced Care & Restorative Hair Spa',
    detailDescription: 'Professional salon treatments designed to restore moisture, prevent breakage, repair damaged fibers, and refresh the scalp.',
    image: '/assets/hero.jpeg',
    totalServices: '10+ SERVICES',
    iconType: 'spa',
    featured: [
      'Keratin Treatment',
      'Hair Botox',
      'Smoothening',
      'Hair Spa',
      'Hair Coloring',
      'Hair Straightening'
    ],
    items: [
      {
        name: 'Hair Spa',
        description: 'Deep conditioning treatment designed to restore moisture and refresh the scalp with revitalizing massage.',
      },
      {
        name: 'Keratin Treatment',
        description: 'Protein-infused smoothing formula that repairs hair cuticles, eliminates frizz, and adds intense shine.',
      },
      {
        name: 'Hair Botox',
        description: 'Deep restorative anti-aging treatment that fills damaged hair fibers for silky, touchable softness.',
      },
      {
        name: 'Hair Smoothening',
        description: 'Transforms wild, frizzy hair into silky, manageable, smooth strands with long-lasting effect.',
      },
      {
        name: 'Hair Straightening',
        description: 'Permanent hair straightening service engineered for sleek, glossy, bone-straight hair perfection.',
      },
      {
        name: 'Hair Coloring',
        description: 'Grey coverage, global coloring, or custom highlights using scalp-safe, high-end color formulas.',
      },
      {
        name: 'Scalp Detox & Anti-Dandruff',
        description: 'Purifying scalp scrub and steam treatment that soothes irritation, clears buildup, and balances scalp oils.',
      }
    ]
  },
  {
    id: 'facial-treatments',
    slug: 'facial-treatments',
    title: 'Facial Treatments',
    shortTitle: 'Facial',
    label: 'FACIAL TREATMENTS',
    description: 'Glow-boosting facials for healthy, clear and radiant skin.',
    detailHeading: 'Facials for Radiant, Healthy Skin',
    detailDescription: 'Indulge in our signature medical-grade and organic facials formulated to deeply cleanse, exfoliate, and illuminate your complexion.',
    image: '/assets/facial_mask.png',
    totalServices: '100+ TREATMENTS',
    iconType: 'facial',
    featured: [
      'Hydra Facial',
      'Korean Facial',
      'Gold Facial',
      'Whitening Facial',
      '100+ Premium Facials'
    ],
    items: [
      {
        name: 'Hydra Facial',
        description: 'Deep cleansing and intense hydration for a refreshed, glowing complexion using advanced vortex extraction.',
      },
      {
        name: 'Korean Facial',
        description: 'Achieve smooth, clear and luminous glass skin with our signature multi-step Korean botanical facial.',
      },
      {
        name: 'Gold Facial',
        description: '24K gold infused facial that enhances natural glow, boosts collagen, and revitalizes tired, dull skin.',
      },
      {
        name: 'Diamond Facial',
        description: 'Micro-exfoliating diamond therapy that brightens skin tone, reduces fine lines, and delivers a flawless finish.',
      },
      {
        name: 'Platinum Facial',
        description: 'Premium anti-aging facial that restores skin firmness, elasticity, and youthful radiance.',
      },
      {
        name: 'Silver Facial',
        description: 'Soothes sensitivity, purifies pores, detoxifies impurities, and dramatically improves skin texture.',
      },
      {
        name: 'Choco Facial',
        description: 'Nourishing antioxidant chocolate therapy for ultra-soft, smooth, and deeply hydrated skin.',
      },
      {
        name: 'Vitamin C Facial',
        description: 'Potent antioxidant therapy that boosts collagen, evens sun spots, and brings out natural brightness.',
      },
      {
        name: 'Whitening Facial',
        description: 'Targeted spot-reduction treatment that minimizes hyperpigmentation and restores uniform skin tone.',
      },
      {
        name: 'De-Tan Facial',
        description: 'Removes stubborn sun tan, neutralizes environmental damage, and restores your natural skin complexion.',
      },
      {
        name: 'Clean Up',
        description: 'Essential deep pore cleansing to clear dirt, excess sebum, blackheads, and dead skin cells.',
      },
      {
        name: 'Bleaching',
        description: 'Instantly brightens facial hair and skin tone for a fresh, luminous, and uniform appearance.',
      },
      {
        name: '100+ Premium Facial Treatments',
        description: 'Customized clinical skincare rituals tailored specifically to your unique skin type and concerns.',
      }
    ]
  },
  {
    id: 'groom-and-makeup',
    slug: 'groom-and-makeup',
    title: 'Groom & Makeup',
    shortTitle: 'Groom',
    label: 'GROOM & MAKEUP',
    description: 'Elegant makeup and grooming for every special occasion.',
    detailHeading: 'Groom & Event Styling',
    detailDescription: 'Makeup and bespoke grooming experiences crafted specifically for grooms, groomsmen, and special celebrations.',
    image: '/assets/about_interior.png',
    totalServices: '2+ SERVICES',
    iconType: 'makeup',
    featured: [
      'Groom Makeup',
      'Special Occasion Grooming'
    ],
    items: [
      {
        name: 'Groom Makeup',
        description: 'Flawless HD photo-ready skin preparation, subtle tone correction, beard setting, and haircut for your wedding day.',
      },
      {
        name: 'Event & Special Occasion Makeup',
        description: 'Professional makeup application and hair styling for receptions, engagements, galas, and photoshoots.',
      },
      {
        name: 'Groomsmen Package',
        description: 'Group grooming session including haircuts, beard trims, quick facials, and hairstyling for the wedding party.',
      },
      {
        name: 'Pre-Wedding Skin & Hair Care',
        description: 'Multi-session customized skin rejuvenation and hair care regimen leading up to your wedding day.',
      }
    ]
  },
  {
    id: 'hair-waxing',
    slug: 'hair-waxing',
    title: 'Hair Waxing',
    shortTitle: 'Waxing',
    label: 'HAIR WAXING',
    description: 'Smooth, clean and comfortable waxing for all your needs.',
    detailHeading: 'Gentle & Hygienic Waxing Services',
    detailDescription: 'Hygienic, low-discomfort hair removal using premium organic hot and strip waxes for ultra-smooth skin.',
    image: '/assets/beard_grooming.png',
    totalServices: '5+ SERVICES',
    iconType: 'waxing',
    featured: [
      'Full Body Waxing',
      'Half Body Waxing',
      'Arms',
      'Legs',
      'Face Waxing'
    ],
    items: [
      {
        name: 'Full Body Waxing',
        description: 'Complete head-to-toe smooth hair removal using gentle hypoallergenic wax followed by cooling aloe lotion.',
      },
      {
        name: 'Half Body Waxing',
        description: 'Choice of upper or lower body smooth waxing tailored to your preference.',
      },
      {
        name: 'Arms Waxing',
        description: 'Smooth and clean hair removal for full arms including hands and fingers.',
      },
      {
        name: 'Legs Waxing',
        description: 'Thorough hair removal for upper and lower legs leaving skin soft and hair-free.',
      },
      {
        name: 'Face & Eyebrow Waxing',
        description: 'Precision waxing for sideburns, cheekbones, upper lip, chin, and eyebrow shaping.',
      },
      {
        name: 'Chest & Back Waxing',
        description: 'Clean and comfortable hair removal for chest and back area with post-wax skin soothing.',
      }
    ]
  },
  {
    id: 'hand-and-foot-care',
    slug: 'hand-and-foot-care',
    title: 'Hand & Foot Care',
    shortTitle: 'Care',
    label: 'HAND & FOOT CARE',
    description: 'Relaxing care for soft, refreshed hands and feet.',
    detailHeading: 'Relaxing Manicure & Pedicure Rituals',
    detailDescription: 'Rejuvenating spa care for your hands and feet featuring soothing warm soaks, exfoliation, nail grooming, and tension-relieving massages.',
    image: '/assets/1.png',
    totalServices: '2+ SERVICES',
    iconType: 'hand',
    featured: [
      'Manicure',
      'Pedicure'
    ],
    items: [
      {
        name: 'Manicure',
        description: 'Exfoliating hand scrub, nail trimming, shaping, cuticle nourishment, and a relaxing hand massage.',
      },
      {
        name: 'Pedicure',
        description: 'Revitalizing foot soak, dead skin exfoliation, heel smoothing, nail care, and deep calf & foot massage.',
      }
    ]
  }
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  const normalized = slug.toLowerCase();
  return SERVICE_CATEGORIES.find(
    c => c.slug.toLowerCase() === normalized ||
      c.id.toLowerCase() === normalized ||
      c.slug.replace(/-/g, '') === normalized.replace(/-/g, '')
  );
}
