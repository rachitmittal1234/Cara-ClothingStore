const bar=document.getElementById('bar')
const nav=document.getElementById('tab')
const n=document.getElementById("mobile")
const c=document.getElementById("close")

if(bar){
    bar.addEventListener('click', () => {
        // nav.classList.add('active');
        nav.style.right="0px";
        n.style.display="none"
        // nav.style.display="none";
        
    })
}
if(c){
    c.addEventListener('click', () => {
       
        nav.style.right="-300px";
        // n.style.display="none"
        n.style.display="flex";
        
    })
}

const x=document.getElementById("ip1").querySelector("input");

if(x){
    x.addEventListener('input', () => {
        var x1=document.getElementById("fp1")
        var num1=x.value * 78;
        x1.textContent="$"+num1
        var x2=document.getElementById("fp2")
        var n2=x2.textContent
        var num2=parseFloat(n2.replace("$", ""))

        var x3=document.getElementById("fp3")
        var n3=x3.textContent
        var num3=parseFloat(n3.replace("$", ""))

        var f=document.getElementById("st")
        var n4=num1+num2+num3
        f.textContent="$"+n4

        var g=document.getElementById("tt")
        var n5=n4-50
        g.textContent="$"+n5

        
    })
    
}

const y=document.getElementById("ip2").querySelector("input");
if(y){
    y.addEventListener('input', () => {
        var x1=document.getElementById("fp2")
        var num1=y.value * 78;
        x1.textContent="$"+num1

        var x2=document.getElementById("fp1")
        var n2=x2.textContent
        var num2=parseFloat(n2.replace("$", ""))

        var x3=document.getElementById("fp3")
        var n3=x3.textContent
        var num3=parseFloat(n3.replace("$", ""))

        var f=document.getElementById("st")
        var n4=num1+num2+num3
        f.textContent="$"+n4

        var g=document.getElementById("tt")
        var n5=n4-50
        g.textContent="$"+n5

    })
}
const z=document.getElementById("ip3").querySelector("input");
if(z){
    z.addEventListener('input', () => {
        var x1=document.getElementById("fp3")
        var num1=z.value * 78;
        x1.textContent="$"+num1

        var x2=document.getElementById("fp1")
        var n2=x2.textContent
        var num2=parseFloat(n2.replace("$", ""))

        var x3=document.getElementById("fp2")
        var n3=x3.textContent
        var num3=parseFloat(n3.replace("$", ""))

        var f=document.getElementById("st")
        var n4=num1+num2+num3
        f.textContent="$"+n4

        var g=document.getElementById("tt")
        var n5=n4-50
        g.textContent="$"+n5
    })
}





// const dynamicArray = []; // Initialize an empty array

// // Function to dynamically add objects with attributes
// function addObjectToArray(id, name, price,img) {
//     const obj = {
//         id: id,          // Unique identifier
//         name: name,      // Name of the object
//         price: parseFloat(price),    // Price of the object
//         img: img    // Stock quantity
//     };
//     dynamicArray.push(obj);
//     dynamicArray.forEach(item => {
//         console.log(`Name: ${item.name}, Price: $${item.price} , ${item.img}`);
//     });
//     function renderTable() {
//         const tableBody = document.getElementById('cart-add-pdt'); // Get the table body
//         tableBody.innerHTML = ''; // Clear existing rows
    
//         dynamicArray.forEach((product, index) => {
//             const row = document.createElement('tr'); // Create a new row
    
//             // Create the Remove button cell
//             const removeCell = document.createElement('td');
//             const removeButton = document.createElement('a');
//             removeButton.href = '#';
//             removeButton.innerHTML = 'x'; // Icon for the button
//             removeButton.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 removeProduct(index); // Remove product by index
//             });
//             removeCell.appendChild(removeButton);
    
//             // Create the Image cell
//             const imageCell = document.createElement('td');
//             const imgElement = document.createElement('img');
//             imgElement.src = product.img;
//             imgElement.alt = product.name;
//             imgElement.width = 50; // Optional: Set image width
//             imageCell.appendChild(imgElement);
    
//             // Create the Product Name cell
//             const nameCell = document.createElement('td');
//             nameCell.textContent = product.name;
    
//             // Create the Price cell
//             const priceCell = document.createElement('td');
//             priceCell.textContent = `$${product.price.toFixed(2)}`;
    
//             // Create the Quantity cell
//             const quantityCell = document.createElement('td');
//             const quantityInput = document.createElement('input');
//             quantityInput.type = 'number';
//             quantityInput.value = 1;
//             quantityInput.min = 1;
//             quantityInput.addEventListener('change', (e) => {
//                 updateSubtotal(index, e.target.value);
//             });
//             quantityCell.appendChild(quantityInput);
    
