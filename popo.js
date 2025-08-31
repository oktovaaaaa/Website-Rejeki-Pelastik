        // Menonaktifkan inspect element
        document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
        });

        document.addEventListener('keydown', function(e) {
          if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0))) || (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) {
            e.preventDefault();
          }
        });

        document.addEventListener('DOMContentLoaded', () => {
            // Sample product data
            const products = [
                {id: 1, name: "PRONO XITA Pilith Lokal", brand: "PRONO XITA", price: 10719, originalPrice: 39260, discount: 68, image: "https://via.placeholder.com/300/00CED1/FFFFFF?text=Produk+1", category: "bahan-masakan", description: "PRONO XITA adalah produk lokal berkualitas tinggi.", freeItem: "Gratis Microphone"},
                {id: 2, name: "Celana Pendek Olahraga Pria Wanita", brand: "Stars", price: 49999, originalPrice: 104999, discount: 52, image: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Produk+2", category: "makanan", description: "Celana pendek olahraga yang nyaman untuk berbagai aktivitas.", freeItem: "Gratis Harga Terbaik"},
                {id: 3, name: "Sweater Hoodie Jaket Basic Croptop", brand: "Stars", price: 7968, originalPrice: 38000, discount: 79, image: "https://via.placeholder.com/300/33FF57/FFFFFF?text=Produk+3", category: "minuman", description: "Sweater hoodie dengan desain trendy dan nyaman dipakai."},
                {id: 4, name: "Speaker Bluetooth Super Bass 16DW", brand: "PRONO XITA", price: 129999, originalPrice: 259999, discount: 50, image: "https://via.placeholder.com/300/3357FF/FFFFFF?text=Produk+4", category: "box", description: "Speaker Bluetooth dengan kualitas suara super bass."},
                {id: 5, name: "Gelang Tangan Titanium AB05", brand: "Stars", price: 24999, originalPrice: 49999, discount: 50, image: "https://via.placeholder.com/300/FF33A1/FFFFFF?text=Produk+5", category: "kantong-plastik", description: "Gelang tangan titanium dengan desain stylish dan elegan."},
                {id: 6, name: "TWS 113 Pro Wireless Earbuds", brand: "TWS 113 Pro", price: 89999, originalPrice: 179999, discount: 50, image: "https://via.placeholder.com/300/A133FF/FFFFFF?text=Produk+6", category: "box", description: "Wireless earbuds dengan kualitas suara jernih dan bass yang dalam."},
                {id: 7, name: "Lunchbox Bento Kotak Makan", brand: "FoodBox", price: 45000, originalPrice: 75000, discount: 40, image: "https://via.placeholder.com/300/FFC300/FFFFFF?text=Produk+7", category: "box", description: "Lunchbox bento dengan kompartemen terpisah."},
                {id: 8, name: "Kantong Plastik Roll Isi Ulang", brand: "PlastikPlus", price: 15000, originalPrice: 20000, discount: 25, image: "plastik//cap aladin sz24 cm.jpg", category: "kantong-plastik", description: "Kantong plastik roll isi ulang dengan kualitas tebal dan kuat."},
                {id: 9, name: "Cup premium U Cup", brand: "Cup Minuman isi 50 pcs", price: 75000, originalPrice: 90000, discount: 17, image: "minuman//cup dhivers isi 50pcs.jpg", category: "minuman", description: "Cup minuman transparan isi 50 pcs berbahan premium."},
                {id: 10, name: "Teh Melati Celup Isi 25", brand: "Teh Wangi", price: 12000, originalPrice: 15000, discount: 20, image: "https://via.placeholder.com/300/581845/FFFFFF?text=Produk+10", category: "minuman", description: "Teh melati celup dengan aroma yang menenangkan."},
                {id: 11, name: "Mie Instan Rasa Soto Pedas", brand: "Mie Sedap", price: 3500, originalPrice: 4000, discount: 13, image: "https://via.placeholder.com/300/C70039/FFFFFF?text=Produk+11", category: "makanan", description: "Mie instan kuah rasa soto pedas yang menggugah selera."},
                {id: 12, name: "Bumbu Nasi Goreng Spesial", brand: "Bumbu Racik", price: 5000, image: "https://via.placeholder.com/300/FF5733/FFFFFF?text=Produk+12", category: "bahan-masakan", description: "Bumbu instan untuk membuat nasi goreng spesial ala restoran."},
                {id: 13, name: "Kecap Manis Botol 600ml", brand: "Kecap Bango", price: 25000, originalPrice: 28000, discount: 11, image: "https://via.placeholder.com/300/2E4053/FFFFFF?text=Produk+13", category: "bahan-masakan", description: "Kecap manis legendaris yang terbuat dari kedelai hitam pilihan."},
                {id: 14, name: "Kotak Kardus Packing 20x20x10", brand: "BoxPack", price: 3000, image: "https://via.placeholder.com/300/F1C40F/000000?text=Produk+14", category: "box", description: "Kotak kardus serbaguna untuk kebutuhan packing online shop."},
                {id: 15, name: "Susu UHT Coklat 1L", brand: "Susu Nikmat", price: 18000, image: "https://via.placeholder.com/300/7D3C98/FFFFFF?text=Produk+15", category: "minuman", description: "Susu UHT rasa coklat yang lezat dan bergizi."}
            ];

            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let currentCategory = 'all';
            let searchQuery = '';
            let currentPage = 1;
            const productsPerPage = 12;

            const cartIcon = document.getElementById('cartIcon');
            const cartCount = document.getElementById('cartCount');
            const cartSidebar = document.getElementById('cartSidebar');
            const closeCart = document.getElementById('closeCart');
            const cartItems = document.getElementById('cartItems');
            const cartTotal = document.getElementById('cartTotal');
            const checkoutBtn = document.getElementById('checkoutBtn');
            const overlay = document.getElementById('overlay');
            const orderForm = document.getElementById('orderForm');
            const customerName = document.getElementById('customerName');
            const customerAddress = document.getElementById('customerAddress');
            const submitOrder = document.getElementById('submitOrder');
            const cancelOrder = document.getElementById('cancelOrder');
            const productsGrid = document.getElementById('productsGrid');
            const categoryButtons = document.querySelectorAll('.category-btn');
            const searchInput = document.getElementById('searchInput');
            const productDetailModal = document.getElementById('productDetailModal');
            const productDetailContainer = document.getElementById('productDetailContainer');
            const closeDetail = document.getElementById('closeDetail');
            const customAlert = document.getElementById('customAlert');
            const alertIcon = document.getElementById('alertIcon');
            const alertMessage = document.getElementById('alertMessage');
            const categoriesToggle = document.getElementById('categoriesToggle');
            const categories = document.getElementById('categories');
            const paginationContainer = document.getElementById('paginationContainer');

            function closeAllModals() {
                cartSidebar.classList.remove('open');
                overlay.classList.remove('open');
                orderForm.classList.remove('open');
                productDetailModal.classList.remove('open');
            }
            
            closeAllModals();

            function showAlert(message, type = 'success') {
                alertMessage.textContent = message;
                customAlert.className = 'custom-alert show';
                
                switch(type) {
                    case 'success':
                        customAlert.classList.add('alert-success');
                        alertIcon.innerHTML = '<i class="fas fa-check-circle"></i>';
                        break;
                    case 'info':
                        customAlert.classList.add('alert-info');
                        alertIcon.innerHTML = '<i class="fas fa-info-circle"></i>';
                        break;
                    case 'warning':
                        customAlert.classList.add('alert-warning');
                        alertIcon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
                        break;
                }
                
                setTimeout(() => {
                    customAlert.classList.remove('show');
                }, 3000);
            }
            
            function updateCartCount() {
                const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
                cartCount.textContent = totalItems;
                
                if (totalItems > 0) {
                    cartCount.classList.remove('hidden');
                } else {
                    cartCount.classList.add('hidden');
                }
            }
            
            function updateCartDisplay() {
                cartItems.innerHTML = '';
                
                if (cart.length === 0) {
                    cartItems.innerHTML = '<div class="empty-cart">Keranjang belanja kosong</div>';
                    cartTotal.textContent = 'Total: Rp 0';
                    return;
                }
                
                let total = 0;
                
                cart.forEach((item, index) => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;
                    
                    const cartItemElement = document.createElement('div');
                    cartItemElement.classList.add('cart-item');
                    cartItemElement.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                            <div class="cart-item-quantity">
                                <button class="quantity-btn minus" data-index="${index}">-</button>
                                <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-index="${index}">
                                <button class="quantity-btn plus" data-index="${index}">+</button>
                                <span class="remove-item" data-index="${index}"><i class="fas fa-trash"></i></span>
                            </div>
                        </div>
                    `;
                    
                    cartItems.appendChild(cartItemElement);
                });
                
                cartTotal.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
                
                document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const index = parseInt(e.target.closest('[data-index]').getAttribute('data-index'));
                        cart[index].quantity += 1;
                        saveCart();
                        updateCartDisplay();
                        showAlert('Jumlah produk berhasil ditambah', 'info');
                    });
                });
                
                document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const index = parseInt(e.target.closest('[data-index]').getAttribute('data-index'));
                        if (cart[index].quantity > 1) {
                            cart[index].quantity -= 1;
                            showAlert('Jumlah produk berhasil dikurangi', 'info');
                        } else {
                            cart.splice(index, 1);
                            showAlert('Produk dihapus dari keranjang', 'warning');
                        }
                        saveCart();
                        updateCartDisplay();
                    });
                });
                
                document.querySelectorAll('.remove-item').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const index = parseInt(e.target.closest('.remove-item').getAttribute('data-index'));
                        cart.splice(index, 1);
                        saveCart();
                        updateCartDisplay();
                        showAlert('Produk dihapus dari keranjang', 'warning');
                    });
                });
                
                document.querySelectorAll('.quantity-input').forEach(input => {
                    input.addEventListener('change', (e) => {
                        const index = parseInt(e.target.getAttribute('data-index'));
                        const newQuantity = parseInt(e.target.value);
                        
                        if (newQuantity > 0) {
                            cart[index].quantity = newQuantity;
                            showAlert('Jumlah produk diperbarui', 'info');
                        } else {
                            cart.splice(index, 1);
                            showAlert('Produk dihapus dari keranjang', 'warning');
                        }
                        
                        saveCart();
                        updateCartDisplay();
                    });
                });
            }
            
            function saveCart() {
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
            }
            
            function addToCart(productId, productName, productPrice, productImage) {
                const existingItemIndex = cart.findIndex(item => item.id === productId);
                
                if (existingItemIndex !== -1) {
                    cart[existingItemIndex].quantity += 1;
                } else {
                    cart.push({ id: productId, name: productName, price: productPrice, image: productImage, quantity: 1 });
                }
                
                saveCart();
                updateCartDisplay();
                showAlert(`${productName} telah ditambahkan ke keranjang!`, 'success');
            }
            
            function displayProducts() {
                productsGrid.innerHTML = '';
                
                const filteredProducts = products.filter(product => {
                    const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
                    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
                    return matchesCategory && matchesSearch;
                });
                
                if (filteredProducts.length === 0) {
                    productsGrid.innerHTML = '<div class="empty-cart" style="grid-column: 1 / -1; text-align: center; padding: 40px;">Tidak ada produk yang ditemukan</div>';
                    renderPagination(0);
                    return;
                }

                const startIndex = (currentPage - 1) * productsPerPage;
                const endIndex = startIndex + productsPerPage;
                const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
                
                paginatedProducts.forEach(product => {
                    const productElement = document.createElement('div');
                    productElement.classList.add('product-card');
                    productElement.innerHTML = `
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <div class="product-info">
                            <div class="product-brand">${product.brand}</div>
                            <div class="product-name">${product.name}</div>
                            <div class="product-price">
                                <span class="current-price">Rp ${product.price.toLocaleString('id-ID')}</span>
                                ${product.originalPrice ? `<span class="original-price">Rp ${product.originalPrice.toLocaleString('id-ID')}</span>` : ''}
                                ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ''}
                            </div>
                            ${product.freeItem ? `<div class="free-item">${product.freeItem}</div>` : ''}
                            <div class="product-actions">
                                <button class="buy-now-btn" data-product-id="${product.id}">Beli</button>
                                <button class="add-to-cart" data-product-id="${product.id}">
                                    <i class="fas fa-cart-plus"></i>
                                </button>
                            </div>
                        </div>
                    `;
                    
                    productsGrid.appendChild(productElement);
                    
                    productElement.addEventListener('click', (e) => {
                        if (!e.target.closest('.buy-now-btn') && !e.target.closest('.add-to-cart')) {
                            showProductDetail(product);
                        }
                    });
                });
                
                document.querySelectorAll('.add-to-cart').forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const productId = parseInt(button.getAttribute('data-product-id'));
                        const product = products.find(p => p.id === productId);
                        addToCart(product.id, product.name, product.price, product.image);
                    });
                });
                
                document.querySelectorAll('.buy-now-btn').forEach(button => {
                    button.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const productId = parseInt(button.getAttribute('data-product-id'));
                        const product = products.find(p => p.id === productId);
                        
                        cart = [{ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }];
                        
                        saveCart();
                        updateCartDisplay();
                        
                        orderForm.classList.add('open');
                        overlay.classList.add('open');
                        
                        showAlert(`Beralih ke pembayaran untuk ${product.name}`, 'info');
                    });
                });

                renderPagination(filteredProducts.length);
            }

            function renderPagination(totalProducts) {
                paginationContainer.innerHTML = '';
                const totalPages = Math.ceil(totalProducts / productsPerPage);

                if (totalPages <= 1) return;

                const prevButton = document.createElement('button');
                prevButton.textContent = 'Sebelumnya';
                prevButton.classList.add('pagination-btn');
                prevButton.disabled = currentPage === 1;
                prevButton.addEventListener('click', () => {
                    if (currentPage > 1) {
                        currentPage--;
                        displayProducts();
                    }
                });
                paginationContainer.appendChild(prevButton);

                for (let i = 1; i <= totalPages; i++) {
                    const pageButton = document.createElement('button');
                    pageButton.textContent = i;
                    pageButton.classList.add('pagination-btn');
                    if (i === currentPage) {
                        pageButton.classList.add('active');
                    }
                    pageButton.addEventListener('click', () => {
                        currentPage = i;
                        displayProducts();
                    });
                    paginationContainer.appendChild(pageButton);
                }

                const nextButton = document.createElement('button');
                nextButton.textContent = 'Berikutnya';
                nextButton.classList.add('pagination-btn');
                nextButton.disabled = currentPage === totalPages;
                nextButton.addEventListener('click', () => {
                    if (currentPage < totalPages) {
                        currentPage++;
                        displayProducts();
                    }
                });
                paginationContainer.appendChild(nextButton);
            }
            
            function showProductDetail(product) {
                productDetailContainer.innerHTML = `
                    <div class="product-detail-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-detail-info">
                        <h2 class="product-detail-name">${product.name}</h2>
                        <div class="product-detail-brand">${product.brand}</div>
                        <div class="product-detail-price">
                            <span class="current-price">Rp ${product.price.toLocaleString('id-ID')}</span>
                            ${product.originalPrice ? `<span class="original-price">Rp ${product.originalPrice.toLocaleString('id-ID')}</span>` : ''}
                            ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ''}
                        </div>
                        ${product.freeItem ? `<div class="free-item">${product.freeItem}</div>` : ''}
                        <div class="product-detail-description">
                            <p>${product.description}</p>
                        </div>
                        <div class="product-detail-actions">
                            <button class="detail-buy-now-btn" data-product-id="${product.id}">Beli Sekarang</button>
                            <button class="detail-add-to-cart" data-product-id="${product.id}">
                                <i class="fas fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                `;
                
                productDetailModal.classList.add('open');
                overlay.classList.add('open');
                
                document.querySelector('.detail-add-to-cart').addEventListener('click', () => {
                    addToCart(product.id, product.name, product.price, product.image);
                });
                
                document.querySelector('.detail-buy-now-btn').addEventListener('click', () => {
                    cart = [{ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }];
                    
                    saveCart();
                    updateCartDisplay();
                    
                    productDetailModal.classList.remove('open');
                    orderForm.classList.add('open');
                    
                    showAlert(`Beralih ke pembayaran untuk ${product.name}`, 'info');
                });
            }
            
            cartIcon.addEventListener('click', () => {
                cartSidebar.classList.add('open');
                overlay.classList.add('open');
                
                if (window.innerWidth <= 768) {
                    categories.classList.remove('open');
                    categoriesToggle.classList.remove('open');
                }
            });
            
            closeCart.addEventListener('click', closeAllModals);
            closeDetail.addEventListener('click', closeAllModals);
            overlay.addEventListener('click', closeAllModals);
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    currentCategory = button.getAttribute('data-category');
                    
                    searchInput.value = '';
                    searchQuery = '';
                    currentPage = 1;
                    
                    displayProducts();
                    
                    if (window.innerWidth <= 768) {
                        categories.classList.remove('open');
                        categoriesToggle.classList.remove('open');
                    }
                });
            });
            
            categoriesToggle.addEventListener('click', () => {
                categories.classList.toggle('open');
                categoriesToggle.classList.toggle('open');
            });
            
            searchInput.addEventListener('input', () => {
                searchQuery = searchInput.value;
                currentPage = 1;

                currentCategory = 'all';
                
                categoryButtons.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.getAttribute('data-category') === 'all') {
                        btn.classList.add('active');
                    }
                });
                
                displayProducts();
            });
            
            checkoutBtn.addEventListener('click', () => {
                if (cart.length === 0) {
                    showAlert('Keranjang belanja kosong!', 'warning');
                    return;
                }
                
                orderForm.classList.add('open');
                overlay.classList.add('open');
            });
            
            submitOrder.addEventListener('click', () => {
                if (!customerName.value || !customerAddress.value) {
                    showAlert('Harap isi semua data pemesanan!', 'warning');
                    return;
                }
                
                let message = `Halo, saya ingin memesan produk berikut:%0A%0A`;
                message += `*Nama:* ${customerName.value}%0A`;
                message += `*Alamat:* ${customerAddress.value}%0A%0A`;
                message += `*Daftar Pesanan:*%0A`;
                
                let total = 0;
                cart.forEach(item => {
                    const itemTotal = item.price * item.quantity;
                    total += itemTotal;
                    message += `- ${item.name} (${item.quantity} x Rp ${item.price.toLocaleString('id-ID')}) = Rp ${itemTotal.toLocaleString('id-ID')}%0A`;
                });
                
                message += `%0A*Total: Rp ${total.toLocaleString('id-ID')}*%0A%0A`;
                message += `Terima kasih!`;
                
                const phoneNumber = "62881080811110";
                
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                
                cart = [];
                saveCart();
                updateCartDisplay();
                
                customerName.value = '';
                customerAddress.value = '';
                
                closeAllModals();
                
                showAlert('Pesanan telah dikirim melalui WhatsApp!', 'success');
            });
            
            cancelOrder.addEventListener('click', () => {
                orderForm.classList.remove('open');
                overlay.classList.remove('open');
            });
            
            // Initialize page
            updateCartCount();
            updateCartDisplay();
            displayProducts();
        });
