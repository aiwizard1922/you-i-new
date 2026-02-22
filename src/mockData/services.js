// All prices are onwards. GST 5% applicable.

export const services = {
  threading: {
    title: "Threading",
    description: "Gentle hair removal that protects skin's natural collagen. Removes hair from root for results lasting 4-8 weeks.",
    subcategories: [
      {
        name: "Threading Services",
        items: [
          { name: "Eye Brow", price: "₹50*" },
          { name: "Upper Lip", price: "₹30*" },
          { name: "Chin", price: "₹30*" },
          { name: "Eyebrow + Upper Lip + Chin", price: "₹150*" },
          { name: "Forehead", price: "₹50*" },
          { name: "Full Face", price: "₹350*" }
        ]
      }
    ]
  },

  hair: {
    title: "Hair Services",
    description: "Expert cuts, styling, colour, and treatments",
    subcategories: [
      {
        name: "Hair Cut & Styling",
        items: [
          { name: "Hair Cut", price: "₹800*" },
          { name: "Child Haircut", price: "₹400*" },
          { name: "Shampoo + Blow Dry", price: "₹500*" },
          { name: "Shampoo", price: "₹250*" },
          { name: "Ironing", price: "₹1200*" },
          { name: "Tongs", price: "₹1200*" },
          { name: "Up Do's", price: "₹1200*" },
          { name: "Hair Cut & Styling with Luxe Care", price: "₹800* + ₹400*" },
          { name: "Hair Cut & Styling with Premium Care", price: "₹800* + ₹200*" }
        ]
      },
      {
        name: "Hair Colour",
        items: [
          { name: "Root Touch Up", price: "₹1300*" },
          { name: "Global", price: "₹3400*" },
          { name: "Inoa Roots", price: "₹1600*" },
          { name: "Inoa Global", price: "₹3700*" },
          { name: "High Lights", price: "₹4000*" }
        ]
      },
      {
        name: "Hair Texture",
        items: [
          { name: "Rebonding / Straightening", price: "₹650*", description: "Long-lasting treatment for straight and smooth hair" }
        ]
      },
      {
        name: "Hair Spa",
        items: [
          { name: "Hair Spa", price: "₹1200*" },
          { name: "Deep Nourishing Hair Spa - Absolut Repair", price: "₹2000*" }
        ]
      }
    ]
  },

  cleanUp: {
    title: "Clean Up & Peel Off Masks",
    description: "Deep cleansing treatments for radiant, healthy skin",
    subcategories: [
      {
        name: "Essential Clean Up",
        items: [
          { name: "Essential Clean Up - For All Skin Types", price: "₹650*" },
          { name: "Acne Clean Up", price: "₹800*", description: "Deep clean up focused on whiteheads and blackheads" },
          { name: "Whitening Clean Up (with addon peel off mask)", price: "₹1150*" }
        ]
      },
      {
        name: "Premium Clean Up",
        items: [
          { name: "Organic Clean Up - Dry Skin", price: "₹950*", description: "Deeply cleanses, Dead Sea minerals moisturise and hydrate" },
          { name: "Organic Clean Up - Combination/Acne Prone Skin", price: "₹950*", description: "Clarifies, controls acne inflammation with salicylic acid" }
        ]
      },
      {
        name: "Add on Peel Off Mask",
        items: [
          { name: "Whitening and Tan Removal", price: "₹500*", description: "Smoother, fairer, brighter complexion, removes tan" },
          { name: "Vitamin C - For Dry & Dull Skin", price: "₹500*", description: "Boosts radiance, reveals brighter youthful skin" },
          { name: "Activated Charcoal - Oily/Open Pores", price: "₹500*", description: "Absorbs impurities, unclogs pores, detoxifies" },
          { name: "Anti Ageing - Ageing/Deep Pigmentation", price: "₹500*", description: "Vitamin A & B3, reduces fine lines and pigmentation" }
        ]
      }
    ]
  },

  facials: {
    title: "Premium Facials",
    description: "Luxury facial treatments for radiant, glowing skin",
    subcategories: [
      {
        name: "Dead Sea Mineral Facials",
        description: "For radiant instant glow - exfoliates, clears pores, nourishes, reduces fine lines",
        items: [
          { name: "Dead Sea Mineral Facial - Dry Skin", price: "₹2500*" },
          { name: "Dead Sea Mineral Facial - Oily/Acne Prone", price: "₹2500*" },
          { name: "Dead Sea Mineral Facial - Anti Ageing", price: "₹2500*" }
        ]
      },
      {
        name: "Gold Moroccan Vitamin C Facials",
        description: "Brightening with skin lightening - Vitamin C + Argan oil",
        items: [
          { name: "Gold Moroccan Facial - Extreme Dry Skin", price: "₹2800*" },
          { name: "Gold Moroccan Facial - Anti Ageing", price: "₹2800*" }
        ]
      },
      {
        name: "Fruit Marmalade Facial",
        description: "Natural enzymes for even skin tone and better texture",
        items: [
          { name: "Advanced Bearberry Fruit Facial - Whitening", price: "₹3200*" },
          { name: "Advanced Pineapple Fruit Facial - Sensitive/Acne Prone", price: "₹3200*" },
          { name: "Advanced Papaya Fruit Facial - Pigmentation/Blemished", price: "₹3200*" },
          { name: "Advanced Kiwi Fruit Facial - Anti Ageing", price: "₹3200*" },
          { name: "Advanced Vino Grapes Fruit Facial - Radiance", price: "₹3200*" }
        ]
      }
    ]
  },

  facePeel: {
    title: "Face Peel Program",
    description: "Brillare Professional - Natural peel-based treatments",
    subcategories: [
      {
        name: "Face Peel Program",
        items: [
          { name: "Oil Away Peel Program", price: "₹2800*", description: "For oily/acne-prone skin - tea tree, pistachio, wintergreen" },
          { name: "Brightening Peel Program", price: "₹2800*", description: "Caviar lime, papaya, orange - reduces pigmentation" },
          { name: "Age Revival Peel Program", price: "₹3000*", description: "Rose, lotus, tree fern - reduces wrinkles, deep hydration" }
        ]
      }
    ]
  },

  waxing: {
    title: "Waxing",
    description: "Smooth, long-lasting hair removal. Removes from root, exfoliates, removes tan.",
    subcategories: [
      {
        name: "Liposoluble Wax",
        description: "Hydrates, ideal for sensitive skin, removes hair from root, slows hair growth",
        items: [
          { name: "Full Arms", price: "₹550*" },
          { name: "Full Legs", price: "₹650*" },
          { name: "Half Legs", price: "₹550*" },
          { name: "Stomach", price: "₹950*" },
          { name: "Back", price: "₹950*" },
          { name: "Full Body", price: "₹3550*" }
        ]
      },
      {
        name: "Bead Wax",
        description: "Adheres to hair, less irritation, ideal for sensitive areas, removes tan",
        items: [
          { name: "Upper Lip", price: "₹50*" },
          { name: "Chin", price: "₹50*" },
          { name: "Full Face", price: "₹500*" },
          { name: "Under Arms", price: "₹250*" },
          { name: "Side Face (Both Sides)", price: "₹200*" },
          { name: "Bikini Line", price: "₹500*" },
          { name: "Bikini", price: "₹2500*" }
        ]
      }
    ]
  },

  deTan: {
    title: "De-Tan Treatment",
    description: "Unveil your skin's true radiance, reverse sun damage",
    subcategories: [
      {
        name: "Essential De Tan",
        items: [
          { name: "Face Treatment", price: "₹650*" },
          { name: "Hand Treatment", price: "₹1350*" },
          { name: "Half Legs Treatment", price: "₹1150*" },
          { name: "Feet Treatment", price: "₹550*" },
          { name: "Under Arms Treatment", price: "₹400*" },
          { name: "Round Neck Treatment", price: "₹700*" },
          { name: "Back Tan Treatment", price: "₹1150*" },
          { name: "Full Body", price: "₹3400*" }
        ]
      },
      {
        name: "Premium De Tan - Superberry Lacto",
        description: "Antidote for brighter, even-toned skin",
        items: [
          { name: "Face Treatment", price: "₹900*" },
          { name: "Hand Treatment", price: "₹1600*" },
          { name: "Half Legs Treatment", price: "₹1350*" },
          { name: "Feet Treatment", price: "₹650*" },
          { name: "Under Arms Treatment", price: "₹550*" },
          { name: "Round Neck Treatment", price: "₹800*" },
          { name: "Back Tan Treatment", price: "₹1350*" },
          { name: "Full Body", price: "₹4000*" },
          { name: "Add on Peel off Mask", price: "₹550*" }
        ]
      }
    ]
  },

  manicurePedicure: {
    title: "Manicure & Pedicure",
    description: "Rejuvenate and brighten hands and feet with tan removal for supple, soft results",
    subcategories: [
      {
        name: "Essential",
        items: [
          { name: "Organic Manicure & Pedicure", price: "₹550*", description: "Rejuvenate and brighten with tan removal" },
          { name: "Organic Manicure", price: "₹650*" },
          { name: "Organic Pedicure", price: "₹650*" },
          { name: "Chocolate Manicure", price: "₹650*" },
          { name: "Chocolate Pedicure", price: "₹850*" },
          { name: "Chocolate Mint Mani-Pedi", price: "—", description: "Skin lightening, coffee peppermint - for dry/dehydrated skin" }
        ]
      },
      {
        name: "Premium",
        items: [
          { name: "Fruit Pop - Anti Tan Manicure", price: "₹900*", description: "Strawberry, kiwi, watermelon / Chocolate, banana & coconut" },
          { name: "Fruit Pop - Anti Tan Pedicure", price: "₹1150*", description: "Complete detox and pampering experience" }
        ]
      }
    ]
  },

  nails: {
    title: "Nail Services",
    description: "From basic care to stunning nail art and extensions",
    subcategories: [
      {
        name: "Basic Nail Service",
        items: [
          { name: "Nail Cut & File", price: "₹150*" },
          { name: "Nail Polish Only", price: "₹150*" }
        ]
      },
      {
        name: "Essential Nail Service",
        items: [
          { name: "Gel Polish Application", price: "₹900* (Fixed)" },
          { name: "French Gel Polish", price: "₹900* (Fixed)" },
          { name: "Builder Gel Overlays + BIAB", price: "₹1100* (Fixed)" }
        ]
      },
      {
        name: "Nail Enhancement - Gel",
        items: [
          { name: "Inbuilt Gel Extension - Glitters/Mylars", price: "₹2300* (Fixed)" },
          { name: "Natural Gel Extensions with Gel Polish - Full Set", price: "₹3200* (Fixed)" },
          { name: "French Nail Extension", price: "₹3400* (Fixed)" }
        ]
      },
      {
        name: "Nail Enhancement - Acrylic",
        items: [
          { name: "Inbuilt Acrylic Extension - Glitters/Mylars", price: "₹2800* (Fixed)" },
          { name: "Natural Acrylic Extensions with Gel Polish - Full Set", price: "₹3400* (Fixed)" },
          { name: "French Nail Extension", price: "₹4000* (Fixed)" }
        ]
      },
      {
        name: "Nail Art (On Gel Polish)",
        items: [
          { name: "Water Decal Nail Art", price: "₹500* (₹250/hand)" },
          { name: "9D Sticker Nail Art", price: "₹500* (₹250/hand)" },
          { name: "Glitter Nail Art", price: "₹500* (₹250/hand)" },
          { name: "Mylar Nail Art", price: "₹500* (₹250/hand)" },
          { name: "Ultra Glitter Gel Nail Art", price: "₹1000* (₹500/hand)" },
          { name: "Spider Gel Nail Art", price: "₹1000* (₹500/hand)" },
          { name: "Metallic Gel Nail Art", price: "₹1000* (₹500/hand)" },
          { name: "9D Cat Eye Nail Art (Ding Dong Polish)", price: "₹800/hand" },
          { name: "Free Hand Nail Art (Painting/Embossed Gel)", price: "₹900/hand" },
          { name: "Removal of Extension", price: "₹500* (Fixed)" }
        ]
      }
    ]
  },

  body: {
    title: "Body Treatments",
    description: "Body polishing and intimate area care",
    subcategories: [
      {
        name: "Body Polishing",
        items: [
          { name: "Essential Body Polishing", price: "₹4000*" },
          { name: "Premium Body Polishing - Seasoul", price: "₹5000*" }
        ]
      },
      {
        name: "Brazilian Skin Lightening - Intimate Areas",
        description: "Cleanse, lighten & hygiene - Dead Sea Minerals/Korean Cica",
        items: [
          { name: "4 Step Cleansing & Moisturizing - Neck Line", price: "₹900*" },
          { name: "4 Step Cleansing & Moisturizing - Under Arms", price: "₹900*" },
          { name: "4 Step Cleansing & Moisturizing - Bikini Area", price: "₹1350*" }
        ]
      }
    ]
  },

  groom: {
    title: "Groom Package",
    description: "Complete grooming package for the special day",
    subcategories: [
      {
        name: "Groom Services Package",
        items: [
          { name: "Gold Moroccan Vit C Facial", price: "Based on skin type" },
          { name: "Face Bleach / Tan Pack", price: "Included" },
          { name: "Hands Tan Pack", price: "Included" },
          { name: "Neck Tan", price: "Included" },
          { name: "Hair Spa", price: "Included" },
          { name: "Hair Cut", price: "Included" },
          { name: "Shave / Beard Styling", price: "Included" },
          { name: "Hair Colouring", price: "Included" },
          { name: "Chocolate Manicure", price: "Included" },
          { name: "Chocolate Pedicure", price: "Included" },
          { name: "Pure Pore / Pure Moist", price: "Included" },
          { name: "Organic Clean Up", price: "Included" },
          { name: "Full Package", price: "₹12,500*" }
        ]
      }
    ]
  }
};

// Helper for Services page - get all categories as array
export const serviceCategories = Object.entries(services).map(([key, value]) => ({
  id: key,
  ...value
}));
