// Global variables
let currentSlide = 0;
let countdownTime = 20 * 60 + 23; // 20 minutes and 23 seconds in seconds
let countdownInterval;
let quantity = 1;

// DOM elements
const sliderImages = document.querySelectorAll('.slider-image');
const slideCounter = document.querySelector('.slide-counter');
const countdownDisplay = document.getElementById('countdown');
const countdownReminder = document.getElementById('countdown-reminder');
const quantityInput = document.getElementById('quantity');
const decreaseBtn = document.getElementById('decrease-qty');
const increaseBtn = document.getElementById('increase-qty');
const orderBtn = document.getElementById('order-btn');
const modal = document.getElementById('success-modal');
const changeOrderBtn = document.getElementById('change-order');
const continueOrderBtn = document.getElementById('continue-order');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    initializeCountdown();
    initializeQuantityControls();
    initializeOrderForm();
    updatePricing();
});

// Image Slider Functions
function initializeSlider() {
    // Add click event to images for navigation
    sliderImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            goToSlide(index + 1);
        });
    });
    
    // Auto-advance slider every 5 seconds
    setInterval(() => {
        nextSlide();
    }, 5000);
}

function goToSlide(slideNumber) {
    if (slideNumber < 1 || slideNumber > sliderImages.length) return;
    
    // Remove active class from current slide
    sliderImages[currentSlide].classList.remove('active');
    
    // Update current slide index
    currentSlide = slideNumber - 1;
    
    // Add active class to new slide
    sliderImages[currentSlide].classList.add('active');
    
    // Update counter
    slideCounter.textContent = `${slideNumber} / ${sliderImages.length}`;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % sliderImages.length;
    goToSlide(nextIndex + 1);
}

// Countdown Timer Functions
function initializeCountdown() {
    updateCountdownDisplay();
    countdownInterval = setInterval(() => {
        countdownTime--;
        updateCountdownDisplay();
        
        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            handleCountdownEnd();
        }
    }, 1000);
}

function updateCountdownDisplay() {
    const hours = Math.floor(countdownTime / 3600);
    const minutes = Math.floor((countdownTime % 3600) / 60);
    const seconds = countdownTime % 60;
    
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (countdownDisplay) {
        countdownDisplay.textContent = timeString;
    }
    if (countdownReminder) {
        countdownReminder.textContent = timeString;
    }
}

function handleCountdownEnd() {
    if (countdownDisplay) {
        countdownDisplay.textContent = '00:00:00';
    }
    if (countdownReminder) {
        countdownReminder.textContent = '00:00:00';
    }
    
    // Disable order button
    if (orderBtn) {
        orderBtn.disabled = true;
        orderBtn.textContent = 'Flash Sale Berakhir';
    }
    
    // Show alert
    alert('Super Flash Sale telah berakhir!');
}

// Quantity Control Functions
function initializeQuantityControls() {
    if (decreaseBtn) {
        decreaseBtn.addEventListener('click', decreaseQuantity);
    }
    
    if (increaseBtn) {
        increaseBtn.addEventListener('click', increaseQuantity);
    }
    
    if (quantityInput) {
        quantityInput.addEventListener('change', handleQuantityChange);
    }
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        updateQuantityDisplay();
        updatePricing();
    }
}

function increaseQuantity() {
    quantity++;
    updateQuantityDisplay();
    updatePricing();
}

function handleQuantityChange() {
    const newQuantity = parseInt(quantityInput.value);
    if (newQuantity >= 1) {
        quantity = newQuantity;
        updatePricing();
    } else {
        quantityInput.value = quantity;
    }
}

function updateQuantityDisplay() {
    if (quantityInput) {
        quantityInput.value = quantity;
    }
}

// Pricing Functions
function updatePricing() {
    const salePrice = 139000;
    const originalPrice = 290000;
    
    const totalSale = salePrice * quantity;
    const totalOriginal = originalPrice * quantity;
    
    // Update subtotal
    const oldSubtotal = document.querySelector('.old-subtotal');
    const newSubtotal = document.querySelector('.new-subtotal');
    
    if (oldSubtotal) {
        oldSubtotal.textContent = `Rp ${totalOriginal.toLocaleString('id-ID')}`;
    }
    if (newSubtotal) {
        newSubtotal.textContent = `Rp ${totalSale.toLocaleString('id-ID')}`;
    }
    
    // Update total (for now, just show the sale price as shipping isn't calculated)
    const totalAmount = document.querySelector('.total-amount');
    if (totalAmount) {
        totalAmount.textContent = `Rp ${totalSale.toLocaleString('id-ID')}`;
    }
}

// Order Form Functions
function initializeOrderForm() {
    if (orderBtn) {
        orderBtn.addEventListener('click', handleOrderSubmission);
    }
    
    if (changeOrderBtn) {
        changeOrderBtn.addEventListener('click', closeModal);
    }
    
    if (continueOrderBtn) {
        continueOrderBtn.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

function handleOrderSubmission() {
    // Validate form
    const recipientName = document.getElementById('recipient-name');
    const kecamatan = document.getElementById('kecamatan');
    const address = document.getElementById('address');
    
    let isValid = true;
    let errorMessage = '';
    
    // Check required fields
    if (!recipientName || !recipientName.value.trim()) {
        errorMessage += 'Nama penerima harus diisi.\n';
        isValid = false;
    }
    
    if (!kecamatan || !kecamatan.value) {
        errorMessage += 'Kecamatan harus dipilih.\n';
        isValid = false;
    }
    
    if (!address || !address.value.trim()) {
        errorMessage += 'Alamat lengkap harus diisi.\n';
        isValid = false;
    }
    
    // Show validation errors
    if (!isValid) {
        alert('Mohon lengkapi data berikut:\n' + errorMessage);
        return;
    }
    
    // Show success modal
    showModal();
}

function showModal() {
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Utility Functions
function formatCurrency(amount) {
    return `Rp ${amount.toLocaleString('id-ID')}`;
}

// Handle form submission for better UX
document.addEventListener('keydown', function(e) {
    // Close modal with Escape key
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// Handle page visibility change to pause/resume countdown
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden, could pause countdown if needed
        console.log('Page hidden');
    } else {
        // Page is visible again
        console.log('Page visible');
    }
});

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.log('Failed to load image:', this.src);
            this.style.backgroundColor = '#f0f0f0';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.innerHTML = '<span style="color: #999;">Gambar tidak dapat dimuat</span>';
        });
    });
});

// Smooth scrolling for better UX
function smoothScrollTo(element) {
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add loading states for better UX
function showLoading(button) {
    if (button) {
        button.disabled = true;
        button.textContent = 'Memproses...';
    }
}

function hideLoading(button, originalText) {
    if (button) {
        button.disabled = false;
        button.textContent = originalText;
    }
}

// Initialize tooltips or help text if needed
function initializeHelpers() {
    // Add any helper functionality here
    console.log('Application initialized successfully');
}

// Call helper initialization
document.addEventListener('DOMContentLoaded', initializeHelpers);
