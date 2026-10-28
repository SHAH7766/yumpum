import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, Trash2, Plus, Minus, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { siteInfo, locations } from '../data/siteData';
import { useCart } from '../context/CartContext';
import { useLang } from '../context/LangContext';

export const CartDrawer = () => {
  const {
    cart,
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
  } = useCart();
  const { t } = useLang();

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [shake, setShake] = useState(false);

  const handleCheckout = () => {
    if (orderType === 'delivery' && !meetsMinOrder) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setOrderPlaced(true);
    const waUrl = `https://wa.me/923268414405?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, '_blank');

    setTimeout(() => {
      clearCart();
      setOrderPlaced(false);
      setIsCartOpen(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Drawer Slide-over */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`relative w-full max-w-md h-full bg-white dark:bg-[#141414] text-neutral-900 dark:text-white shadow-2xl flex flex-col z-10 overflow-hidden`}
          >
            {/* Header */}
            <div className="p-6 border-b border-black/10 dark:border-white/10 flex items-center justify-between bg-neutral-50 dark:bg-[#1f2028]">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-[#E8262B]" />
                <h2 className="text-xl font-black uppercase tracking-wide">
                  {t("Your Cart", "آپ کا کارٹ")} ({totalItems})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content / Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {orderPlaced ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <CheckCircle2 className="w-20 h-20 text-green-500 animate-bounce" />
                  <h3 className="text-2xl font-black uppercase">Order Sent to WhatsApp!</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Thank you for ordering from YuM PuM. We are preparing your fresh meal right now!
                  </p>
                </div>
              ) : cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-neutral-400">
                  <ShoppingBag className="w-16 h-16 opacity-30" />
                  <p className="text-lg font-bold">{t("Your cart is empty", "آپ کا کارٹ خالی ہے")}</p>
                  <p className="text-xs">Add delicious items from our menu to start your order.</p>
                </div>
              ) : (
                <>
                  {/* Order Type Selector */}
                  <div className="grid grid-cols-3 gap-2 p-1 bg-neutral-100 dark:bg-[#1f2028] rounded-2xl">
                    {['delivery', 'dine-in', 'pickup'].map(type => (
                      <button
                        key={type}
                        onClick={() => setOrderType(type)}
                        className={`py-2 rounded-xl text-xs font-bold uppercase transition ${
                          orderType === type
                            ? 'bg-[#E8262B] text-white shadow-md'
                            : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>

                  {/* Location Selector for Dine-in / Pickup */}
                  {orderType !== 'delivery' && (
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-neutral-400">Select Location</label>
                      <div className="grid grid-cols-2 gap-2">
                        {locations.map(loc => (
                          <button
                            key={loc.id}
                            onClick={() => setSelectedLocation(loc.id)}
                            className={`p-3 rounded-2xl border text-left text-xs transition ${
                              selectedLocation === loc.id
                                ? 'border-[#E8262B] bg-[#E8262B]/10 font-bold'
                                : 'border-black/10 dark:border-white/10 opacity-70'
                            }`}
                          >
                            <span className="block font-bold">{loc.shortName}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Cart Items List */}
                  <div className="space-y-3 divide-y divide-neutral-100 dark:divide-white/5">
                    {cart.map((cartItem) => (
                      <div key={cartItem.cartItemId} className="pt-3 first:pt-0 flex items-center justify-between">
                        <div className="flex-1 pr-4">
                          <h4 className="font-bold text-sm">{cartItem.item.name}</h4>
                          {cartItem.variant && (
                            <span className="text-[11px] font-mono text-[#E8262B] font-semibold">
                              {cartItem.variant.label || cartItem.variant}
                            </span>
                          )}
                          {cartItem.pizzaFlavor && (
                            <span className="block text-[11px] text-[#FFC929] font-semibold">
                              Flavor: {cartItem.pizzaFlavor}
                            </span>
                          )}
                          <span className="block font-mono text-xs text-neutral-500 dark:text-neutral-400">
                            Rs. {cartItem.price} each
                          </span>
                        </div>

                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 bg-neutral-100 dark:bg-[#1f2028] rounded-xl p-1">
                            <button
                              onClick={() => updateQuantity(cartItem.cartItemId, -1)}
                              className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-mono text-xs font-bold w-6 text-center">{cartItem.quantity}</span>
                            <button
                              onClick={() => updateQuantity(cartItem.cartItemId, 1)}
                              className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(cartItem.cartItemId)}
                            className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Customer Info Form */}
                  <div className="space-y-3 pt-4 border-t border-black/10 dark:border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">Customer Details</h4>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={customerInfo.name}
                      onChange={e => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                      className="w-full bg-neutral-100 dark:bg-[#1f2028] px-4 py-2.5 rounded-xl text-xs font-medium border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#E8262B]"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={customerInfo.phone}
                      onChange={e => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full bg-neutral-100 dark:bg-[#1f2028] px-4 py-2.5 rounded-xl text-xs font-medium border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#E8262B]"
                    />
                    {orderType === 'delivery' && (
                      <textarea
                        placeholder="Delivery Address (Shahdara / Lahore) *"
                        rows={2}
                        value={customerInfo.address}
                        onChange={e => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                        className="w-full bg-neutral-100 dark:bg-[#1f2028] px-4 py-2.5 rounded-xl text-xs font-medium border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#E8262B]"
                      />
                    )}
                    <input
                      type="text"
                      placeholder="Special Instructions / Notes (optional)"
                      value={customerInfo.notes}
                      onChange={e => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                      className="w-full bg-neutral-100 dark:bg-[#1f2028] px-4 py-2.5 rounded-xl text-xs font-medium border border-black/10 dark:border-white/10 focus:outline-none focus:border-[#E8262B]"
                    />
                  </div>
                </>
              )}
            </div>

            {/* Footer / Checkout */}
            {!orderPlaced && cart.length > 0 && (
              <div className="p-6 border-t border-black/10 dark:border-white/10 bg-neutral-50 dark:bg-[#1f2028] space-y-4">
                {/* Minimum Order Reminder for Delivery */}
                {orderType === 'delivery' && (
                  <div className={`p-3 rounded-2xl flex items-center space-x-2 text-xs font-semibold ${
                    meetsMinOrder
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                      : 'bg-red-500/10 text-[#E8262B]'
                  }`}>
                    {meetsMinOrder ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                    <span>
                      {meetsMinOrder
                        ? 'Minimum order requirement met!'
                        : `Add Rs. ${siteInfo.minDeliveryOrder - subtotal} more to reach Rs. 700 minimum delivery.`}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between text-base font-black">
                  <span>Subtotal:</span>
                  <span className="font-mono text-[#E8262B]">Rs. {subtotal}</span>
                </div>

                <motion.button
                  animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  onClick={handleCheckout}
                  disabled={!customerInfo.name || !customerInfo.phone || (orderType === 'delivery' && !customerInfo.address)}
                  className={`w-full py-3.5 rounded-2xl font-black text-white uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl transition ${
                    !customerInfo.name || !customerInfo.phone || (orderType === 'delivery' && !customerInfo.address)
                      ? 'bg-neutral-400 cursor-not-allowed opacity-60'
                      : 'bg-green-600 hover:bg-green-700 active:scale-98'
                  }`}
                >
                  <span>Send Order on WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
