# Konsol Game Terlaris - E-commerce Product Page Clone

This project is a complete clone of the Indonesian e-commerce product page for "Konsol Game Terlaris" (Best-Selling Game Console) from https://cod.okeform.com/konsol-game-terlaris/.

## Features

### 🎯 Core Functionality
- **Product Image Slider**: Interactive image carousel with 3 product images
- **Live Countdown Timer**: Real-time countdown for flash sale (20:23 minutes)
- **Dynamic Pricing**: Automatic price calculation based on quantity
- **Order Form**: Complete order form with validation
- **Success Modal**: Order confirmation modal with WhatsApp contact message

### 📱 User Interface
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern Styling**: Clean, professional design matching the original
- **Interactive Elements**: Hover effects, smooth transitions
- **Form Validation**: Client-side validation for required fields

### 🛒 E-commerce Features
- **Quantity Controls**: Plus/minus buttons to adjust item quantity
- **Price Breakdown**: Detailed cost calculation including discounts
- **Payment Options**: COD and Transfer payment methods
- **Shipping Information**: Address form with district selection
- **Customer Reviews**: Display of customer testimonials

## Technical Implementation

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and responsive design
- **Vanilla JavaScript**: Interactive functionality without external dependencies

### File Structure
```
/
├── index.html          # Main HTML file
├── README.md          # Project documentation
└── assets/
    ├── css/
    │   └── style.css   # All styling and responsive design
    └── js/
        └── script.js   # Interactive functionality
```

### Key Components

#### 1. Hero Banner
- Green promotional banner with product messaging
- Eye-catching typography and layout

#### 2. Product Image Slider
- 3 high-quality product images
- Auto-advance every 5 seconds
- Click-to-navigate functionality
- Image counter display (1/3, 2/3, 3/3)

#### 3. Product Details
- Current sale price: Rp139.000
- Original price: Rp290.000 (52% discount)
- Flash sale badge and countdown timer
- Product rating (4.9/5) and sales count
- Customer review section

#### 4. Order Form
- Recipient name input
- District (Kecamatan) dropdown selection
- Full address textarea
- Quantity controls with live price updates
- Payment method selection (COD/Transfer)
- Detailed cost breakdown

#### 5. Interactive Features
- **Countdown Timer**: Updates every second, disables order when expired
- **Quantity Controls**: Increase/decrease with automatic price recalculation
- **Form Validation**: Checks required fields before order submission
- **Success Modal**: Displays confirmation message with action buttons

## Pricing Logic
- Base price: Rp139.000 per unit
- Original price: Rp290.000 per unit (52% discount)
- Dynamic calculation: Price × Quantity
- Real-time updates when quantity changes

## Validation Rules
- Recipient name: Required field
- District selection: Must select from dropdown
- Full address: Required field
- Displays alert with missing field information

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly interface for mobile devices

## Setup Instructions
1. Clone or download the project files
2. Open `index.html` in a web browser
3. No additional setup or dependencies required

## Live Demo
The page is fully functional and includes:
- Working countdown timer
- Interactive image slider
- Functional quantity controls
- Form validation
- Order submission modal

## Original Design Fidelity
This clone accurately reproduces:
- ✅ Exact color scheme and typography
- ✅ Layout and spacing
- ✅ Interactive elements and functionality
- ✅ Responsive behavior
- ✅ Indonesian language content
- ✅ Product images and pricing
- ✅ Customer reviews and ratings
- ✅ Order form structure

## Notes
- Images are loaded from the original CDN URLs
- Countdown timer starts at 20:23 as per original design
- All text content matches the original Indonesian language
- Form validation provides user-friendly error messages
- Modal overlay prevents background interaction during order confirmation

---

**Created as a faithful clone of the original e-commerce product page**
