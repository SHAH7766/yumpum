import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteInfo } from '../data/siteData';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('yumpum_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [orderType, setOrderType] = useState('delivery'); // 'delivery' | 'dine-in' | 'pickup'
  const [selectedLocation, setSelectedLocation] = useState('loc1');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('yumpum_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  const addToCart = (item, variant = null, quantity = 1, price = 0, pizzaFlavor = null) => {
    setCart(prev => {
      const cartItemId = `${item.id}-${variant?.id || 'reg'}-${pizzaFlavor || 'none'}`;
      const existingIndex = prev.findIndex(i => i.cartItemId === cartItemId);

      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            item,
            variant,
            pizzaFlavor,
            quantity,
            price: price || (variant?.price || Object.values(item.prices)[0] || 0)
          }
        ];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.cartItemId === cartItemId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const meetsMinOrder = orderType !== 'delivery' || subtotal >= siteInfo.minDeliveryOrder;

  const generateWhatsAppMessage = () => {
    let msg = `🔥 *NEW ORDER - YUM PUM* 🔥\n\n`;
    msg += `*Order Type:* ${orderType.toUpperCase()}\n`;
    if (orderType !== 'delivery') {
      msg += `*Location:* ${selectedLocation === 'loc1' ? 'Main Gujranwala Road, Shahdara' : 'BBQ Shawarma Chowk, Begum Kot'}\n`;
    }
    msg += `\n*Customer Details:*\n`;
    msg += `Name: ${customerInfo.name || 'Not provided'}\n`;
    msg += `Phone: ${customerInfo.phone || 'Not provided'}\n`;
    if (orderType === 'delivery') {
      msg += `Address: ${customerInfo.address || 'Not provided'}\n`;
    }
    if (customerInfo.notes) {
      msg += `Notes: ${customerInfo.notes}\n`;
    }
    msg += `\n*Items Ordered:*\n`;
    cart.forEach((c, idx) => {
      const variantName = c.variant ? ` (${c.variant.label || c.variant})` : '';
      const flavorName = c.pizzaFlavor ? ` [Flavor: ${c.pizzaFlavor}]` : '';
      msg += `${idx + 1}. ${c.item.name}${variantName}${flavorName} x ${c.quantity} = Rs. ${c.price * c.quantity}\n`;
    });
    msg += `\n*Subtotal:* Rs. ${subtotal}\n`;
    if (orderType === 'delivery') {
      msg += `*Minimum Order Check:* Rs. ${siteInfo.minDeliveryOrder} (${meetsMinOrder ? 'Passed ✅' : 'Below Minimum ⚠️'})\n`;
    }
    msg += `\n⚡ *Please confirm and dispatch order!*`;
    return encodeURIComponent(msg);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        totalItems,
        orderType,
        setOrderType,
        selectedLocation,
        setSelectedLocation,
        customerInfo,
        setCustomerInfo,
        isCartOpen,
        setIsCartOpen,
        meetsMinOrder,
        generateWhatsAppMessage
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
