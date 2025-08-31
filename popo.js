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
                // {id: 1, name: " PaperLunch Box isi 50 pcs", brand: "P K", price: 10719, originalPrice: 39260, discount: 68, image: "makanan/paper lunch box 160x90x50mm.jpg", category: "makanan", description: "Paper Lunch Box warna Cokelat Size 160 x 90 x 50.", freeItem: "Gratis Microphone"},
                {id: 1, name: " PaperLunch Box isi 50 pcs", brand: "P K", price: 45000, image: "makanan/paper lunch box 160x90x50mm.jpg", category: "makanan", description: "Paper Lunch Box warna Cokelat Size 160 x 90 x 50."},
                {id: 2, name: "Poper Bowl 650 ml + tutup", brand: "Nesto", price: 35000, image: "makanan/nesto poper bowl 650ml, 25pcs.jpg", category: "makanan", description: "Poper bowl 650 ml isi 25 pcs berwarna putih."},
                {id: 3, name: "Kantong Plastik cap Aladin Uk: 15,19,24,27,32", brand: "Cap Aladin", price: 12000, image: "plastik//cap aladin sz24 cm.jpg", category: "kantong-plastik",},
                {id: 4, name: "Cup premium U Cup", brand: "U Cup", price: 75000, image: "minuman//cup dhivers isi 50pcs.jpg", category: "minuman", description: "Cup minuman transparan isi 50 pcs berbahan premium."},
                {id: 5, name: "Max Creamer satuan", brand: "MaxCreamer", price: 41000, image: "bahan masakan//MaxCreamer satuan.jpg", category: "bahan-masakan", description: "MaxCreamer satuan untuk cream"},
                {id: 6, name: "Max Creamer 1 karton", brand: "MaxCreamer", price: 936000, image: "bahan masakan//MaxCreamer kotak.jpg", category: "bahan-masakan", description: "MaxCreamer per karton isi 24 kotak untuk membuat cream"},               
                {id: 7, name: "Susu Evaporasi 1 karton", brand: "Sunbay", price: 748000, image: "bahan masakan//SunbayEvaporated.jpg", category: "bahan-masakan", description: "Susu Evaporated isi 48"},
                {id: 8, name: "Mamayo 1 karton", brand: "Mamayo", price: 336000, image: "bahan masakan//mamayo kotak.jpg", category: "bahan-masakan", description: "Mamayo isi 12"},
                {id: 9, name: "Plastik cap Aladin Jumbo Hitam Uk 45", brand: "Cap Aladin", price: 25000, image: "plastik//cap aladin jumbo sz 45cm.jpg", category: "kantong-plastik",description: "Pelastik berwarna hitam jumbo dengan ukuran 45 cm"},
                {id: 10, name: "Plastik cap Aladin Jumbo Hitam Uk 45 (Satu Goni)", brand: "Cap Aladin", price: 600000, image: "plastik//cap aladin jumbo sz 45cm.jpg", category: "kantong-plastik",description: "Pelastik berwarna hitam jumbo dengan ukuran 45 cm isi 25 bungkus"},
                {id: 11, name: "Plastik cap Aladin Jumbo Warna Uk 45", brand: "Cap Aladin", price: 26000, image: "plastik/cap aladin jumbo sz 45cm berwarna.jpg", category: "kantong-plastik",description: "Pelastik berwarna, jumbo dengan ukuran 45 cm "},
                {id: 12, name: "Plastik Transparan cap Tehko Uk: 15,18,24", brand: "Cap Tehko", price: 8000, image: "plastik/Plastik cap tehko sz15,18,24.jpg", category: "kantong-plastik",description: "Pelastik transparan dengan ukuran: 15cm, 18cm dan 24cm"},
                {id: 13, name: "Plastik Transparan cap Dayana Uk: 15", brand: "Dayana", price: 3000, image: "plastik/dayana sz 15.jpg", category: "kantong-plastik",description: "Pelastik transparan asoy dengan ukuran 15"},
                {id: 14, name: "Plastik Transparan cap Melati Uk: 15", brand: "Melati", price: 3500, image: "plastik/melati sz 15.jpg", category: "kantong-plastik",description: "Pelastik transparan asoy dengan ukuran: 15cm"},
                {id: 15, name: "Plastik Transparan HD/PE Uk: B-28", brand: "KMPP", price: 32000, image: "plastik/Tas HD PE sz 280 450 t500.jpg", category: "kantong-plastik",description: "Pelastik transparan HD dengan ukuran: B-28 280/450mm x 500mm"},
                {id: 16, name: "Plastik Transparan HD/PE Uk: B-35", brand: "KMPP", price: 8, image: "plastik/tas hd pe sz 350 510 T550.jpg", category: "kantong-plastik",description: "Pelastik transparan HD dengan ukuran: B-35 350/510 x 550mm"},
                {id: 17, name: "Plastik Transparan HD Cap Matahari Uk:e 35", brand: "Cap Matahari", price: 8, image: "plastik/tas hd cap matahari sz 35.jpg", category: "kantong-plastik",description: "Pelastik putih HD dengan ukuran: 35cm"},
                {id: 18, name: "Plastik Loundry sz: 60x100, 50x75, 45x65, 40x60, 35x50", brand: "Cap Bengkuang", price: 34000, image: "plastik/laundry cap bengkuang .jpg", category: "kantong-plastik",description: "Pelastik transparan Loundry dengan ukuran: 60x100, 50x75, 45x65, 40x60, 35x50"},
                {id: 12, name: "Kantongan Transparan HD Number One Uk: 27", brand: "Super number One", price: 8000, image: "plastik/kantong hd number one sz 27.jpg", category: "kantong-plastik",description: "Pelastik transparan HD Super number One dengan ukuran: 27cm berat 500 gram"},
                {id: 12, name: "Tas HD Biru Steamboat Uk: 18", brand: "Steamboat", price: 8, image: "plastik/Plastik cap tehko sz15,18,24.jpg", category: "kantong-plastik",description: "Pelastik Biru dengan ukuran: S-18, 180/300x370 berat 500 gram"},
                {id: 12, name: "Tas HD Hijau Steamboat Uk: 15", brand: "Steamboat", price: 8, image: "plastik/tas hd steamboat kuning 150 250 x330.jpg", category: "kantong-plastik",description: "Pelastik Hijau dengan ukuran: SS-15, 150/250 x 330mm berat 500 gram"},
                {id: 12, name: "Pelastik HD Cap Bawang Uk: 13 x 21", brand: "Cap Bawang", price: 8000, image: "plastik/pelastik hd cap bawang .jpg", category: "kantong-plastik",description: "Pelastik transparan HD Cap Bawang dengan ukuran: 13 X 21cm "},
                {id: 12, name: "Plastik Transparan Lotus HD Uk: 22 x 35", brand: "Lotus", price: 8000, image: "plastik/lotus 22 x 35.jpg", category: "kantong-plastik",description: "Pelastik transparan HD dengan ukuran: 22 x 35cm"},
                {id: 12, name: "Plastik Transparan HD Istana Laut Uk: 17x21, 15x21, 12x17", brand: "Istana Laut", price: 8000, image: "plastik/istana laut HD 17 x25, 15x21,12x17.jpg", category: "kantong-plastik",description: "Pelastik transparan HD dengan ukuran: 17x21, 15x21, 12x17"},
                {id: 12, name: "Plastik Transparan HD cap Tehko Uk: 18x25, 15x21", brand: "Cap Tehko", price: 8, image: "plastik/HD cap Tehko sz18x25, 15x21.jpg", category: "kantong-plastik",description: "Pelastik transparan HD Tehko dengan ukuran: 18 x 25cm dan 15 x 21cm"},


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