//             // Create the Subtotal cell
//             const subtotalCell = document.createElement('td');
//             subtotalCell.textContent = `$${product.price.toFixed(2)}`;
//             subtotalCell.classList.add('subtotal'); // Add a class for future updates
    
//             // Append all cells to the row
//             row.appendChild(removeCell);
//             row.appendChild(imageCell);
//             row.appendChild(nameCell);
//             row.appendChild(priceCell);
//             row.appendChild(quantityCell);
//             row.appendChild(subtotalCell);
    
//             // Append the row to the table body
//             tableBody.appendChild(row);
//             console.log("Item added to the cart");
//         });
//     }
//      // Add the object to the array
// }
// document.addEventListener('DOMContentLoaded', () => {
//     const cartButtons = document.querySelectorAll('.add-to-cart-btn');
    
//     cartButtons.forEach(button => {
//         button.addEventListener('click', (e) => {
//             e.preventDefault(); // Prevent the default anchor action

//             // Get the parent element with class "cont1"
//             const productElement = e.target.closest('.cont1');

//             // Extract data attributes from the parent element
//             const productId = productElement.dataset.id;
//             const productName = productElement.dataset.name;
//             const productPrice = productElement.dataset.price;
//             const productImage = productElement.dataset.image;

//             // Add the product to the dynamic array
//             addObjectToArray(productId, productName, productPrice, productImage);
//         });
//     });

// });



// // document.addEventListener('DOMContentLoaded', () => {
// //     const cartBody = document.getElementById('cart-add-pdt');
// //     const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
// //     console.log('DOM fully loaded and parsed');

// //     // Handle "Add to Cart" button clicks
// //     addToCartButtons.forEach(button => {
// //         button.addEventListener('click', (e) => {
// //             e.preventDefault();
// //             const productElement = e.target.closest('.cont1'); // Get the product container
// //             const productId = productElement.dataset.id;
// //             const productName = productElement.dataset.name;
// //             const productPrice = parseFloat(productElement.dataset.price);
// //             const productImage = productElement.dataset.image;

// //             // Check if the product is already in the cart
// //             const existingRow = cartBody.querySelector(`tr[data-id="${productId}"]`);
// //             if (existingRow) {
// //                 // If the product is already in the cart, increment the quantity
// //                 const quantityInput = existingRow.querySelector('.quantity-input');
// //                 quantityInput.value = parseInt(quantityInput.value) + 1;
// //                 updateRowSubtotal(existingRow, productPrice);
// //             } else {
// //                 // Add a new row for the product
// //                 const newRow = document.createElement('tr');
// //                 newRow.setAttribute('data-id', productId);
// //                 newRow.innerHTML = `
// //                     <td><a href="#" class="remove-btn"><i class="far fa-times-circle"></i></a></td>
// //                     <td><img src="${productImage}" alt="${productName}" style="width: 50px;"></td>
// //                     <td>${productName}</td>
// //                     <td>$${productPrice}</td>
// //                     <td><input type="number" class="quantity-input" value="1" min="1"></td>
// //                     <td class="subtotal">$${productPrice}</td>
// //                 `;
// //                 cartBody.appendChild(newRow);
// //             }

// //             updateCartTotal(); // Update the cart total
// //         });
// //     });

// //     // Update the subtotal for a row
// //     function updateRowSubtotal(row, productPrice) {
// //         const quantity = parseInt(row.querySelector('.quantity-input').value);
// //         const subtotalCell = row.querySelector('.subtotal');
// //         subtotalCell.textContent = `$${(quantity * productPrice).toFixed(2)}`;
// //     }

// //     // Update the total for the cart
// //     function updateCartTotal() {
// //         let total = 0;
// //         const rows = cartBody.querySelectorAll('tr');
// //         rows.forEach(row => {
// //             const subtotal = parseFloat(row.querySelector('.subtotal').textContent.replace('$', '')) || 0;
// //             total += subtotal;
// //         });
// //         console.log('Cart Total:', total);
// //         // Optionally update a total display element
// //     }

// //     // Handle quantity changes
// //     cartBody.addEventListener('input', (e) => {
// //         if (e.target.classList.contains('quantity-input')) {
// //             const row = e.target.closest('tr');
// //             const productPrice = parseFloat(row.querySelector('td:nth-child(4)').textContent.replace('$', ''));
// //             updateRowSubtotal(row, productPrice);
// //             updateCartTotal();
// //         }
// //     });

// //     // Handle "Remove" button clicks
// //     cartBody.addEventListener('click', (e) => {
// //         if (e.target.closest('.remove-btn')) {
// //             e.preventDefault();
// //             const row = e.target.closest('tr');
// //             row.remove(); // Remove the row
// //             updateCartTotal(); // Update the cart total
// //         }
// //     });
// //     console.log('HII')
// // });




