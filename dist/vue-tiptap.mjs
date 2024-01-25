import { openBlock as j, createElementBlock as W, resolveComponent as Ti, normalizeClass as we, createVNode as fe, defineComponent as Un, ref as es, onMounted as ll, onBeforeUnmount as ts, h as Dt, reactive as ac, markRaw as cc, getCurrentInstance as uc, watchEffect as dc, nextTick as fc, unref as hc, Teleport as pc, customRef as mc, createElementVNode as gc, Fragment as yc, renderList as vc, createCommentVNode as le } from "vue";
const bc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M5,14 C7.76005315,14.0033061 9.99669388,16.2399468 10,19 C10,21.7614237 7.76142375,24 5,24 C2.23857625,24 1.77635684e-15,21.7614237 1.77635684e-15,19 C1.77635684e-15,16.2385763 2.23857625,14 5,14 Z M7.5,19.9375 C8.01776695,19.9375 8.4375,19.517767 8.4375,19 C8.4375,18.482233 8.01776695,18.0625 7.5,18.0625 L6.25,18.0625 C6.07741102,18.0625 5.9375,17.922589 5.9375,17.75 L5.9375,16.5 C5.9375,15.982233 5.51776695,15.5625 5,15.5625 C4.48223305,15.5625 4.0625,15.982233 4.0625,16.5 L4.0625,17.75 C4.0625,17.922589 3.92258898,18.0625 3.75,18.0625 L2.5,18.0625 C1.98223305,18.0625 1.5625,18.482233 1.5625,19 C1.5625,19.517767 1.98223305,19.9375 2.5,19.9375 L3.75,19.9375 C3.92258898,19.9375 4.0625,20.077411 4.0625,20.25 L4.0625,21.5 C4.0625,22.017767 4.48223305,22.4375 5,22.4375 C5.51776695,22.4375 5.9375,22.017767 5.9375,21.5 L5.9375,20.25 C5.9375,20.077411 6.07741102,19.9375 6.25,19.9375 L7.5,19.9375 Z M16,19 C16,20.6568542 17.3431458,22 19,22 C20.6568542,22 22,20.6568542 22,19 L22,5 C22,3.34314575 20.6568542,2 19,2 C17.3431458,2 16,3.34314575 16,5 L16,19 Z M14,19 L14,5 C14,2.23857625 16.2385763,0 19,0 C21.7614237,0 24,2.23857625 24,5 L24,19 C24,21.7614237 21.7614237,24 19,24 C16.2385763,24 14,21.7614237 14,19 Z"/>
</svg>
`, kc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19,14 C21.7600532,14.0033061 23.9966939,16.2399468 24,19 C24,21.7614237 21.7614237,24 19,24 C16.2385763,24 14,21.7614237 14,19 C14,16.2385763 16.2385763,14 19,14 Z M21.5,19.9375 C22.017767,19.9375 22.4375,19.517767 22.4375,19 C22.4375,18.482233 22.017767,18.0625 21.5,18.0625 L20.25,18.0625 C20.077411,18.0625 19.9375,17.922589 19.9375,17.75 L19.9375,16.5 C19.9375,15.982233 19.517767,15.5625 19,15.5625 C18.482233,15.5625 18.0625,15.982233 18.0625,16.5 L18.0625,17.75 C18.0625,17.922589 17.922589,18.0625 17.75,18.0625 L16.5,18.0625 C15.982233,18.0625 15.5625,18.482233 15.5625,19 C15.5625,19.517767 15.982233,19.9375 16.5,19.9375 L17.75,19.9375 C17.922589,19.9375 18.0625,20.077411 18.0625,20.25 L18.0625,21.5 C18.0625,22.017767 18.482233,22.4375 19,22.4375 C19.517767,22.4375 19.9375,22.017767 19.9375,21.5 L19.9375,20.25 C19.9375,20.077411 20.077411,19.9375 20.25,19.9375 L21.5,19.9375 Z M2,19 C2,20.6568542 3.34314575,22 5,22 C6.65685425,22 8,20.6568542 8,19 L8,5 C8,3.34314575 6.65685425,2 5,2 C3.34314575,2 2,3.34314575 2,5 L2,19 Z M-2.7585502e-16,19 L5.81397739e-16,5 C-1.37692243e-16,2.23857625 2.23857625,0 5,0 C7.76142375,0 10,2.23857625 10,5 L10,19 C10,21.7614237 7.76142375,24 5,24 C2.23857625,24 4.43234962e-16,21.7614237 -2.7585502e-16,19 Z"/>
</svg>
`, wc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19,0 C21.7600532,0.00330611633 23.9966939,2.23994685 24,5 C24,7.76142375 21.7614237,10 19,10 C16.2385763,10 14,7.76142375 14,5 C14,2.23857625 16.2385763,0 19,0 Z M21.5,5.9375 C22.017767,5.9375 22.4375,5.51776695 22.4375,5 C22.4375,4.48223305 22.017767,4.0625 21.5,4.0625 L20.25,4.0625 C20.077411,4.0625 19.9375,3.92258898 19.9375,3.75 L19.9375,2.5 C19.9375,1.98223305 19.517767,1.5625 19,1.5625 C18.482233,1.5625 18.0625,1.98223305 18.0625,2.5 L18.0625,3.75 C18.0625,3.92258898 17.922589,4.0625 17.75,4.0625 L16.5,4.0625 C15.982233,4.0625 15.5625,4.48223305 15.5625,5 C15.5625,5.51776695 15.982233,5.9375 16.5,5.9375 L17.75,5.9375 C17.922589,5.9375 18.0625,6.07741102 18.0625,6.25 L18.0625,7.5 C18.0625,8.01776695 18.482233,8.4375 19,8.4375 C19.517767,8.4375 19.9375,8.01776695 19.9375,7.5 L19.9375,6.25 C19.9375,6.07741102 20.077411,5.9375 20.25,5.9375 L21.5,5.9375 Z M5,16 C3.34314575,16 2,17.3431458 2,19 C2,20.6568542 3.34314575,22 5,22 L19,22 C20.6568542,22 22,20.6568542 22,19 C22,17.3431458 20.6568542,16 19,16 L5,16 Z M5,14 L19,14 C21.7614237,14 24,16.2385763 24,19 C24,21.7614237 21.7614237,24 19,24 L5,24 C2.23857625,24 3.38176876e-16,21.7614237 0,19 C-1.2263553e-15,16.2385763 2.23857625,14 5,14 Z"/>
</svg>
`, xc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19,14 C21.7600532,14.0033061 23.9966939,16.2399468 24,19 C24,21.7614237 21.7614237,24 19,24 C16.2385763,24 14,21.7614237 14,19 C14,16.2385763 16.2385763,14 19,14 Z M21.5,19.9375 C22.017767,19.9375 22.4375,19.517767 22.4375,19 C22.4375,18.482233 22.017767,18.0625 21.5,18.0625 L20.25,18.0625 C20.077411,18.0625 19.9375,17.922589 19.9375,17.75 L19.9375,16.5 C19.9375,15.982233 19.517767,15.5625 19,15.5625 C18.482233,15.5625 18.0625,15.982233 18.0625,16.5 L18.0625,17.75 C18.0625,17.922589 17.922589,18.0625 17.75,18.0625 L16.5,18.0625 C15.982233,18.0625 15.5625,18.482233 15.5625,19 C15.5625,19.517767 15.982233,19.9375 16.5,19.9375 L17.75,19.9375 C17.922589,19.9375 18.0625,20.077411 18.0625,20.25 L18.0625,21.5 C18.0625,22.017767 18.482233,22.4375 19,22.4375 C19.517767,22.4375 19.9375,22.017767 19.9375,21.5 L19.9375,20.25 C19.9375,20.077411 20.077411,19.9375 20.25,19.9375 L21.5,19.9375 Z M5,2 C3.34314575,2 2,3.34314575 2,5 C2,6.65685425 3.34314575,8 5,8 L19,8 C20.6568542,8 22,6.65685425 22,5 C22,3.34314575 20.6568542,2 19,2 L5,2 Z M5,0 L19,0 C21.7614237,-5.07265313e-16 24,2.23857625 24,5 C24,7.76142375 21.7614237,10 19,10 L5,10 C2.23857625,10 3.38176876e-16,7.76142375 0,5 C-1.2263553e-15,2.23857625 2.23857625,5.07265313e-16 5,0 Z"/>
</svg>
`, Cc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>text-bold</title><path d="M17.194,10.962A6.271,6.271,0,0,0,12.844.248H4.3a1.25,1.25,0,0,0,0,2.5H5.313a.25.25,0,0,1,.25.25V21a.25.25,0,0,1-.25.25H4.3a1.25,1.25,0,1,0,0,2.5h9.963a6.742,6.742,0,0,0,2.93-12.786Zm-4.35-8.214a3.762,3.762,0,0,1,0,7.523H8.313a.25.25,0,0,1-.25-.25V3a.25.25,0,0,1,.25-.25Zm1.42,18.5H8.313a.25.25,0,0,1-.25-.25V13.021a.25.25,0,0,1,.25-.25h4.531c.017,0,.033,0,.049,0l.013,0h1.358a4.239,4.239,0,0,1,0,8.477Z"/></svg>
`, Sc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checklist-alternate</title><path d="M21,0H3A3,3,0,0,0,0,3V21a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V3A3,3,0,0,0,21,0Zm1,21a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H21a1,1,0,0,1,1,1Z"/><path d="M11.249,4.5a1.251,1.251,0,0,0-1.75.25L7.365,7.6l-.482-.481A1.25,1.25,0,0,0,5.116,8.883l1.5,1.5A1.262,1.262,0,0,0,8.5,10.249l3-4A1.25,1.25,0,0,0,11.249,4.5Z"/><path d="M11.249,13.5a1.251,1.251,0,0,0-1.75.25L7.365,16.6l-.482-.481a1.25,1.25,0,1,0-1.767,1.768l1.5,1.5A1.265,1.265,0,0,0,8.5,19.249l3-4A1.25,1.25,0,0,0,11.249,13.5Z"/><path d="M18.5,7.749H14a1.25,1.25,0,0,0,0,2.5h4.5a1.25,1.25,0,0,0,0-2.5Z"/><path d="M18.5,15.749H14a1.25,1.25,0,0,0,0,2.5h4.5a1.25,1.25,0,1,0,0-2.5Z"/></svg>
`, Mc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>angle-brackets</title><path d="M9.147,21.552a1.244,1.244,0,0,1-.895-.378L.84,13.561a2.257,2.257,0,0,1,0-3.125L8.252,2.823a1.25,1.25,0,0,1,1.791,1.744l-6.9,7.083a.5.5,0,0,0,0,.7l6.9,7.082a1.25,1.25,0,0,1-.9,2.122Z"/><path d="M14.854,21.552a1.25,1.25,0,0,1-.9-2.122l6.9-7.083a.5.5,0,0,0,0-.7l-6.9-7.082a1.25,1.25,0,0,1,1.791-1.744l7.411,7.612a2.257,2.257,0,0,1,0,3.125l-7.412,7.614A1.244,1.244,0,0,1,14.854,21.552Zm6.514-9.373h0Z"/></svg>
`, Oc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M2,19 C2,20.6568542 3.34314575,22 5,22 L19,22 C20.6568542,22 22,20.6568542 22,19 L22,5 C22,3.34314575 20.6568542,2 19,2 L5,2 C3.34314575,2 2,3.34314575 2,5 L2,19 Z M-1.16403344e-15,19 L-3.0678068e-16,5 C-6.44957556e-16,2.23857625 2.23857625,0 5,0 L19,0 C21.7614237,0 24,2.23857625 24,5 L24,19 C24,21.7614237 21.7614237,24 19,24 L5,24 C2.23857625,24 9.50500275e-16,21.7614237 -1.16403344e-15,19 Z M12,10 C12.5522847,10 13,10.4477153 13,11 L13,13 C13,13.5522847 12.5522847,14 12,14 C11.4477153,14 11,13.5522847 11,13 L11,11 C11,10.4477153 11.4477153,10 12,10 Z M12,16 C12.5522847,16 13,16.4477153 13,17 L13,20 C13,20.5522847 12.5522847,21 12,21 C11.4477153,21 11,20.5522847 11,20 L11,17 C11,16.4477153 11.4477153,16 12,16 Z M12,3 C12.5522847,3 13,3.44771525 13,4 L13,7 C13,7.55228475 12.5522847,8 12,8 C11.4477153,8 11,7.55228475 11,7 L11,4 C11,3.44771525 11.4477153,3 12,3 Z"/>
</svg>
`, Tc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12.6414391,21.9312708 C12.9358807,22.5689168 13.3234155,23.1547532 13.7866134,23.6713497 C13.2317936,23.8836754 12.6294813,24 12,24 C9.23857625,24 7,21.7614237 7,19 L7,5 C7,2.23857625 9.23857625,0 12,0 C14.7614237,0 17,2.23857625 17,5 L17,12.2898787 C16.2775651,12.5048858 15.6040072,12.8333806 15,13.2546893 L15,5 C15,3.34314575 13.6568542,2 12,2 C10.3431458,2 9,3.34314575 9,5 L9,19 C9,20.6568542 10.3431458,22 12,22 C12.220157,22 12.4347751,21.9762852 12.6414391,21.9312708 Z M19,14 C21.7600532,14.0033061 23.9966939,16.2399468 24,19 C24,21.7614237 21.7614237,24 19,24 C16.2385763,24 14,21.7614237 14,19 C14,16.2385763 16.2385763,14 19,14 Z M16.5,19.9375 L21.5,19.9375 C22.017767,19.9375 22.4375,19.517767 22.4375,19 C22.4375,18.482233 22.017767,18.0625 21.5,18.0625 L16.5,18.0625 C15.982233,18.0625 15.5625,18.482233 15.5625,19 C15.5625,19.517767 15.982233,19.9375 16.5,19.9375 Z"/>
</svg>
`, Ec = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M13.2546893,15 C12.8333806,15.6040072 12.5048858,16.2775651 12.2898787,17 L5,17 C2.23857625,17 3.38176876e-16,14.7614237 0,12 C-1.2263553e-15,9.23857625 2.23857625,7 5,7 L19,7 C21.7614237,7 24,9.23857625 24,12 C24,12.6294813 23.8836754,13.2317936 23.6713497,13.7866134 C23.1547532,13.3234155 22.5689168,12.9358807 21.9312708,12.6414391 C21.9762852,12.4347751 22,12.220157 22,12 C22,10.3431458 20.6568542,9 19,9 L5,9 C3.34314575,9 2,10.3431458 2,12 C2,13.6568542 3.34314575,15 5,15 L13.2546893,15 Z M19,14 C21.7600532,14.0033061 23.9966939,16.2399468 24,19 C24,21.7614237 21.7614237,24 19,24 C16.2385763,24 14,21.7614237 14,19 C14,16.2385763 16.2385763,14 19,14 Z M16.5,19.9375 L21.5,19.9375 C22.017767,19.9375 22.4375,19.517767 22.4375,19 C22.4375,18.482233 22.017767,18.0625 21.5,18.0625 L16.5,18.0625 C15.982233,18.0625 15.5625,18.482233 15.5625,19 C15.5625,19.517767 15.982233,19.9375 16.5,19.9375 Z"/>
</svg>
`, Ac = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M19,14 C21.7600532,14.0033061 23.9966939,16.2399468 24,19 C24,21.7614237 21.7614237,24 19,24 C16.2385763,24 14,21.7614237 14,19 C14,16.2385763 16.2385763,14 19,14 Z M16.5,19.9375 L21.5,19.9375 C22.017767,19.9375 22.4375,19.517767 22.4375,19 C22.4375,18.482233 22.017767,18.0625 21.5,18.0625 L16.5,18.0625 C15.982233,18.0625 15.5625,18.482233 15.5625,19 C15.5625,19.517767 15.982233,19.9375 16.5,19.9375 Z M12.2898787,17 L9,17 L9,22 L12.6736312,22 C13.0297295,22.7496048 13.515133,23.4258795 14.1010173,24 L5,24 C2.23857625,24 -1.43817996e-15,21.7614237 -1.77635684e-15,19 L-3.55271368e-15,5 C-3.89089055e-15,2.23857625 2.23857625,5.07265313e-16 5,-1.77635684e-15 L19,-1.77635684e-15 C21.7614237,-2.28362215e-15 24,2.23857625 24,5 L24,7.82313285 C24.0122947,7.88054124 24.0187107,7.93964623 24.0187107,8 C24.0187107,8.06035377 24.0122947,8.11945876 24,8.17686715 L24,14.1010173 C23.4258795,13.515133 22.7496048,13.0297295 22,12.6736312 L22,9 L17,9 L17,12.2898787 C16.2775651,12.5048858 15.6040072,12.8333806 15,13.2546893 L15,9 L9,9 L9,15 L13.2546893,15 C12.8333806,15.6040072 12.5048858,16.2775651 12.2898787,17 Z M17,7 L22,7 L22,5 C22,3.34314575 20.6568542,2 19,2 L17,2 L17,7 Z M15,7 L15,2 L9,2 L9,7 L15,7 Z M7,2 L5,2 C3.34314575,2 2,3.34314575 2,5 L2,7 L7,7 L7,2 Z M2,9 L2,15 L7,15 L7,9 L2,9 Z M2,17 L2,19 C2,20.6568542 3.34314575,22 5,22 L7,22 L7,17 L2,17 Z"/>
</svg>
`, Nc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M11.999,0.5 C5.649,0.5 0.5,5.648 0.5,12 C0.5,17.082 3.794,21.392 8.365,22.914 C8.939,23.017 9.121,22.678 9.121,22.373 C9.121,22.099 9.127,21.336 9.121,20.376 C5.923,21.07 5.26,18.861 5.26,18.861 C4.737,17.532 3.985,17.179 3.985,17.179 C2.94,16.465 4.062,16.48 4.062,16.48 C5.215,16.56 5.824,17.664 5.824,17.664 C6.85,19.422 8.515,18.914 9.17,18.62 C9.276,17.878 9.572,17.369 9.901,17.084 C7.347,16.792 4.663,15.807 4.663,11.398 C4.663,10.143 5.111,9.117 5.847,8.312 C5.729,8.023 5.333,6.852 5.959,5.269 C5.959,5.269 6.926,4.96 9.121,6.449 C10.039,6.193 11.023,6.066 12.001,6.061 C12.977,6.066 13.961,6.193 14.881,6.449 C17.076,4.961 18.04,5.269 18.04,5.269 C18.667,6.852 18.272,8.023 18.154,8.312 C18.89,9.117 19.337,10.143 19.337,11.398 C19.337,15.818 16.648,16.789 14.086,17.072 C14.498,17.429 14.873,18.119 14.873,19.192 C14.873,20.63 14.873,21.998 14.873,22.376 C14.873,22.684 15.059,23.023 15.643,22.912 C20.209,21.389 23.5,17.08 23.5,12 C23.5,5.648 18.352,0.5 11.999,0.5 Z"/>
</svg>
`, Dc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>horizontal-rule</title>
  <path d="M5,13 C4.44771525,13 4,12.5522847 4,12 C4,11.4477153 4.44771525,11 5,11 L19,11 C19.5522847,11 20,11.4477153 20,12 C20,12.5522847 19.5522847,13 19,13 L5,13 Z"/>
</svg>
`, Lc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>paginate-filter-picture-alternate</title><circle cx="9.75" cy="6.247" r="2.25"/><path d="M16.916,8.71A1.027,1.027,0,0,0,16,8.158a1.007,1.007,0,0,0-.892.586L13.55,12.178a.249.249,0,0,1-.422.053l-.82-1.024a1,1,0,0,0-.813-.376,1.007,1.007,0,0,0-.787.426L7.59,15.71A.5.5,0,0,0,8,16.5H20a.5.5,0,0,0,.425-.237.5.5,0,0,0,.022-.486Z"/><path d="M22,0H5.5a2,2,0,0,0-2,2V18.5a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0Zm-.145,18.354a.5.5,0,0,1-.354.146H6a.5.5,0,0,1-.5-.5V2.5A.5.5,0,0,1,6,2H21.5a.5.5,0,0,1,.5.5V18A.5.5,0,0,1,21.855,18.351Z"/><path d="M19.5,22H2.5a.5.5,0,0,1-.5-.5V4.5a1,1,0,0,0-2,0V22a2,2,0,0,0,2,2H19.5a1,1,0,0,0,0-2Z"/></svg>
`, Ic = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>text-italic</title><path d="M22.5.248H14.863a1.25,1.25,0,0,0,0,2.5h1.086a.25.25,0,0,1,.211.384L4.78,21.017a.5.5,0,0,1-.422.231H1.5a1.25,1.25,0,0,0,0,2.5H9.137a1.25,1.25,0,0,0,0-2.5H8.051a.25.25,0,0,1-.211-.384L19.22,2.98a.5.5,0,0,1,.422-.232H22.5a1.25,1.25,0,0,0,0-2.5Z"/></svg>
`, Rc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>hyperlink-2</title><path d="M12.406,14.905a1,1,0,0,0-.543,1.307,1,1,0,0,1-.217,1.09L8.818,20.131a2,2,0,0,1-2.828,0L3.868,18.01a2,2,0,0,1,0-2.829L6.7,12.353a1.013,1.013,0,0,1,1.091-.217,1,1,0,0,0,.763-1.849,3.034,3.034,0,0,0-3.268.652L2.454,13.767a4.006,4.006,0,0,0,0,5.657l2.122,2.121a4,4,0,0,0,5.656,0l2.829-2.828a3.008,3.008,0,0,0,.651-3.27A1,1,0,0,0,12.406,14.905Z"/><path d="M7.757,16.241a1.011,1.011,0,0,0,1.414,0L16.95,8.463a1,1,0,0,0-1.414-1.414L7.757,14.827A1,1,0,0,0,7.757,16.241Z"/><path d="M21.546,4.574,19.425,2.453a4.006,4.006,0,0,0-5.657,0L10.939,5.281a3.006,3.006,0,0,0-.651,3.269,1,1,0,1,0,1.849-.764A1,1,0,0,1,12.354,6.7l2.828-2.828a2,2,0,0,1,2.829,0l2.121,2.121a2,2,0,0,1,0,2.829L17.3,11.645a1.015,1.015,0,0,1-1.091.217,1,1,0,0,0-.765,1.849,3.026,3.026,0,0,0,3.27-.651l2.828-2.828A4.007,4.007,0,0,0,21.546,4.574Z"/></svg>
`, Pc = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>read-email-at-alternate</title><path d="M12,.5A11.634,11.634,0,0,0,.262,12,11.634,11.634,0,0,0,12,23.5a11.836,11.836,0,0,0,6.624-2,1.25,1.25,0,1,0-1.393-2.076A9.34,9.34,0,0,1,12,21a9.132,9.132,0,0,1-9.238-9A9.132,9.132,0,0,1,12,3a9.132,9.132,0,0,1,9.238,9v.891a1.943,1.943,0,0,1-3.884,0V12A5.355,5.355,0,1,0,12,17.261a5.376,5.376,0,0,0,3.861-1.634,4.438,4.438,0,0,0,7.877-2.736V12A11.634,11.634,0,0,0,12,.5Zm0,14.261A2.763,2.763,0,1,1,14.854,12,2.812,2.812,0,0,1,12,14.761Z"/></svg>', Bc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>list-numbers</title><path d="M7.75,4.5h15a1,1,0,0,0,0-2h-15a1,1,0,0,0,0,2Z"/><path d="M22.75,11h-15a1,1,0,1,0,0,2h15a1,1,0,0,0,0-2Z"/><path d="M22.75,19.5h-15a1,1,0,0,0,0,2h15a1,1,0,0,0,0-2Z"/><path d="M2.212,17.248A2,2,0,0,0,.279,18.732a.75.75,0,1,0,1.45.386.5.5,0,1,1,.483.63.75.75,0,1,0,0,1.5.5.5,0,1,1-.482.635.75.75,0,1,0-1.445.4,2,2,0,1,0,3.589-1.648.251.251,0,0,1,0-.278,2,2,0,0,0-1.662-3.111Z"/><path d="M4.25,10.748a2,2,0,0,0-4,0,.75.75,0,0,0,1.5,0,.5.5,0,0,1,1,0,1.031,1.031,0,0,1-.227.645L.414,14.029A.75.75,0,0,0,1,15.248H3.5a.75.75,0,0,0,0-1.5H3.081a.249.249,0,0,1-.195-.406L3.7,12.33A2.544,2.544,0,0,0,4.25,10.748Z"/><path d="M4,5.248H3.75A.25.25,0,0,1,3.5,5V1.623A1.377,1.377,0,0,0,2.125.248H1.5a.75.75,0,0,0,0,1.5h.25A.25.25,0,0,1,2,2V5a.25.25,0,0,1-.25.25H1.5a.75.75,0,0,0,0,1.5H4a.75.75,0,0,0,0-1.5Z"/></svg>
`, Vc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>paragraph</title><path d="M22.5.248H7.228a6.977,6.977,0,1,0,0,13.954H9.546a.25.25,0,0,1,.25.25V22.5a1.25,1.25,0,0,0,2.5,0V3a.25.25,0,0,1,.25-.25h3.682a.25.25,0,0,1,.25.25V22.5a1.25,1.25,0,0,0,2.5,0V3a.249.249,0,0,1,.25-.25H22.5a1.25,1.25,0,0,0,0-2.5ZM9.8,11.452a.25.25,0,0,1-.25.25H7.228a4.477,4.477,0,1,1,0-8.954H9.546A.25.25,0,0,1,9.8,3Z"/></svg>
`, zc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close-quote</title><path d="M18.559,3.932a4.942,4.942,0,1,0,0,9.883,4.609,4.609,0,0,0,1.115-.141.25.25,0,0,1,.276.368,6.83,6.83,0,0,1-5.878,3.523,1.25,1.25,0,0,0,0,2.5,9.71,9.71,0,0,0,9.428-9.95V8.873A4.947,4.947,0,0,0,18.559,3.932Z"/><path d="M6.236,3.932a4.942,4.942,0,0,0,0,9.883,4.6,4.6,0,0,0,1.115-.141.25.25,0,0,1,.277.368A6.83,6.83,0,0,1,1.75,17.565a1.25,1.25,0,0,0,0,2.5,9.711,9.711,0,0,0,9.428-9.95V8.873A4.947,4.947,0,0,0,6.236,3.932Z"/></svg>
`, Hc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>redo</title><path d="M22.608.161a.5.5,0,0,0-.545.108L19.472,2.86a.25.25,0,0,1-.292.045A12.537,12.537,0,0,0,6.214,3.77,12.259,12.259,0,0,0,6.1,23.632a1.25,1.25,0,0,0,1.476-2.018A9.759,9.759,0,0,1,7.667,5.805a10,10,0,0,1,9.466-1.1.25.25,0,0,1,.084.409l-1.85,1.85a.5.5,0,0,0,.354.853h6.7a.5.5,0,0,0,.5-.5V.623A.5.5,0,0,0,22.608.161Z"/></svg>
`, Fc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-2-alternate</title><path d="M20.485,3.511A12.01,12.01,0,1,0,24,12,12.009,12.009,0,0,0,20.485,3.511Zm-1.767,15.21A9.51,9.51,0,1,1,21.5,12,9.508,9.508,0,0,1,18.718,18.721Z"/><path d="M16.987,7.01a1.275,1.275,0,0,0-1.8,0l-3.177,3.177L8.829,7.01A1.277,1.277,0,0,0,7.024,8.816L10.2,11.993,7.024,15.171a1.277,1.277,0,0,0,1.805,1.806L12.005,13.8l3.177,3.178a1.277,1.277,0,0,0,1.8-1.806l-3.176-3.178,3.176-3.177A1.278,1.278,0,0,0,16.987,7.01Z"/></svg>
`, _c = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>text-strike-through</title><path d="M23.75,12.952A1.25,1.25,0,0,0,22.5,11.7H13.564a.492.492,0,0,1-.282-.09c-.722-.513-1.482-.981-2.218-1.432-2.8-1.715-4.5-2.9-4.5-4.863,0-2.235,2.207-2.569,3.523-2.569a4.54,4.54,0,0,1,3.081.764A2.662,2.662,0,0,1,13.615,5.5l0,.3a1.25,1.25,0,1,0,2.5,0l0-.268A4.887,4.887,0,0,0,14.95,1.755C13.949.741,12.359.248,10.091.248c-3.658,0-6.023,1.989-6.023,5.069,0,2.773,1.892,4.512,4,5.927a.25.25,0,0,1-.139.458H1.5a1.25,1.25,0,0,0,0,2.5H12.477a.251.251,0,0,1,.159.058,4.339,4.339,0,0,1,1.932,3.466c0,3.268-3.426,3.522-4.477,3.522-1.814,0-3.139-.405-3.834-1.173a3.394,3.394,0,0,1-.65-2.7,1.25,1.25,0,0,0-2.488-.246A5.76,5.76,0,0,0,4.4,21.753c1.2,1.324,3.114,2,5.688,2,4.174,0,6.977-2.42,6.977-6.022a6.059,6.059,0,0,0-.849-3.147.25.25,0,0,1,.216-.377H22.5A1.25,1.25,0,0,0,23.75,12.952Z"/></svg>
`, $c = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M17,17 L17,22 L19,22 C20.6568542,22 22,20.6568542 22,19 L22,17 L17,17 Z M15,17 L9,17 L9,22 L15,22 L15,17 Z M17,15 L22,15 L22,9 L17,9 L17,15 Z M15,15 L15,9 L9,9 L9,15 L15,15 Z M17,7 L22,7 L22,5 C22,3.34314575 20.6568542,2 19,2 L17,2 L17,7 Z M15,7 L15,2 L9,2 L9,7 L15,7 Z M24,16.1768671 L24,19 C24,21.7614237 21.7614237,24 19,24 L5,24 C2.23857625,24 2.11453371e-15,21.7614237 1.77635684e-15,19 L0,5 C-3.38176876e-16,2.23857625 2.23857625,2.28362215e-15 5,0 L19,0 C21.7614237,-5.07265313e-16 24,2.23857625 24,5 L24,7.82313285 C24.0122947,7.88054124 24.0187107,7.93964623 24.0187107,8 C24.0187107,8.06035377 24.0122947,8.11945876 24,8.17686715 L24,15.8231329 C24.0122947,15.8805412 24.0187107,15.9396462 24.0187107,16 C24.0187107,16.0603538 24.0122947,16.1194588 24,16.1768671 Z M7,2 L5,2 C3.34314575,2 2,3.34314575 2,5 L2,7 L7,7 L7,2 Z M2,9 L2,15 L7,15 L7,9 L2,9 Z M2,17 L2,19 C2,20.6568542 3.34314575,22 5,22 L7,22 L7,17 L2,17 Z"/>
</svg>
`, jc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>list-bullets</title><circle cx="2.5" cy="3.998" r="2.5"/><path d="M8.5,5H23a1,1,0,0,0,0-2H8.5a1,1,0,0,0,0,2Z"/><circle cx="2.5" cy="11.998" r="2.5"/><path d="M23,11H8.5a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/><circle cx="2.5" cy="19.998" r="2.5"/><path d="M23,19H8.5a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/></svg>
`, Wc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>text-underline</title><path d="M22.5,21.248H1.5a1.25,1.25,0,0,0,0,2.5h21a1.25,1.25,0,0,0,0-2.5Z"/><path d="M1.978,2.748H3.341a.25.25,0,0,1,.25.25v8.523a8.409,8.409,0,0,0,16.818,0V3a.25.25,0,0,1,.25-.25h1.363a1.25,1.25,0,0,0,0-2.5H16.3a1.25,1.25,0,0,0,0,2.5h1.363a.25.25,0,0,1,.25.25v8.523a5.909,5.909,0,0,1-11.818,0V3a.25.25,0,0,1,.25-.25H7.7a1.25,1.25,0,1,0,0-2.5H1.978a1.25,1.25,0,0,0,0,2.5Z"/></svg>
`, qc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>undo</title><path d="M17.786,3.77A12.542,12.542,0,0,0,4.821,2.905a.249.249,0,0,1-.292-.045L1.937.269A.507.507,0,0,0,1.392.16a.5.5,0,0,0-.308.462v6.7a.5.5,0,0,0,.5.5h6.7a.5.5,0,0,0,.354-.854L6.783,5.115a.253.253,0,0,1-.068-.228.249.249,0,0,1,.152-.181,10,10,0,0,1,9.466,1.1,9.759,9.759,0,0,1,.094,15.809A1.25,1.25,0,0,0,17.9,23.631a12.122,12.122,0,0,0,5.013-9.961A12.125,12.125,0,0,0,17.786,3.77Z"/></svg>
`, ns = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, Kc = {
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  data() {
    return {
      icons: /* @__PURE__ */ Object.assign({
        "../assets/icons/add_col_after.svg": bc,
        "../assets/icons/add_col_before.svg": kc,
        "../assets/icons/add_row_after.svg": wc,
        "../assets/icons/add_row_before.svg": xc,
        "../assets/icons/bold.svg": Cc,
        "../assets/icons/checklist.svg": Sc,
        "../assets/icons/code.svg": Mc,
        "../assets/icons/combine_cells.svg": Oc,
        "../assets/icons/delete_col.svg": Tc,
        "../assets/icons/delete_row.svg": Ec,
        "../assets/icons/delete_table.svg": Ac,
        "../assets/icons/github.svg": Nc,
        "../assets/icons/hr.svg": Dc,
        "../assets/icons/image.svg": Lc,
        "../assets/icons/italic.svg": Ic,
        "../assets/icons/link.svg": Rc,
        "../assets/icons/mention.svg": Pc,
        "../assets/icons/ol.svg": Bc,
        "../assets/icons/paragraph.svg": Vc,
        "../assets/icons/quote.svg": zc,
        "../assets/icons/redo.svg": Hc,
        "../assets/icons/remove.svg": Fc,
        "../assets/icons/strike.svg": _c,
        "../assets/icons/table.svg": $c,
        "../assets/icons/ul.svg": jc,
        "../assets/icons/underline.svg": Wc,
        "../assets/icons/undo.svg": qc
      })
    };
  },
  computed: {
    svg() {
      return this.icons[`../assets/icons/${this.name}.svg`];
    }
  }
}, Jc = ["innerHTML"];
function Uc(n, e, t, r, i, s) {
  return j(), W("i", { innerHTML: s.svg }, null, 8, Jc);
}
const Zc = /* @__PURE__ */ ns(Kc, [["render", Uc]]), Gc = {
  // created: function() {}
  components: {
    InlineSvg: Zc
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "normal"
    },
    modifier: {
      type: Object,
      default: null
    },
    fixAlign: {
      type: Boolean,
      default: !1
    }
  }
};
function Yc(n, e, t, r, i, s) {
  const o = Ti("InlineSvg");
  return j(), W("div", {
    class: we(["icon", [`icon--${t.name}`, `icon--${t.size}`, { "has-align-fix": t.fixAlign }]])
  }, [
    fe(o, {
      name: `${t.name}`
    }, null, 8, ["name"])
  ], 2);
}
const Xc = /* @__PURE__ */ ns(Gc, [["render", Yc]]);
function X(n) {
  this.content = n;
}
X.prototype = {
  constructor: X,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n)
        return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), s = r.content.slice();
    return i == -1 ? s.push(t || n, e) : (s[i + 1] = e, t && (s[i] = t)), new X(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1)
      return this;
    var t = this.content.slice();
    return t.splice(e, 2), new X(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new X([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new X(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), s = r.find(n);
    return i.splice(s == -1 ? i.length : s, 0, e, t), new X(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = X.from(n), n.size ? new X(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = X.from(n), n.size ? new X(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = X.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
X.from = function(n) {
  if (n instanceof X)
    return n;
  var e = [];
  if (n)
    for (var t in n)
      e.push(t, n[t]);
  return new X(e);
};
function al(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = al(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function cl(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = cl(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class k {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      l.isText ? (s += l.text.slice(Math.max(e, a) - a, t - a), o = !r) : l.isLeaf ? (i ? s += typeof i == "function" ? i(l) : i : l.type.spec.leafText && (s += l.type.spec.leafText(l)), o = !r) : !o && l.isBlock && (s += r, o = !0);
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new k(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new k(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? k.empty : e == 0 && t == this.content.length ? this : new k(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new k(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new k([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new k(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return al(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return cl(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. (Not public.)
  */
  findIndex(e, t = -1) {
    if (e == 0)
      return cr(0, e);
    if (e == this.size)
      return cr(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let s = this.child(r), o = i + s.nodeSize;
      if (o >= e)
        return o == e || t > 0 ? cr(r + 1, o) : cr(r, i);
      i = o;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return k.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new k(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return k.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new k(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return k.empty;
    if (e instanceof k)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new k([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
k.empty = new k([], 0);
const Xr = { index: 0, offset: 0 };
function cr(n, e) {
  return Xr.index = n, Xr.offset = e, Xr;
}
function br(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!br(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !br(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let V = class Ei {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && br(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    return r.create(t.attrs);
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Ei.none;
    if (e instanceof Ei)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
V.none = [];
class kr extends Error {
}
class C {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = dl(this.content, e + this.openStart, t);
    return r && new C(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new C(ul(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return C.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new C(k.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new C(e, r, i);
  }
}
C.empty = new C(k.empty, 0, 0);
function ul(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(ul(s.content, e - i - 1, t - i - 1)));
}
function dl(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = dl(o.content, e - s - 1, t);
  return l && n.replaceChild(i, o.copy(l));
}
function Qc(n, e, t) {
  if (t.openStart > n.depth)
    throw new kr("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new kr("Inconsistent open depths");
  return fl(n, e, t, 0);
}
function fl(n, e, t, r) {
  let i = n.index(r), s = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let o = fl(n, e, t, r + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let o = n.parent, l = o.content;
      return It(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = eu(t, n);
      return It(s, pl(n, o, l, e, r));
    }
  else
    return It(s, wr(n, e, r));
}
function hl(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new kr("Cannot join " + e.type.name + " onto " + n.type.name);
}
function Ai(n, e, t) {
  let r = n.node(t);
  return hl(r, e.node(t)), r;
}
function Lt(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function Ln(n, e, t, r) {
  let i = (e || n).node(t), s = 0, o = e ? e.index(t) : i.childCount;
  n && (s = n.index(t), n.depth > t ? s++ : n.textOffset && (Lt(n.nodeAfter, r), s++));
  for (let l = s; l < o; l++)
    Lt(i.child(l), r);
  e && e.depth == t && e.textOffset && Lt(e.nodeBefore, r);
}
function It(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function pl(n, e, t, r, i) {
  let s = n.depth > i && Ai(n, e, i + 1), o = r.depth > i && Ai(t, r, i + 1), l = [];
  return Ln(null, n, i, l), s && o && e.index(i) == t.index(i) ? (hl(s, o), Lt(It(s, pl(n, e, t, r, i + 1)), l)) : (s && Lt(It(s, wr(n, e, i + 1)), l), Ln(e, t, i, l), o && Lt(It(o, wr(t, r, i + 1)), l)), Ln(r, null, i, l), new k(l);
}
function wr(n, e, t) {
  let r = [];
  if (Ln(null, n, t, r), n.depth > t) {
    let i = Ai(n, e, t + 1);
    Lt(It(i, wr(n, e, t + 1)), r);
  }
  return Ln(e, null, t, r), new k(r);
}
function eu(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(k.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class Hn {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += r.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return V.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let s = r.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < r.length; s++)
      r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new xr(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, s = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (r.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new Hn(t, r, s);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    for (let i = 0; i < Qr.length; i++) {
      let s = Qr[i];
      if (s.pos == t && s.doc == e)
        return s;
    }
    let r = Qr[ei] = Hn.resolve(e, t);
    return ei = (ei + 1) % tu, r;
  }
}
let Qr = [], ei = 0, tu = 12;
class xr {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const nu = /* @__PURE__ */ Object.create(null);
let Rt = class Ni {
  /**
  @internal
  */
  constructor(e, t, r, i = V.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || k.empty;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  parent-relative position, its parent node, and its child index.
  When the callback returns false for a given node, that node's
  children will not be recursed over. The last parameter can be
  used to specify a starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && br(this.attrs, t || e.defaultAttrs || nu) && V.sameSet(this.marks, r || V.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Ni(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Ni(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return C.empty;
    let i = this.resolve(e), s = this.resolve(t), o = r ? 0 : i.sharedDepth(t), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new C(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return Qc(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Hn.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Hn.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (r.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), ml(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = k.empty, i = 0, s = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, i, s), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(r), o = s && s.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise error when they do not.
  */
  check() {
    this.type.checkContent(this.content);
    let e = V.none;
    for (let t = 0; t < this.marks.length; t++)
      e = this.marks[t].addToSet(e);
    if (!V.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r = null;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = k.fromJSON(e, t.content);
    return e.nodeType(t.type).create(t.attrs, i, r);
  }
};
Rt.prototype.text = void 0;
class Cr extends Rt {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : ml(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new Cr(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Cr(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function ml(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class zt {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new ru(e, t);
    if (r.next == null)
      return zt.empty;
    let i = gl(r);
    r.next && r.err("Unexpected trailing text");
    let s = uu(cu(i));
    return du(s, r), s;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let s = t; i && s < r; s++)
      i = i.matchType(e.child(s).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function s(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return k.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: u, next: d } = o.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(d) == -1) {
          i.push(d);
          let f = s(d, l.concat(u));
          if (f)
            return f;
        }
      }
      return null;
    }
    return s(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), s = i.match;
      if (s.matchType(e)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: a } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let s = i + (r.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < r.next.length; o++)
        s += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
      return s;
    }).join(`
`);
  }
}
zt.empty = new zt(!0);
class ru {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function gl(n) {
  let e = [];
  do
    e.push(iu(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function iu(n) {
  let e = [];
  do
    e.push(su(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function su(n) {
  let e = au(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = ou(n, e);
    else
      break;
  return e;
}
function Is(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function ou(n, e) {
  let t = Is(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = Is(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function lu(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let s in t) {
    let o = t[s];
    o.groups.indexOf(e) > -1 && i.push(o);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function au(n) {
  if (n.eat("(")) {
    let e = gl(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = lu(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function cu(n) {
  let e = [[]];
  return i(s(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function i(o, l) {
    o.forEach((a) => a.to = l);
  }
  function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = s(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (o.type == "star") {
      let a = t();
      return r(l, a), i(s(o.expr, a), a), [r(a)];
    } else if (o.type == "plus") {
      let a = t();
      return i(s(o.expr, l), a), i(s(o.expr, a), a), [r(a)];
    } else {
      if (o.type == "opt")
        return [r(l)].concat(s(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let u = t();
          i(s(o.expr, a), u), a = u;
        }
        if (o.max == -1)
          i(s(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let u = t();
            r(a, u), i(s(o.expr, a), u), a = u;
          }
        return [r(a)];
      } else {
        if (o.type == "name")
          return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function yl(n, e) {
  return e - n;
}
function Rs(n, e) {
  let t = [];
  return r(e), t.sort(yl);
  function r(i) {
    let s = n[i];
    if (s.length == 1 && !s[0].term)
      return r(s[0].to);
    t.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: a } = s[o];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function uu(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(Rs(n, 0));
  function t(r) {
    let i = [];
    r.forEach((o) => {
      n[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < i.length; u++)
          i[u][0] == l && (c = i[u][1]);
        Rs(n, a).forEach((u) => {
          c || i.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let s = e[r.join(",")] = new zt(r.indexOf(n.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(yl);
      s.next.push({ type: i[o][0], next: e[l.join(",")] || t(l) });
    }
    return s;
  }
}
function du(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), r.indexOf(c) == -1 && r.push(c);
    }
    s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function vl(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function bl(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let s = n[r];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function kl(n) {
  let e = /* @__PURE__ */ Object.create(null);
  if (n)
    for (let t in n)
      e[t] = new fu(n[t]);
  return e;
}
let Ps = class wl {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = kl(r.attrs), this.defaultAttrs = vl(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == zt.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : bl(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Rt(this, this.computeAttrs(e), k.from(t), V.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = k.from(t), this.checkContent(t), new Rt(this, this.computeAttrs(e), t, V.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = k.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let i = this.contentMatch.matchFragment(t), s = i && i.fillBefore(k.empty, !0);
    return s ? new Rt(this, e, t.append(s), V.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type with the given attributes.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : V.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((s, o) => r[s] = new wl(s, t, o));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
class fu {
  constructor(e) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(e, "default"), this.default = e.default;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Pr {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = kl(i.attrs), this.excluded = null;
    let s = vl(this.attrs);
    this.instance = s ? new V(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new V(this, bl(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => r[s] = new Pr(s, i++, t, o)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class hu {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = X.from(e.nodes), t.marks = X.from(e.marks || {}), this.nodes = Ps.compile(this.spec.nodes, this), this.marks = Pr.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      s.contentMatch = r[o] || (r[o] = zt.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.markSet = l == "_" ? null : l ? Bs(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : Bs(this, o.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof Ps) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else
      throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new Cr(r, r.defaultAttrs, e, V.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return Rt.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return V.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function Bs(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], s = n.marks[i], o = s;
    if (s)
      t.push(s);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
class an {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [], t.forEach((r) => {
      r.tag ? this.tags.push(r) : r.style && this.styles.push(r);
    }), this.normalizeLists = !this.tags.some((r) => {
      if (!/^(ul|ol)\b/.test(r.tag) || !r.node)
        return !1;
      let i = e.nodes[r.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new zs(this, t, !1);
    return r.addAll(e, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new zs(this, t, !0);
    return r.addAll(e, t.from, t.to), C.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (gu(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      t.splice(o, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = Hs(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = Hs(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new an(e, an.schemaRules(e)));
  }
}
const xl = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, pu = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Cl = { ol: !0, ul: !0 }, Sr = 1, Mr = 2, In = 4;
function Vs(n, e, t) {
  return e != null ? (e ? Sr : 0) | (e === "full" ? Mr : 0) : n && n.whitespace == "pre" ? Sr | Mr : t & ~In;
}
class ur {
  constructor(e, t, r, i, s, o, l) {
    this.type = e, this.attrs = t, this.marks = r, this.pendingMarks = i, this.solid = s, this.options = l, this.content = [], this.activeMarks = V.none, this.stashMarks = [], this.match = o || (l & In ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(k.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & Sr)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let s = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = k.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(k.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  popFromStashMark(e) {
    for (let t = this.stashMarks.length - 1; t >= 0; t--)
      if (e.eq(this.stashMarks[t]))
        return this.stashMarks.splice(t, 1)[0];
  }
  applyPending(e) {
    for (let t = 0, r = this.pendingMarks; t < r.length; t++) {
      let i = r[t];
      (this.type ? this.type.allowsMarkType(i.type) : vu(i.type, e)) && !i.isInSet(this.activeMarks) && (this.activeMarks = i.addToSet(this.activeMarks), this.pendingMarks = i.removeFromSet(this.pendingMarks));
    }
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !xl.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class zs {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0;
    let i = t.topNode, s, o = Vs(null, t.preserveWhitespace, 0) | (r ? In : 0);
    i ? s = new ur(i.type, i.attrs, V.none, V.none, !0, t.topMatch || i.type.contentMatch, o) : r ? s = new ur(null, null, V.none, V.none, !0, null, o) : s = new ur(e.schema.topNodeType, null, V.none, V.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e) {
    if (e.nodeType == 3)
      this.addTextNode(e);
    else if (e.nodeType == 1) {
      let t = e.getAttribute("style");
      if (!t)
        this.addElement(e);
      else {
        let r = this.readStyles(yu(t));
        if (!r)
          return;
        let [i, s] = r, o = this.top;
        for (let l = 0; l < s.length; l++)
          this.removePendingMark(s[l], o);
        for (let l = 0; l < i.length; l++)
          this.addPendingMark(i[l]);
        this.addElement(e);
        for (let l = 0; l < i.length; l++)
          this.removePendingMark(i[l], o);
        for (let l = 0; l < s.length; l++)
          this.addPendingMark(s[l]);
      }
    }
  }
  addTextNode(e) {
    let t = e.nodeValue, r = this.top;
    if (r.options & Mr || r.inlineContext(e) || /[^ \t\r\n\u000c]/.test(t)) {
      if (r.options & Sr)
        r.options & Mr ? t = t.replace(/\r\n?/g, `
`) : t = t.replace(/\r?\n|\r/g, " ");
      else if (t = t.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(t) && this.open == this.nodes.length - 1) {
        let i = r.content[r.content.length - 1], s = e.previousSibling;
        (!i || s && s.nodeName == "BR" || i.isText && /[ \t\r\n\u000c]$/.test(i.text)) && (t = t.slice(1));
      }
      t && this.insertNode(this.parser.schema.text(t)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t) {
    let r = e.nodeName.toLowerCase(), i;
    Cl.hasOwnProperty(r) && this.parser.normalizeLists && mu(e);
    let s = this.options.ruleFromNode && this.options.ruleFromNode(e) || (i = this.parser.matchTag(e, this, t));
    if (s ? s.ignore : pu.hasOwnProperty(r))
      this.findInside(e), this.ignoreFallback(e);
    else if (!s || s.skip || s.closeParent) {
      s && s.closeParent ? this.open = Math.max(0, this.open - 1) : s && s.skip.nodeType && (e = s.skip);
      let o, l = this.top, a = this.needsBlock;
      if (xl.hasOwnProperty(r))
        l.content.length && l.content[0].isInline && this.open && (this.open--, l = this.top), o = !0, l.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e);
        return;
      }
      this.addAll(e), o && this.sync(l), this.needsBlock = a;
    } else
      this.addElementByRule(e, s, s.consuming === !1 ? i : void 0);
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`));
  }
  // Called for ignored nodes
  ignoreFallback(e) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"));
  }
  // Run any style parser associated with the node's styles. Either
  // return an array of marks, or null to indicate some of the styles
  // had a rule with `ignore` set.
  readStyles(e) {
    let t = V.none, r = V.none;
    e:
      for (let i = 0; i < e.length; i += 2)
        for (let s = void 0; ; ) {
          let o = this.parser.matchStyle(e[i], e[i + 1], this, s);
          if (!o)
            continue e;
          if (o.ignore)
            return null;
          if (o.clearMark ? this.top.pendingMarks.forEach((l) => {
            o.clearMark(l) && (r = l.addToSet(r));
          }) : t = this.parser.schema.marks[o.mark].create(o.attrs).addToSet(t), o.consuming === !1)
            s = o;
          else
            break;
        }
    return [t, r];
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r) {
    let i, s, o;
    t.node ? (s = this.parser.schema.nodes[t.node], s.isLeaf ? this.insertNode(s.create(t.attrs)) || this.leafFallback(e) : i = this.enter(s, t.attrs || null, t.preserveWhitespace)) : (o = this.parser.schema.marks[t.mark].create(t.attrs), this.addPendingMark(o));
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (r)
      this.addElement(e, r);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a);
    }
    i && this.sync(l) && this.open--, o && this.removePendingMark(o, l);
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r) {
    let i = t || 0;
    for (let s = t ? e.childNodes[t] : e.firstChild, o = r == null ? null : e.childNodes[r]; s != o; s = s.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(s);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e) {
    let t, r;
    for (let i = this.open; i >= 0; i--) {
      let s = this.nodes[i], o = s.findWrapping(e);
      if (o && (!t || t.length > o.length) && (t = o, r = s, !o.length) || s.solid)
        break;
    }
    if (!t)
      return !1;
    this.sync(r);
    for (let i = 0; i < t.length; i++)
      this.enterInner(t[i], null, !1);
    return !0;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let t = this.textblockFromContext();
      t && this.enterInner(t);
    }
    if (this.findPlace(e)) {
      this.closeExtra();
      let t = this.top;
      t.applyPending(e.type), t.match && (t.match = t.match.matchType(e.type));
      let r = t.activeMarks;
      for (let i = 0; i < e.marks.length; i++)
        (!t.type || t.type.allowsMarkType(e.marks[i].type)) && (r = e.marks[i].addToSet(r));
      return t.content.push(e.mark(r)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r) {
    let i = this.findPlace(e.create(t));
    return i && this.enterInner(e, t, !0, r), i;
  }
  // Open a node of the given type
  enterInner(e, t = null, r = !1, i) {
    this.closeExtra();
    let s = this.top;
    s.applyPending(e), s.match = s.match && s.match.matchType(e);
    let o = Vs(e, i, s.options);
    s.options & In && s.content.length == 0 && (o |= In), this.nodes.push(new ur(e, t, s.activeMarks, s.pendingMarks, r, null, o)), this.open++;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(this.isOpen || this.options.topOpen);
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--)
      if (this.nodes[t] == e)
        return this.open = t, !0;
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= s; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= s ? r.node(a - s).type : null;
          if (!u || u.name != c && u.groups.indexOf(c) == -1)
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
  addPendingMark(e) {
    let t = bu(e, this.top.pendingMarks);
    t && this.top.stashMarks.push(t), this.top.pendingMarks = e.addToSet(this.top.pendingMarks);
  }
  removePendingMark(e, t) {
    for (let r = this.open; r >= 0; r--) {
      let i = this.nodes[r];
      if (i.pendingMarks.lastIndexOf(e) > -1)
        i.pendingMarks = e.removeFromSet(i.pendingMarks);
      else {
        i.activeMarks = e.removeFromSet(i.activeMarks);
        let o = i.popFromStashMark(e);
        o && i.type && i.type.allowsMarkType(o.type) && (i.activeMarks = o.addToSet(i.activeMarks));
      }
      if (i == t)
        break;
    }
  }
}
function mu(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Cl.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function gu(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function yu(n) {
  let e = /\s*([\w-]+)\s*:\s*([^;]+)/g, t, r = [];
  for (; t = e.exec(n); )
    r.push(t[1], t[2].trim());
  return r;
}
function Hs(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function vu(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || s.indexOf(u) < 0 && o(u))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
function bu(n, e) {
  for (let t = 0; t < e.length; t++)
    if (n.eq(e[t]))
      return e[t];
}
class qe {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = ti(t).createDocumentFragment());
    let i = r, s = [];
    return e.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < s.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < s.length; )
          i = s.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], u = this.serializeMark(c, o.isInline, t);
          u && (s.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(o, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = qe.renderSpec(ti(t), this.nodes[e.type.name](e));
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, t);
      s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && qe.renderSpec(ti(r), i(e, t));
  }
  /**
  Render an [output spec](https://prosemirror.net/docs/ref/#model.DOMOutputSpec) to a DOM node. If
  the spec has a hole (zero) in it, `contentDOM` will point at the
  node with the hole.
  */
  static renderSpec(e, t, r = null) {
    if (typeof t == "string")
      return { dom: e.createTextNode(t) };
    if (t.nodeType != null)
      return { dom: t };
    if (t.dom && t.dom.nodeType != null)
      return t;
    let i = t[0], s = i.indexOf(" ");
    s > 0 && (r = i.slice(0, s), i = i.slice(s + 1));
    let o, l = r ? e.createElementNS(r, i) : e.createElement(i), a = t[1], c = 1;
    if (a && typeof a == "object" && a.nodeType == null && !Array.isArray(a)) {
      c = 2;
      for (let u in a)
        if (a[u] != null) {
          let d = u.indexOf(" ");
          d > 0 ? l.setAttributeNS(u.slice(0, d), u.slice(d + 1), a[u]) : l.setAttribute(u, a[u]);
        }
    }
    for (let u = c; u < t.length; u++) {
      let d = t[u];
      if (d === 0) {
        if (u < t.length - 1 || u > c)
          throw new RangeError("Content hole must be the only child of its parent node");
        return { dom: l, contentDOM: l };
      } else {
        let { dom: f, contentDOM: h } = qe.renderSpec(e, d, r);
        if (l.appendChild(f), h) {
          if (o)
            throw new RangeError("Multiple content holes");
          o = h;
        }
      }
    }
    return { dom: l, contentDOM: o };
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new qe(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = Fs(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Fs(e.marks);
  }
}
function Fs(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function ti(n) {
  return n.document || window.document;
}
const Sl = 65535, Ml = Math.pow(2, 16);
function ku(n, e) {
  return n + e * Ml;
}
function _s(n) {
  return n & Sl;
}
function wu(n) {
  return (n - (n & Sl)) / Ml;
}
const Ol = 1, Tl = 2, mr = 4, El = 8;
class Di {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & El) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Ol | mr)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Tl | mr)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & mr) > 0;
  }
}
class Te {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && Te.empty)
      return Te.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = _s(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + wu(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = this.ranges[l + o], d = a + c;
      if (e <= d) {
        let f = c ? e == a ? -1 : e == d ? 1 : t : t, h = a + i + (f < 0 ? 0 : u);
        if (r)
          return h;
        let p = e == (t < 0 ? a : d) ? null : ku(l / 3, e - a), m = e == a ? Tl : e == d ? Ol : mr;
        return (t < 0 ? e != a : e != d) && (m |= El), new Di(h, m, p);
      }
      i += u - c;
    }
    return r ? e + i : new Di(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = _s(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = a + c;
      if (e <= u && l == i * 3)
        return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + t], u = this.ranges[i + r];
      e(l, l + c, a, a + u), s += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Te(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? Te.empty : new Te(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Te.empty = new Te([]);
class rn {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], t, r = 0, i = e.length) {
    this.maps = e, this.mirror = t, this.from = r, this.to = i;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new rn(this.maps, this.mirror, e, t);
  }
  /**
  @internal
  */
  copy() {
    return new rn(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.to = this.maps.push(e), t != null && this.setMirror(this.maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this.maps.length; t < e.maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this.maps.length + e.maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e.maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new rn();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let o = this.maps[s], l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(s);
        if (a != null && a > s && a < this.to) {
          s = a, e = this.maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Di(e, i, null);
  }
}
const ni = /* @__PURE__ */ Object.create(null);
class ye {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Te.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = ni[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in ni)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return ni[e] = t, t.prototype.jsonID = e, t;
  }
}
class U {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new U(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new U(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return U.ok(e.replace(t, r, i));
    } catch (s) {
      if (s instanceof kr)
        return U.fail(s.message);
      throw s;
    }
  }
}
function rs(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let s = n.child(i);
    s.content.size && (s = s.copy(rs(s.content, e, s))), s.isInline && (s = e(s, t, i)), r.push(s);
  }
  return k.fromArray(r);
}
class ft extends ye {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), s = new C(rs(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return U.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new Ke(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new ft(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof ft && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new ft(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new ft(t.from, t.to, e.markFromJSON(t.mark));
  }
}
ye.jsonID("addMark", ft);
class Ke extends ye {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new C(rs(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return U.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new ft(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Ke(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Ke && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Ke(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Ke(t.from, t.to, e.markFromJSON(t.mark));
  }
}
ye.jsonID("removeMark", Ke);
class ht extends ye {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return U.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return U.fromReplace(e, this.pos, this.pos + 1, new C(k.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new ht(this.pos, t.marks[i]);
        return new ht(this.pos, this.mark);
      }
    }
    return new cn(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new ht(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new ht(t.pos, e.markFromJSON(t.mark));
  }
}
ye.jsonID("addNodeMark", ht);
class cn extends ye {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return U.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return U.fromReplace(e, this.pos, this.pos + 1, new C(k.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new ht(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new cn(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new cn(t.pos, e.markFromJSON(t.mark));
  }
}
ye.jsonID("removeNodeMark", cn);
class ie extends ye {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Li(e, this.from, this.to) ? U.fail("Structure replace would overwrite content") : U.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Te([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new ie(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new ie(t.pos, Math.max(t.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof ie) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? C.empty : new C(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new ie(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? C.empty : new C(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new ie(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new ie(t.from, t.to, C.fromJSON(e, t.slice), !!t.structure);
  }
}
ye.jsonID("replace", ie);
class Z extends ye {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Li(e, this.from, this.gapFrom) || Li(e, this.gapTo, this.to)))
      return U.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return U.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? U.fromReplace(e, this.from, this.to, r) : U.fail("Content does not fit in gap");
  }
  getMap() {
    return new Te([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new Z(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = e.map(this.gapFrom, -1), s = e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new Z(t.pos, r.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new Z(t.from, t.to, t.gapFrom, t.gapTo, C.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
ye.jsonID("replaceAround", Z);
function Li(n, e, t) {
  let r = n.resolve(e), i = t - e, s = r.depth;
  for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = r.node(s).maybeChild(r.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function xu(n, e, t, r) {
  let i = [], s = [], o, l;
  n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return;
    let d = a.marks;
    if (!r.isInSet(d) && u.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), h = Math.min(c + a.nodeSize, t), p = r.addToSet(d);
      for (let m = 0; m < d.length; m++)
        d[m].isInSet(p) || (o && o.to == f && o.mark.eq(d[m]) ? o.to = h : i.push(o = new Ke(f, h, d[m])));
      l && l.to == f ? l.to = h : s.push(l = new ft(f, h, r));
    }
  }), i.forEach((a) => n.step(a)), s.forEach((a) => n.step(a));
}
function Cu(n, e, t, r) {
  let i = [], s = 0;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let a = null;
    if (r instanceof Pr) {
      let c = o.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else
      r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (let u = 0; u < a.length; u++) {
        let d = a[u], f;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == s - 1 && d.eq(i[h].style) && (f = p);
        }
        f ? (f.to = c, f.step = s) : i.push({ style: d, from: Math.max(l, e), to: c, step: s });
      }
    }
  }), i.forEach((o) => n.step(new Ke(o.from, o.to, o.style)));
}
function Su(n, e, t, r = t.contentMatch) {
  let i = n.doc.nodeAt(e), s = [], o = e + 1;
  for (let l = 0; l < i.childCount; l++) {
    let a = i.child(l), c = o + a.nodeSize, u = r.matchType(a.type);
    if (!u)
      s.push(new ie(o, c, C.empty));
    else {
      r = u;
      for (let d = 0; d < a.marks.length; d++)
        t.allowsMarkType(a.marks[d].type) || n.step(new Ke(o, c, a.marks[d]));
    }
    o = c;
  }
  if (!r.validEnd) {
    let l = r.fillBefore(k.empty, !0);
    n.replace(o, o, new C(l, 0, 0));
  }
  for (let l = s.length - 1; l >= 0; l--)
    n.step(s[l]);
}
function Mu(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function kn(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), s = n.$from.index(r), o = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(s, o, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !Mu(i, s, o))
      break;
  }
  return null;
}
function Ou(n, e, t) {
  let { $from: r, $to: i, depth: s } = e, o = r.before(s + 1), l = i.after(s + 1), a = o, c = l, u = k.empty, d = 0;
  for (let p = s, m = !1; p > t; p--)
    m || r.index(p) > 0 ? (m = !0, u = k.from(r.node(p).copy(u)), d++) : a--;
  let f = k.empty, h = 0;
  for (let p = s, m = !1; p > t; p--)
    m || i.after(p + 1) < i.end(p) ? (m = !0, f = k.from(i.node(p).copy(f)), h++) : c++;
  n.step(new Z(a, c, o, l, new C(u.append(f), d, h), u.size - d, !0));
}
function is(n, e, t = null, r = n) {
  let i = Tu(n, e), s = i && Eu(r, e);
  return s ? i.map($s).concat({ type: e, attrs: t }).concat(s.map($s)) : null;
}
function $s(n) {
  return { type: n, attrs: null };
}
function Tu(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(r, i, o) ? s : null;
}
function Eu(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.child(r), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function Au(n, e, t) {
  let r = k.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = t[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = k.from(t[o].type.create(t[o].attrs, r));
  }
  let i = e.start, s = e.end;
  n.step(new Z(i, s, i, s, new C(r, 0, 0), t.length, !0));
}
function Nu(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = n.steps.length;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (o.isTextblock && !o.hasMarkup(r, i) && Du(n.doc, n.mapping.slice(s).map(l), r)) {
      n.clearIncompatible(n.mapping.slice(s).map(l, 1), r);
      let a = n.mapping.slice(s), c = a.map(l, 1), u = a.map(l + o.nodeSize, 1);
      return n.step(new Z(c, u, c + 1, u - 1, new C(k.from(r.create(i, null, o.marks)), 0, 0), 1, !0)), !1;
    }
  });
}
function Du(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function Lu(n, e, t, r, i) {
  let s = n.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let o = t.create(r, null, i || s.marks);
  if (s.isLeaf)
    return n.replaceWith(e, e + s.nodeSize, o);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new Z(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new C(k.from(o), 0, 0), 1, !0));
}
function sn(n, e, t = 1, r) {
  let i = n.resolve(e), s = i.depth - t, o = r && r[r.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = t - 2; c > s; c--, u--) {
    let d = i.node(c), f = i.index(c);
    if (d.type.spec.isolating)
      return !1;
    let h = d.content.cutByIndex(f, d.childCount), p = r && r[u] || d;
    if (p != d && (h = h.replaceChild(0, p.type.create(p.attrs))), !d.canReplace(f + 1, d.childCount) || !p.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(s), a = r && r[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function Iu(n, e, t = 1, r) {
  let i = n.doc.resolve(e), s = k.empty, o = k.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    s = k.from(i.node(l).copy(s));
    let u = r && r[c];
    o = k.from(u ? u.type.create(u.attrs, o) : i.node(l).copy(o));
  }
  n.step(new ie(e, e, new C(s.append(o), t, t), !0));
}
function kt(n, e) {
  let t = n.resolve(e), r = t.index();
  return Al(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function Al(n, e) {
  return !!(n && e && !n.isLeaf && n.canAppend(e));
}
function Br(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let s, o, l = r.index(i);
    if (i == r.depth ? (s = r.nodeBefore, o = r.nodeAfter) : t > 0 ? (s = r.node(i + 1), l++, o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1), o = r.node(i + 1)), s && !s.isTextblock && Al(s, o) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function Ru(n, e, t) {
  let r = new ie(e - t, e + t, C.empty, !0);
  n.step(r);
}
function Pu(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.index(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.before(i + 1);
      if (s > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.indexAfter(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.after(i + 1);
      if (s < r.node(i).childCount)
        return null;
    }
  return null;
}
function Nl(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let s = 0; s < t.openStart; s++)
    i = i.firstChild.content;
  for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1, a = r.index(o) + (l > 0 ? 1 : 0), c = r.node(o), u = !1;
      if (s == 1)
        u = c.canReplace(a, a, i);
      else {
        let d = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        u = d && c.canReplaceWith(a, a, d[0]);
      }
      if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function ss(n, e, t = e, r = C.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), s = n.resolve(t);
  return Dl(i, s, r) ? new ie(e, t, r) : new Bu(i, s, r).fit();
}
function Dl(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class Bu {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = k.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = k.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = r.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new C(s, o, l);
    return e > -1 ? new Z(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new ie(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    for (let e = 1; e <= 2; e++)
      for (let t = this.unplaced.openStart; t >= 0; t--) {
        let r, i = null;
        t ? (i = ri(this.unplaced.content, t - 1).firstChild, r = i.content) : r = this.unplaced.content;
        let s = r.firstChild;
        for (let o = this.depth; o >= 0; o--) {
          let { type: l, match: a } = this.frontier[o], c, u = null;
          if (e == 1 && (s ? a.matchType(s.type) || (u = a.fillBefore(k.from(s), !1)) : i && l.compatibleContent(i.type)))
            return { sliceDepth: t, frontierDepth: o, parent: i, inject: u };
          if (e == 2 && s && (c = a.findWrapping(s.type)))
            return { sliceDepth: t, frontierDepth: o, parent: i, wrap: c };
          if (i && a.matchType(i.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = ri(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new C(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = ri(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new C(An(e, t - 1, 1), t - 1, s ? t - 1 : r);
    } else
      this.unplaced = new C(An(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, c = 0, u = [], { match: d, type: f } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        u.push(i.child(m));
      d = d.matchFragment(i);
    }
    let h = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), y = d.matchType(m.type);
      if (!y)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (d = y, u.push(Ll(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = Nn(this.placed, t, k.from(u)), this.frontier[t].match = d, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, y = l; m < h; m++) {
      let v = y.lastChild;
      this.frontier.push({ type: v.type, match: v.contentMatchAt(v.childCount) }), y = v.content;
    }
    this.unplaced = p ? e == 0 ? C.empty : new C(An(o.content, e - 1, 1), e - 1, h < 0 ? o.openEnd : e - 1) : new C(An(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !ii(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let { match: r, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = ii(e, t, i, r, s);
        if (o) {
          for (let l = t - 1; l >= 0; l--) {
            let { match: a, type: c } = this.frontier[l], u = ii(e, l, c, a, !0);
            if (!u || u.childCount)
              continue e;
          }
          return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
        }
      }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = Nn(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = Nn(this.placed, this.depth, k.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(k.empty, !0);
    t.childCount && (this.placed = Nn(this.placed, this.frontier.length, t));
  }
}
function An(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(An(n.firstChild.content, e - 1, t)));
}
function Nn(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Nn(n.lastChild.content, e - 1, t)));
}
function ri(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function Ll(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, Ll(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(k.empty, !0)))), n.copy(r);
}
function ii(n, e, t, r, i) {
  let s = n.node(e), o = i ? n.indexAfter(e) : n.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = r.fillBefore(s.content, !0, o);
  return l && !Vu(t, s.content, o) ? l : null;
}
function Vu(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function zu(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function Hu(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), s = n.doc.resolve(t);
  if (Dl(i, s, r))
    return n.step(new ie(e, t, r));
  let o = Rl(i, n.doc.resolve(t));
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let f = i.depth, h = i.pos - 1; f > 0; f--, h--) {
    let p = i.node(f).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    o.indexOf(f) > -1 ? l = f : i.before(f) == h && o.splice(1, 0, -f);
  }
  let a = o.indexOf(l), c = [], u = r.openStart;
  for (let f = r.content, h = 0; ; h++) {
    let p = f.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    f = p.content;
  }
  for (let f = u - 1; f >= 0; f--) {
    let h = c[f].type, p = zu(h);
    if (p && i.node(a).type != h)
      u = f;
    else if (p || !h.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let h = (f + u + 1) % (r.openStart + 1), p = c[h];
    if (p)
      for (let m = 0; m < o.length; m++) {
        let y = o[(m + a) % o.length], v = !0;
        y < 0 && (v = !1, y = -y);
        let w = i.node(y - 1), S = i.index(y - 1);
        if (w.canReplaceWith(S, S, p.type, p.marks))
          return n.replace(i.before(y), v ? s.after(y) : t, new C(Il(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let d = n.steps.length;
  for (let f = o.length - 1; f >= 0 && (n.replace(e, t, r), !(n.steps.length > d)); f--) {
    let h = o[f];
    h < 0 || (e = i.before(h), t = s.after(h));
  }
}
function Il(n, e, t, r, i) {
  if (e < t) {
    let s = n.firstChild;
    n = n.replaceChild(0, s.copy(Il(s.content, e + 1, t, r, s)));
  }
  if (e > r) {
    let s = i.contentMatchAt(0), o = s.fillBefore(n).append(n);
    n = o.append(s.matchFragment(o).fillBefore(k.empty, !0));
  }
  return n;
}
function Fu(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = Pu(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new C(k.from(r), 0, 0));
}
function _u(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), s = Rl(r, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], a = o == s.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let o = 1; o <= r.depth && o <= i.depth; o++)
    if (e - r.start(o) == r.depth - o && t > r.end(o) && i.end(o) - t != i.depth - o)
      return n.delete(r.before(o), t);
  n.delete(e, t);
}
function Rl(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let s = n.start(i);
    if (s < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
class on extends ye {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return U.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      r[s] = t.attrs[s];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return U.fromReplace(e, this.pos, this.pos + 1, new C(k.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return Te.empty;
  }
  invert(e) {
    return new on(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new on(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new on(t.pos, t.attr, t.value);
  }
}
ye.jsonID("attr", on);
let un = class extends Error {
};
un = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
un.prototype = Object.create(Error.prototype);
un.prototype.constructor = un;
un.prototype.name = "TransformError";
class $u {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new rn();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new un(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = C.empty) {
    let i = ss(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new C(k.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, C.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return Hu(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return Fu(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return _u(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return Ou(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return Ru(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return Au(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return Nu(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i = []) {
    return Lu(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new on(e, t, r)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new ht(e, t)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    if (!(t instanceof V)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (t = t.isInSet(r.marks), !t)
        return this;
    }
    return this.step(new cn(e, t)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, t = 1, r) {
    return Iu(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return xu(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return Cu(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return Su(this, e, t, r), this;
  }
}
const si = /* @__PURE__ */ Object.create(null);
class R {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new ju(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = C.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let s = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], u = e.mapping.slice(s);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? C.empty : t), l == 0 && qs(e, s, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], a = e.mapping.slice(r), c = a.map(o.pos), u = a.map(l.pos);
      s ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), qs(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new L(e) : Gt(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let o = t < 0 ? Gt(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, r) : Gt(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, r);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new Re(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Gt(e, e, 0, 0, 1) || new Re(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Gt(e, e, e.content.size, e.childCount, -1) || new Re(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = si[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in si)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return si[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return L.between(this.$anchor, this.$head).getBookmark();
  }
}
R.prototype.visible = !0;
class ju {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let js = !1;
function Ws(n) {
  !js && !n.parent.inlineContent && (js = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class L extends R {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    Ws(e), Ws(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return R.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new L(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = C.empty) {
    if (super.replace(e, t), t == C.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof L && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Vr(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new L(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = R.findFrom(t, r, !0) || R.findFrom(t, -r, !0);
      if (s)
        t = s.$head;
      else
        return R.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (R.findFrom(e, -r, !0) || R.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new L(e, t);
  }
}
R.jsonID("text", L);
class Vr {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Vr(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return L.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class A extends R {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), s = e.resolve(i);
    return r ? R.near(s) : new A(s);
  }
  content() {
    return new C(k.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof A && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new ls(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new A(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new A(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
A.prototype.visible = !1;
R.jsonID("node", A);
class ls {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new Vr(r, r) : new ls(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && A.isSelectable(r) ? new A(t) : R.near(t);
  }
}
class Re extends R {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = C.empty) {
    if (t == C.empty) {
      e.delete(0, e.doc.content.size);
      let r = R.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new Re(e);
  }
  map(e) {
    return new Re(e);
  }
  eq(e) {
    return e instanceof Re;
  }
  getBookmark() {
    return Wu;
  }
}
R.jsonID("all", Re);
const Wu = {
  map() {
    return this;
  },
  resolve(n) {
    return new Re(n);
  }
};
function Gt(n, e, t, r, i, s = !1) {
  if (e.inlineContent)
    return L.create(n, t);
  for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!s && A.isSelectable(l))
        return A.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = Gt(n, l, t + i, i < 0 ? l.childCount : 0, i, s);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function qs(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof ie || i instanceof Z))
    return;
  let s = n.mapping.maps[r], o;
  s.forEach((l, a, c, u) => {
    o == null && (o = u);
  }), n.setSelection(R.near(n.doc.resolve(o), t));
}
const Ks = 1, dr = 2, Js = 4;
class qu extends $u {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Ks) & ~dr, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & Ks) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= dr, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return V.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & dr) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~dr, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || V.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r ?? t, !e)
        return this.deleteRange(t, r);
      let s = this.storedMarks;
      if (!s) {
        let o = this.doc.resolve(t);
        s = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, s)), this.selection.empty || this.setSelection(R.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= Js, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & Js) > 0;
  }
}
function Us(n, e) {
  return !e || !n ? n : n.bind(e);
}
class Dn {
  constructor(e, t, r) {
    this.name = e, this.init = Us(t.init, r), this.apply = Us(t.apply, r);
  }
}
const Ku = [
  new Dn("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new Dn("selection", {
    init(n, e) {
      return n.selection || R.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new Dn("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new Dn("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class oi {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = Ku.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new Dn(r.key, r.spec.state, r));
    });
  }
}
class Qt {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let s = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let l = this.config.plugins[o];
        if (l.spec.appendTransaction) {
          let a = i ? i[o].n : 0, c = i ? i[o].state : this, u = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (u && r.filterTransaction(u, o)) {
            if (u.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let d = 0; d < this.config.plugins.length; d++)
                i.push(d < o ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(u), r = r.applyInner(u), s = !0;
          }
          i && (i[o] = { state: r, n: t.length });
        }
      }
      if (!s)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new Qt(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      t[s.name] = s.apply(e, this[s.name], this, t);
    }
    return t;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new qu(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new oi(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new Qt(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new oi(this.schema, e.plugins), r = t.fields, i = new Qt(t);
    for (let s = 0; s < r.length; s++) {
      let o = r[s].name;
      i[o] = this.hasOwnProperty(o) ? this[o] : r[s].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], s = i.spec.state;
        s && s.toJSON && (t[r] = s.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new oi(e.schema, e.plugins), s = new Qt(i);
    return i.fields.forEach((o) => {
      if (o.name == "doc")
        s.doc = Rt.fromJSON(e.schema, t.doc);
      else if (o.name == "selection")
        s.selection = R.fromJSON(s.doc, t.selection);
      else if (o.name == "storedMarks")
        t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              s[o.name] = c.fromJSON.call(a, e, t[l], s);
              return;
            }
          }
        s[o.name] = o.init(e, s);
      }
    }), s;
  }
}
function Pl(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Pl(i, e, {})), t[r] = i;
  }
  return t;
}
class ve {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Pl(e.props, this, this.props), this.key = e.key ? e.key.key : Bl("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const li = /* @__PURE__ */ Object.create(null);
function Bl(n) {
  return n in li ? n + "$" + ++li[n] : (li[n] = 0, n + "$");
}
class Ge {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Bl(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const xe = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Fn = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Zs = null;
const tt = function(n, e, t) {
  let r = Zs || (Zs = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, Ht = function(n, e, t, r) {
  return t && (Gs(n, e, t, r, -1) || Gs(n, e, t, r, 1));
}, Ju = /^(img|br|input|textarea|hr)$/i;
function Gs(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : je(n))) {
      let s = n.parentNode;
      if (!s || s.nodeType != 1 || Zu(n) || Ju.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = xe(n) + (i < 0 ? 0 : 1), n = s;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = i < 0 ? je(n) : 0;
    } else
      return !1;
  }
}
function je(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Uu(n, e, t) {
  for (let r = e == 0, i = e == je(n); r || i; ) {
    if (n == t)
      return !0;
    let s = xe(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && s == 0, i = i && s == je(n);
  }
}
function Zu(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const zr = function(n) {
  return n.focusNode && Ht(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function en(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function Gu(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
const vt = typeof navigator < "u" ? navigator : null, Ys = typeof document < "u" ? document : null, wt = vt && vt.userAgent || "", Ii = /Edge\/(\d+)/.exec(wt), Vl = /MSIE \d/.exec(wt), Ri = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(wt), pe = !!(Vl || Ri || Ii), mt = Vl ? document.documentMode : Ri ? +Ri[1] : Ii ? +Ii[1] : 0, Be = !pe && /gecko\/(\d+)/i.test(wt);
Be && +(/Firefox\/(\d+)/.exec(wt) || [0, 0])[1];
const Pi = !pe && /Chrome\/(\d+)/.exec(wt), he = !!Pi, Yu = Pi ? +Pi[1] : 0, ae = !pe && !!vt && /Apple Computer/.test(vt.vendor), dn = ae && (/Mobile\/\w+/.test(wt) || !!vt && vt.maxTouchPoints > 2), Oe = dn || (vt ? /Mac/.test(vt.platform) : !1), We = /Android \d/.test(wt), Hr = !!Ys && "webkitFontSmoothing" in Ys.documentElement.style, Xu = Hr ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Qu(n) {
  return {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function at(n, e) {
  return typeof n == "number" ? n : n[e];
}
function ed(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function Xs(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, s = n.dom.ownerDocument;
  for (let o = t || n.dom; o; o = Fn(o)) {
    if (o.nodeType != 1)
      continue;
    let l = o, a = l == s.body, c = a ? Qu(s) : ed(l), u = 0, d = 0;
    if (e.top < c.top + at(r, "top") ? d = -(c.top - e.top + at(i, "top")) : e.bottom > c.bottom - at(r, "bottom") && (d = e.bottom - c.bottom + at(i, "bottom")), e.left < c.left + at(r, "left") ? u = -(c.left - e.left + at(i, "left")) : e.right > c.right - at(r, "right") && (u = e.right - c.right + at(i, "right")), u || d)
      if (a)
        s.defaultView.scrollBy(u, d);
      else {
        let f = l.scrollLeft, h = l.scrollTop;
        d && (l.scrollTop += d), u && (l.scrollLeft += u);
        let p = l.scrollLeft - f, m = l.scrollTop - h;
        e = { left: e.left - p, top: e.top - m, right: e.right - p, bottom: e.bottom - m };
      }
    if (a)
      break;
  }
}
function td(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = n.root.elementFromPoint(s, o);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: zl(n.dom) };
}
function zl(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Fn(r))
    ;
  return e;
}
function nd({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  Hl(t, r == 0 ? 0 : r - e);
}
function Hl(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: s } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != s && (r.scrollLeft = s);
  }
}
let Ut = null;
function rd(n) {
  if (n.setActive)
    return n.setActive();
  if (Ut)
    return n.focus(Ut);
  let e = zl(n);
  n.focus(Ut == null ? {
    get preventScroll() {
      return Ut = { preventScroll: !0 }, !0;
    }
  } : void 0), Ut || (Ut = !1, Hl(e, 0));
}
function Fl(n, e) {
  let t, r = 2e8, i, s = 0, o = e.top, l = e.top;
  for (let a = n.firstChild, c = 0; a; a = a.nextSibling, c++) {
    let u;
    if (a.nodeType == 1)
      u = a.getClientRects();
    else if (a.nodeType == 3)
      u = tt(a).getClientRects();
    else
      continue;
    for (let d = 0; d < u.length; d++) {
      let f = u[d];
      if (f.top <= o && f.bottom >= l) {
        o = Math.max(f.bottom, o), l = Math.min(f.top, l);
        let h = f.left > e.left ? f.left - e.left : f.right < e.left ? e.left - f.right : 0;
        if (h < r) {
          t = a, r = h, i = h && t.nodeType == 3 ? {
            left: f.right < e.left ? f.right : f.left,
            top: e.top
          } : e, a.nodeType == 1 && h && (s = c + (e.left >= (f.left + f.right) / 2 ? 1 : 0));
          continue;
        }
      }
      !t && (e.left >= f.right && e.top >= f.top || e.left >= f.left && e.top >= f.bottom) && (s = c + 1);
    }
  }
  return t && t.nodeType == 3 ? id(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: s } : Fl(t, i);
}
function id(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let s = ct(r, 1);
    if (s.top != s.bottom && as(e, s))
      return { node: n, offset: i + (e.left >= (s.left + s.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function as(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function sd(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function od(n, e, t) {
  let { node: r, offset: i } = Fl(e, t), s = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let o = r.getBoundingClientRect();
    s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, s);
}
function ld(n, e, t, r) {
  let i = -1;
  for (let s = e; s != n.dom; ) {
    let o = n.docView.nearestDesc(s, !0);
    if (!o)
      return null;
    if (o.node.isBlock && o.parent) {
      let l = o.dom.getBoundingClientRect();
      if (l.left > r.left || l.top > r.top)
        i = o.posBefore;
      else if (l.right < r.left || l.bottom < r.top)
        i = o.posAfter;
      else
        break;
    }
    s = o.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, 1);
}
function _l(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i; ; ) {
      let o = n.childNodes[s];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (as(e, c))
            return _l(o, e, c);
        }
      }
      if ((s = (s + 1) % r) == i)
        break;
    }
  return n;
}
function ad(n, e) {
  let t = n.dom.ownerDocument, r, i = 0;
  if (t.caretPositionFromPoint)
    try {
      let a = t.caretPositionFromPoint(e.left, e.top);
      a && ({ offsetNode: r, offset: i } = a);
    } catch {
    }
  if (!r && t.caretRangeFromPoint) {
    let a = t.caretRangeFromPoint(e.left, e.top);
    a && ({ startContainer: r, startOffset: i } = a);
  }
  let s = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), o;
  if (!s || !n.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let a = n.dom.getBoundingClientRect();
    if (!as(e, a) || (s = _l(n.dom, e, a), !s))
      return null;
  }
  if (ae)
    for (let a = s; r && a; a = Fn(a))
      a.draggable && (r = void 0);
  if (s = sd(s, e), r) {
    if (Be && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let a = r.childNodes[i], c;
      a.nodeName == "IMG" && (c = a.getBoundingClientRect()).right <= e.left && c.bottom > e.top && i++;
    }
    r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? o = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (o = ld(n, r, i, e));
  }
  o == null && (o = od(n, s, e));
  let l = n.docView.nearestDesc(s, !0);
  return { pos: o, inside: l ? l.posAtStart - l.border : -1 };
}
function ct(n, e) {
  let t = n.getClientRects();
  return t.length ? t[e < 0 ? 0 : t.length - 1] : n.getBoundingClientRect();
}
const cd = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function $l(n, e, t) {
  let { node: r, offset: i, atom: s } = n.docView.domFromPos(e, t < 0 ? -1 : 1), o = Hr || Be;
  if (r.nodeType == 3)
    if (o && (cd.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = ct(tt(r, i, i), t);
      if (Be && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = ct(tt(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let u = ct(tt(r, i, i + 1), -1);
          if (u.top != a.top)
            return Tn(u, u.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, u = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, u = -1) : t >= 0 && i == r.nodeValue.length ? (a--, u = 1) : t < 0 ? a-- : c++, Tn(ct(tt(r, a, c), 1), u < 0);
    }
  if (!n.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
    if (s == null && i && (t < 0 || i == je(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return ai(a.getBoundingClientRect(), !1);
    }
    if (s == null && i < je(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return ai(a.getBoundingClientRect(), !0);
    }
    return ai(r.getBoundingClientRect(), t >= 0);
  }
  if (s == null && i && (t < 0 || i == je(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? tt(a, je(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return Tn(ct(c, 1), !1);
  }
  if (s == null && i < je(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? tt(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return Tn(ct(c, -1), !0);
  }
  return Tn(ct(r.nodeType == 3 ? tt(r) : r, -t), t >= 0);
}
function Tn(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function ai(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function jl(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function ud(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return jl(n, e, () => {
    let { node: s } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(s, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        s = l.dom;
        break;
      }
      s = l.dom.parentNode;
    }
    let o = $l(n, i.pos, 1);
    for (let l = s.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = tt(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let u = a[c];
        if (u.bottom > u.top + 1 && (t == "up" ? o.top - u.top > (u.bottom - o.top) * 2 : u.bottom - o.bottom > (o.bottom - u.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const dd = /[\u0590-\u08ac]/;
function fd(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, s = !i, o = i == r.parent.content.size, l = n.domSelection();
  return !dd.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : jl(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: u, anchorOffset: d } = n.domSelectionRange(), f = l.caretBidiLevel;
    l.modify("move", t, "character");
    let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: m } = n.domSelectionRange(), y = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
    try {
      l.collapse(u, d), a && (a != u || c != d) && l.extend && l.extend(a, c);
    } catch {
    }
    return f != null && (l.caretBidiLevel = f), y;
  });
}
let Qs = null, eo = null, to = !1;
function hd(n, e, t) {
  return Qs == e && eo == t ? to : (Qs = e, eo = t, to = t == "up" || t == "down" ? ud(n, e, t) : fd(n, e, t));
}
const Pe = 0, no = 1, tn = 2, Ue = 3;
class Zn {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = Pe, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.previousSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.previousSibling;
        return s ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.nextSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.nextSibling;
        return s ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > xe(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !1;
            break;
          }
          if (s.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !0;
            break;
          }
          if (s.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  // Scan up the dom finding the first desc that is a descendant of
  // this one.
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let s = this.getDesc(i), o;
      if (s && (!t || s.node))
        if (r && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          r = !1;
        else
          return s;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let s = this.getDesc(i);
      if (s)
        return s.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], s = r + i.size;
      if (r == e && s != r) {
        for (; !i.border && i.children.length; )
          i = i.children[0];
        return i;
      }
      if (e < s)
        return i.descAt(e - r - i.border);
      r = s;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let s = 0; r < this.children.length; r++) {
      let o = this.children[r], l = s + o.size;
      if (l > e || o instanceof ql) {
        i = e - s;
        break;
      }
      s = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let s; r && !(s = this.children[r - 1]).size && s instanceof Wl && s.side >= 0; r--)
      ;
    if (t <= 0) {
      let s, o = !0;
      for (; s = r ? this.children[r - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); r--, o = !1)
        ;
      return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : { node: this.contentDOM, offset: s ? xe(s.dom) + 1 : 0 };
    } else {
      let s, o = !0;
      for (; s = r < this.children.length ? this.children[r] : null, !(!s || s.dom.parentNode == this.contentDOM); r++, o = !1)
        ;
      return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : { node: this.contentDOM, offset: s ? xe(s.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, s = -1;
    for (let o = r, l = 0; ; l++) {
      let a = this.children[l], c = o + a.size;
      if (i == -1 && e <= c) {
        let u = o + a.border;
        if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, u);
        e = o;
        for (let d = l; d > 0; d--) {
          let f = this.children[d - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            i = xe(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let u = l + 1; u < this.children.length; u++) {
          let d = this.children[u];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(-1)) {
            s = xe(d.dom);
            break;
          }
          t += d.size;
        }
        s == -1 && (s = this.contentDOM.childNodes.length);
        break;
      }
      o = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: s };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let s = Math.min(e, t), o = Math.max(e, t);
    for (let f = 0, h = 0; f < this.children.length; f++) {
      let p = this.children[f], m = h + p.size;
      if (s > h && o < m)
        return p.setSelection(e - h - p.border, t - h - p.border, r, i);
      h = m;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.getSelection(), u = !1;
    if ((Be || ae) && e == t) {
      let { node: f, offset: h } = l;
      if (f.nodeType == 3) {
        if (u = !!(h && f.nodeValue[h - 1] == `
`), u && h == f.nodeValue.length)
          for (let p = f, m; p; p = p.parentNode) {
            if (m = p.nextSibling) {
              m.nodeName == "BR" && (l = a = { node: m.parentNode, offset: xe(m) + 1 });
              break;
            }
            let y = p.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let p = f.childNodes[h - 1];
        u = p && (p.nodeName == "BR" || p.contentEditable == "false");
      }
    }
    if (Be && c.focusNode && c.focusNode != a.node && c.focusNode.nodeType == 1) {
      let f = c.focusNode.childNodes[c.focusOffset];
      f && f.contentEditable == "false" && (i = !0);
    }
    if (!(i || u && ae) && Ht(l.node, l.offset, c.anchorNode, c.anchorOffset) && Ht(a.node, a.offset, c.focusNode, c.focusOffset))
      return;
    let d = !1;
    if ((c.extend || e == t) && !u) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), d = !0;
      } catch {
      }
    }
    if (!d) {
      if (e > t) {
        let h = l;
        l = a, a = h;
      }
      let f = document.createRange();
      f.setEnd(a.node, a.offset), f.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(f);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let s = this.children[i], o = r + s.size;
      if (r == o ? e <= o && t >= r : e < o && t > r) {
        let l = r + s.border, a = o - s.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == o ? tn : no, e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = Ue : s.markDirty(e - l, t - l);
          return;
        } else
          s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? tn : Ue;
      }
      r = o;
    }
    this.dirty = tn;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? tn : no;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
}
class Wl extends Zn {
  constructor(e, t, r, i) {
    let s, o = t.type.toDOM;
    if (typeof o == "function" && (o = o(r, () => {
      if (!s)
        return i;
      if (s.parent)
        return s.parent.posBeforeChild(s);
    })), !t.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o), o = l;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = t, this.widget = t, s = this;
  }
  matchesWidget(e) {
    return this.dirty == Pe && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class pd extends Zn {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Ft extends Zn {
  constructor(e, t, r, i) {
    super(e, [], r, i), this.mark = t;
  }
  static create(e, t, r, i) {
    let s = i.nodeViews[t.type.name], o = s && s(t, i, r);
    return (!o || !o.dom) && (o = qe.renderSpec(document, t.type.spec.toDOM(t, r))), new Ft(e, t, o.dom, o.contentDOM || o.dom);
  }
  parseRule() {
    return this.dirty & Ue || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM || void 0 };
  }
  matchesMark(e) {
    return this.dirty != Ue && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != Pe) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Pe;
    }
  }
  slice(e, t, r) {
    let i = Ft.create(this.parent, this.mark, !0, r), s = this.children, o = this.size;
    t < o && (s = zi(s, t, o, r)), e > 0 && (s = zi(s, 0, e, r));
    for (let l = 0; l < s.length; l++)
      s[l].parent = i;
    return i.children = s, i;
  }
}
class _t extends Zn {
  constructor(e, t, r, i, s, o, l, a, c) {
    super(e, [], s, o), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l, o && this.updateChildren(a, c);
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, s, o) {
    let l = s.nodeViews[t.type.name], a, c = l && l(t, s, () => {
      if (!a)
        return o;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), u = c && c.dom, d = c && c.contentDOM;
    if (t.isText) {
      if (!u)
        u = document.createTextNode(t.text);
      else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else
      u || ({ dom: u, contentDOM: d } = qe.renderSpec(document, t.type.spec.toDOM(t)));
    !d && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
    let f = u;
    return u = Ul(u, r, t), c ? a = new md(e, t, r, i, u, d || null, f, c, s, o + 1) : t.isText ? new Fr(e, t, r, i, u, f, s) : new _t(e, t, r, i, u, d || null, f, s, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => k.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == Pe && e.eq(this.node) && Vi(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, s = e.composing ? this.localCompositionInfo(e, t) : null, o = s && s.pos > -1 ? s : null, l = s && s.pos < 0, a = new yd(this, o && o.node, e);
    kd(this.node, this.innerDeco, (c, u, d) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !d && a.syncToMarks(u == this.node.childCount ? V.none : this.node.child(u).marks, r, e), a.placeWidget(c, e, i);
    }, (c, u, d, f) => {
      a.syncToMarks(c.marks, r, e);
      let h;
      a.findNodeMatch(c, u, d, f) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, u, d, h, e) || a.updateNextNode(c, u, d, e, f) || a.addNode(c, u, d, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == tn) && (o && this.protectLocalComposition(e, o), Kl(this.contentDOM, this.children, e), dn && wd(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof L) || r < t || i > t + this.node.content.size)
      return null;
    let s = e.domSelectionRange(), o = xd(s.focusNode, s.focusOffset);
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let l = o.nodeValue, a = Cd(this.node.content, l, r - t, i - t);
      return a < 0 ? null : { node: o, pos: a, text: l };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let s = t;
    for (; s.parentNode != this.contentDOM; s = s.parentNode) {
      for (; s.previousSibling; )
        s.parentNode.removeChild(s.previousSibling);
      for (; s.nextSibling; )
        s.parentNode.removeChild(s.nextSibling);
      s.pmViewDesc && (s.pmViewDesc = void 0);
    }
    let o = new pd(this, s, t, i);
    e.input.compositionNodes.push(o), this.children = zi(this.children, r, r + i.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == Ue || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = Pe;
  }
  updateOuterDeco(e) {
    if (Vi(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = Jl(this.dom, this.nodeDOM, Bi(this.outerDeco, this.node, t), Bi(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable");
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function ro(n, e, t, r, i) {
  return Ul(r, e, n), new _t(void 0, n, e, t, r, r, r, i, 0);
}
class Fr extends _t {
  constructor(e, t, r, i, s, o, l) {
    super(e, t, r, i, s, null, o, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == Ue || this.dirty != Pe && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != Pe || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = Pe, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), s = document.createTextNode(i.text);
    return new Fr(this.parent, i, this.outerDeco, this.innerDeco, s, s, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = Ue);
  }
  get domAtom() {
    return !1;
  }
}
class ql extends Zn {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Pe && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class md extends _t {
  constructor(e, t, r, i, s, o, l, a, c, u) {
    super(e, t, r, i, s, o, l, c, u), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == Ue)
      return !1;
    if (this.spec.update) {
      let s = this.spec.update(e, t, r);
      return s && this.updateInner(e, t, r, i), s;
    } else
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function Kl(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let s = 0; s < e.length; s++) {
    let o = e[s], l = o.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = io(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (o instanceof Ft) {
      let a = r ? r.previousSibling : n.lastChild;
      Kl(o.contentDOM, o.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = io(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const Rn = function(n) {
  n && (this.nodeName = n);
};
Rn.prototype = /* @__PURE__ */ Object.create(null);
const Nt = [new Rn()];
function Bi(n, e, t) {
  if (n.length == 0)
    return Nt;
  let r = t ? Nt[0] : new Rn(), i = [r];
  for (let s = 0; s < n.length; s++) {
    let o = n[s].type.attrs;
    if (o) {
      o.nodeName && i.push(r = new Rn(o.nodeName));
      for (let l in o) {
        let a = o[l];
        a != null && (t && i.length == 1 && i.push(r = new Rn(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function Jl(n, e, t, r) {
  if (t == Nt && r == Nt)
    return e;
  let i = e;
  for (let s = 0; s < r.length; s++) {
    let o = r[s], l = t[s];
    if (s) {
      let a;
      l && l.nodeName == o.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = Nt[0]), i = a;
    }
    gd(i, l || Nt[0], o);
  }
  return i;
}
function gd(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let s = 0; s < r.length; s++)
      i.indexOf(r[s]) == -1 && n.classList.remove(r[s]);
    for (let s = 0; s < i.length; s++)
      r.indexOf(i[s]) == -1 && n.classList.add(i[s]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function Ul(n, e, t) {
  return Jl(n, n, Nt, Bi(e, t, n.nodeType != 1));
}
function Vi(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function io(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class yd {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = vd(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r) {
    let i = 0, s = this.stack.length >> 1, o = Math.min(s, e.length);
    for (; i < o && (i == s - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < s; )
      this.destroyRest(), this.top.dirty = Pe, this.index = this.stack.pop(), this.top = this.stack.pop(), s--;
    for (; s < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++)
        if (this.top.children[a].matchesMark(e[s])) {
          l = a;
          break;
        }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = Ft.create(this.top, e[s], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, s++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let s = -1, o;
    if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r))
      s = this.top.children.indexOf(o, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          s = l;
          break;
        }
      }
    return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, s) {
    let o = this.top.children[i];
    return o.dirty == Ue && o.dom == o.contentDOM && (o.dirty = tn), o.update(e, t, r, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, s) {
    for (let o = this.index; o < this.top.children.length; o++) {
      let l = this.top.children[o];
      if (l instanceof _t) {
        let a = this.preMatch.matched.get(l);
        if (a != null && a != s)
          return !1;
        let c = l.dom;
        if (!(this.lock && (c == this.lock || c.nodeType == 1 && c.contains(this.lock.parentNode)) && !(e.isText && l.node && l.node.isText && l.nodeDOM.nodeValue == e.text && l.dirty != Ue && Vi(t, l.outerDeco))) && l.update(e, t, r, i))
          return this.destroyBetween(this.index, o), l.dom != c && (this.changed = !0), this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, s) {
    this.top.children.splice(this.index++, 0, _t.create(this.top, e, t, r, i, s)), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let s = new Wl(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof Ft; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Fr) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((ae || he) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new ql(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
}
function vd(n, e) {
  let t = e, r = t.children.length, i = n.childCount, s = /* @__PURE__ */ new Map(), o = [];
  e:
    for (; i > 0; ) {
      let l;
      for (; ; )
        if (r) {
          let c = t.children[r - 1];
          if (c instanceof Ft)
            t = c, r = c.children.length;
          else {
            l = c, r--;
            break;
          }
        } else {
          if (t == e)
            break e;
          r = t.parent.children.indexOf(t), t = t.parent;
        }
      let a = l.node;
      if (a) {
        if (a != n.child(i - 1))
          break;
        --i, s.set(l, i), o.push(l);
      }
    }
  return { index: i, matched: s, matches: o.reverse() };
}
function bd(n, e) {
  return n.type.side - e.type.side;
}
function kd(n, e, t, r) {
  let i = e.locals(n), s = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let u = n.child(c);
      r(u, i, e.forChild(s, u), c), s += u.nodeSize;
    }
    return;
  }
  let o = 0, l = [], a = null;
  for (let c = 0; ; ) {
    if (o < i.length && i[o].to == s) {
      let p = i[o++], m;
      for (; o < i.length && i[o].to == s; )
        (m || (m = [p])).push(i[o++]);
      if (m) {
        m.sort(bd);
        for (let y = 0; y < m.length; y++)
          t(m[y], c, !!a);
      } else
        t(p, c, !!a);
    }
    let u, d;
    if (a)
      d = -1, u = a, a = null;
    else if (c < n.childCount)
      d = c, u = n.child(c++);
    else
      break;
    for (let p = 0; p < l.length; p++)
      l[p].to <= s && l.splice(p--, 1);
    for (; o < i.length && i[o].from <= s && i[o].to > s; )
      l.push(i[o++]);
    let f = s + u.nodeSize;
    if (u.isText) {
      let p = f;
      o < i.length && i[o].from < p && (p = i[o].from);
      for (let m = 0; m < l.length; m++)
        l[m].to < p && (p = l[m].to);
      p < f && (a = u.cut(p - s), u = u.cut(0, p - s), f = p, d = -1);
    }
    let h = u.isInline && !u.isLeaf ? l.filter((p) => !p.inline) : l.slice();
    r(u, h, e.forChild(s, u), d), s = f;
  }
}
function wd(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function xd(n, e) {
  for (; ; ) {
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.childNodes.length > e && n.childNodes[e].nodeType == 3)
        return n.childNodes[e];
      n = n.childNodes[e - 1], e = je(n);
    } else if (n.nodeType == 1 && e < n.childNodes.length)
      n = n.childNodes[e], e = 0;
    else
      return null;
  }
}
function Cd(n, e, t, r) {
  for (let i = 0, s = 0; i < n.childCount && s <= r; ) {
    let o = n.child(i++), l = s;
    if (s += o.nodeSize, !o.isText)
      continue;
    let a = o.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (s += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (s >= t) {
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function zi(n, e, t, r, i) {
  let s = [];
  for (let o = 0, l = 0; o < n.length; o++) {
    let a = n[o], c = l, u = l += a.size;
    c >= t || u <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, r)), i && (s.push(i), i = void 0), u > t && s.push(a.slice(t - c, a.size, r)));
  }
  return s;
}
function cs(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), s = i && i.size == 0, o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, c;
  if (zr(t)) {
    for (a = l; i && !i.node; )
      i = i.parent;
    let u = i.node;
    if (i && u.isAtom && A.isSelectable(u) && i.parent && !(u.isInline && Uu(t.focusNode, t.focusOffset, i.dom))) {
      let d = i.posBefore;
      c = new A(o == d ? l : r.resolve(d));
    }
  } else {
    let u = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (u < 0)
      return null;
    a = r.resolve(u);
  }
  if (!c) {
    let u = e == "pointer" || n.state.selection.head < l.pos && !s ? 1 : -1;
    c = us(n, a, l, u);
  }
  return c;
}
function Zl(n) {
  return n.editable ? n.hasFocus() : Yl(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function it(n, e = !1) {
  let t = n.state.selection;
  if (Gl(n, t), !!Zl(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && he) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && Ht(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      Md(n);
    else {
      let { anchor: r, head: i } = t, s, o;
      so && !(t instanceof L) && (t.$from.parent.inlineContent || (s = oo(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = oo(n, t.to))), n.docView.setSelection(r, i, n.root, e), so && (s && lo(s), o && lo(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Sd(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const so = ae || he && Yu < 63;
function oo(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, s = r ? t.childNodes[r - 1] : null;
  if (ae && i && i.contentEditable == "false")
    return ci(i);
  if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return ci(i);
    if (s)
      return ci(s);
  }
}
function ci(n) {
  return n.contentEditable = "true", ae && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function lo(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Sd(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Zl(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Md(n) {
  let e = n.domSelection(), t = document.createRange(), r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setEnd(r.parentNode, xe(r) + 1) : t.setEnd(r, 0), t.collapse(!1), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && pe && mt <= 11 && (r.disabled = !0, r.disabled = !1);
}
function Gl(n, e) {
  if (e instanceof A) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (ao(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    ao(n);
}
function ao(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function us(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || L.between(e, t, r);
}
function co(n) {
  return n.editable && !n.hasFocus() ? !1 : Yl(n);
}
function Yl(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Od(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return Ht(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Hi(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), s = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return s && R.findFrom(s, e);
}
function At(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function uo(n, e, t) {
  let r = n.state.selection;
  if (r instanceof L) {
    if (!r.empty || t.indexOf("s") > -1)
      return !1;
    if (n.endOfTextblock(e > 0 ? "right" : "left")) {
      let i = Hi(n.state, e);
      return i && i instanceof A ? At(n, i) : !1;
    } else if (!(Oe && t.indexOf("m") > -1)) {
      let i = r.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, o;
      if (!s || s.isText)
        return !1;
      let l = e < 0 ? i.pos - s.nodeSize : i.pos;
      return s.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? A.isSelectable(s) ? At(n, new A(e < 0 ? n.state.doc.resolve(i.pos - s.nodeSize) : i)) : Hr ? At(n, new L(n.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1;
    }
  } else {
    if (r instanceof A && r.node.isInline)
      return At(n, new L(e > 0 ? r.$to : r.$from));
    {
      let i = Hi(n.state, e);
      return i ? At(n, i) : !1;
    }
  }
}
function Or(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Pn(n) {
  let e = n.pmViewDesc;
  return e && e.size == 0 && (n.nextSibling || n.nodeName != "BR");
}
function ui(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, s, o = !1;
  for (Be && t.nodeType == 1 && r < Or(t) && Pn(t.childNodes[r]) && (o = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (Pn(l))
          i = t, s = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Xl(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && Pn(l); )
          i = t.parentNode, s = xe(l), l = l.previousSibling;
        if (l)
          t = l, r = Or(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  o ? Fi(n, t, r) : i && Fi(n, i, s);
}
function di(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = Or(t), s, o;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (Pn(l))
        s = t, o = ++r;
      else
        break;
    } else {
      if (Xl(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && Pn(l); )
          s = l.parentNode, o = xe(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = Or(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  s && Fi(n, s, o);
}
function Xl(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Fi(n, e, t) {
  let r = n.domSelection();
  if (zr(r)) {
    let s = document.createRange();
    s.setEnd(e, t), s.setStart(e, t), r.removeAllRanges(), r.addRange(s);
  } else
    r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && it(n);
  }, 50);
}
function fo(n, e, t) {
  let r = n.state.selection;
  if (r instanceof L && !r.empty || t.indexOf("s") > -1 || Oe && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: s } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = Hi(n.state, e);
    if (o && o instanceof A)
      return At(n, o);
  }
  if (!i.parent.inlineContent) {
    let o = e < 0 ? i : s, l = r instanceof Re ? R.near(o, e) : R.findFrom(o, e);
    return l ? At(n, l) : !1;
  }
  return !1;
}
function ho(n, e) {
  if (!(n.state.selection instanceof L))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (s && !s.isText) {
    let o = n.state.tr;
    return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), n.dispatch(o), !0;
  }
  return !1;
}
function po(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function Td(n) {
  if (!ae || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    po(n, r, "true"), setTimeout(() => po(n, r, "false"), 20);
  }
  return !1;
}
function Ed(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function Ad(n, e) {
  let t = e.keyCode, r = Ed(e);
  return t == 8 || Oe && t == 72 && r == "c" ? ho(n, -1) || ui(n) : t == 46 || Oe && t == 68 && r == "c" ? ho(n, 1) || di(n) : t == 13 || t == 27 ? !0 : t == 37 || Oe && t == 66 && r == "c" ? uo(n, -1, r) || ui(n) : t == 39 || Oe && t == 70 && r == "c" ? uo(n, 1, r) || di(n) : t == 38 || Oe && t == 80 && r == "c" ? fo(n, -1, r) || ui(n) : t == 40 || Oe && t == 78 && r == "c" ? Td(n) || fo(n, 1, r) || di(n) : r == (Oe ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90);
}
function Ql(n, e) {
  n.someProp("transformCopied", (h) => {
    e = h(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: s } = e;
  for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, s--;
    let h = r.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let o = n.someProp("clipboardSerializer") || qe.fromSchema(n.state.schema), l = sa(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, d = 0;
  for (; c && c.nodeType == 1 && (u = ia[c.nodeName.toLowerCase()]); ) {
    for (let h = u.length - 1; h >= 0; h--) {
      let p = l.createElement(u[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), d++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${d ? ` -${d}` : ""} ${JSON.stringify(t)}`);
  let f = n.someProp("clipboardTextSerializer", (h) => h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f };
}
function ea(n, e, t, r, i) {
  let s = i.parent.type.spec.code, o, l;
  if (!t && !e)
    return null;
  let a = e && (r || s || !t);
  if (a) {
    if (n.someProp("transformPastedText", (f) => {
      e = f(e, s || r, n);
    }), s)
      return e ? new C(k.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : C.empty;
    let d = n.someProp("clipboardTextParser", (f) => f(e, i, r, n));
    if (d)
      l = d;
    else {
      let f = i.marks(), { schema: h } = n.state, p = qe.fromSchema(h);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let y = o.appendChild(document.createElement("p"));
        m && y.appendChild(p.serializeNode(h.text(m, f)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (d) => {
      t = d(t, n);
    }), o = Ld(t), Hr && Id(o);
  let c = o && o.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let d = +u[3]; d > 0; d--) {
      let f = o.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      o = f;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || an.fromSchema(n.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || u),
    context: i,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !Nd.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = Rd(mo(l, +u[1], +u[2]), u[4]);
  else if (l = C.maxOpen(Dd(l.content, i), !0), l.openStart || l.openEnd) {
    let d = 0, f = 0;
    for (let h = l.content.firstChild; d < l.openStart && !h.type.spec.isolating; d++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; f < l.openEnd && !h.type.spec.isolating; f++, h = h.lastChild)
      ;
    l = mo(l, d, f);
  }
  return n.someProp("transformPasted", (d) => {
    l = d(l, n);
  }), l;
}
const Nd = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function Dd(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), s, o = [];
    if (n.forEach((l) => {
      if (!o)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return o = null;
      if (c = o.length && s.length && na(a, s, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = ra(o[o.length - 1], s.length));
        let u = ta(l, a);
        o.push(u), i = i.matchType(u.type), s = a;
      }
    }), o)
      return k.from(o);
  }
  return n;
}
function ta(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, k.from(n));
  return n;
}
function na(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let s = na(n, e, t, r.lastChild, i + 1);
    if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(k.from(ta(t, n, i + 1))));
  }
}
function ra(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, ra(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(k.empty, !0);
  return n.copy(t.append(r));
}
function _i(n, e, t, r, i, s) {
  let o = e < 0 ? n.firstChild : n.lastChild, l = o.content;
  return i < r - 1 && (l = _i(l, e, t, r, i + 1, s)), i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, n.childCount > 1 || s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(k.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l));
}
function mo(n, e, t) {
  return e < n.openStart && (n = new C(_i(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new C(_i(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const ia = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let go = null;
function sa() {
  return go || (go = document.implementation.createHTMLDocument("title"));
}
function Ld(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = sa().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && ia[r[1].toLowerCase()]) && (n = i.map((s) => "<" + s + ">").join("") + n + i.map((s) => "</" + s + ">").reverse().join("")), t.innerHTML = n, i)
    for (let s = 0; s < i.length; s++)
      t = t.querySelector(i[s]) || t;
  return t;
}
function Id(n) {
  let e = n.querySelectorAll(he ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function Rd(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: s, openEnd: o } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = k.from(a.create(r[l + 1], i)), s++, o++;
  }
  return new C(i, s, o);
}
const ce = {}, ue = {}, Pd = { touchstart: !0, touchmove: !0 };
class Bd {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function Vd(n) {
  for (let e in ce) {
    let t = ce[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      Hd(n, r) && !ds(n, r) && (n.editable || !(r.type in ue)) && t(n, r);
    }, Pd[e] ? { passive: !0 } : void 0);
  }
  ae && n.dom.addEventListener("input", () => null), $i(n);
}
function pt(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function zd(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function $i(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => ds(n, r));
  });
}
function ds(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function Hd(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function Fd(n, e) {
  !ds(n, e) && ce[e.type] && (n.editable || !(e.type in ue)) && ce[e.type](n, e);
}
ue.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !la(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(We && he && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), dn && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, en(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else
      n.someProp("handleKeyDown", (r) => r(n, t)) || Ad(n, t) ? t.preventDefault() : pt(n, "key");
};
ue.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
ue.keypress = (n, e) => {
  let t = e;
  if (la(n, t) || !t.charCode || t.ctrlKey && !t.altKey || Oe && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof L) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    n.someProp("handleTextInput", (s) => s(n, r.$from.pos, r.$to.pos, i)) || n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function _r(n) {
  return { left: n.clientX, top: n.clientY };
}
function _d(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function fs(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let s = n.state.doc.resolve(r);
  for (let o = s.depth + 1; o > 0; o--)
    if (n.someProp(e, (l) => o > s.depth ? l(n, t, s.nodeAfter, s.before(o), i, !0) : l(n, t, s.node(o), s.before(o), i, !1)))
      return !0;
  return !1;
}
function ln(n, e, t) {
  n.focused || n.focus();
  let r = n.state.tr.setSelection(e);
  t == "pointer" && r.setMeta("pointer", !0), n.dispatch(r);
}
function $d(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && A.isSelectable(r) ? (ln(n, new A(t), "pointer"), !0) : !1;
}
function jd(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof A && (r = t.node);
  let s = n.state.doc.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let l = o > s.depth ? s.nodeAfter : s.node(o);
    if (A.isSelectable(l)) {
      r && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o);
      break;
    }
  }
  return i != null ? (ln(n, A.create(n.state.doc, i), "pointer"), !0) : !1;
}
function Wd(n, e, t, r, i) {
  return fs(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (s) => s(n, e, r)) || (i ? jd(n, t) : $d(n, t));
}
function qd(n, e, t, r) {
  return fs(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function Kd(n, e, t, r) {
  return fs(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || Jd(n, t, r);
}
function Jd(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (ln(n, L.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let o = s > i.depth ? i.nodeAfter : i.node(s), l = i.before(s);
    if (o.inlineContent)
      ln(n, L.create(r, l + 1, l + 1 + o.content.size), "pointer");
    else if (A.isSelectable(o))
      ln(n, A.create(r, l), "pointer");
    else
      continue;
    return !0;
  }
}
function hs(n) {
  return Tr(n);
}
const oa = Oe ? "metaKey" : "ctrlKey";
ce.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = hs(n), i = Date.now(), s = "singleClick";
  i - n.input.lastClick.time < 500 && _d(t, n.input.lastClick) && !t[oa] && (n.input.lastClick.type == "singleClick" ? s = "doubleClick" : n.input.lastClick.type == "doubleClick" && (s = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: s };
  let o = n.posAtCoords(_r(t));
  o && (s == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new Ud(n, o, t, !!r)) : (s == "doubleClick" ? qd : Kd)(n, o.pos, o.inside, t) ? t.preventDefault() : pt(n, "pointer"));
};
class Ud {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[oa], this.allowDefault = r.shiftKey;
    let s, o;
    if (t.inside > -1)
      s = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let u = e.state.doc.resolve(t.pos);
      s = u.parent, o = u.depth ? u.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof A && c.from <= o && c.to > o) && (this.mightDrag = {
      node: s,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && Be && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), pt(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => it(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(_r(e))), this.updateAllowDefault(e), this.allowDefault || !t ? pt(this.view, "pointer") : Wd(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    ae && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    he && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (ln(this.view, R.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : pt(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), pt(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
ce.touchstart = (n) => {
  n.input.lastTouch = Date.now(), hs(n), pt(n, "pointer");
};
ce.touchmove = (n) => {
  n.input.lastTouch = Date.now(), pt(n, "pointer");
};
ce.contextmenu = (n) => hs(n);
function la(n, e) {
  return n.composing ? !0 : ae && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const Zd = We ? 5e3 : -1;
ue.compositionstart = ue.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$from;
    if (e.selection.empty && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), Tr(n, !0), n.markCursor = null;
    else if (Tr(n), Be && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0; ) {
        let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          n.domSelection().collapse(o, o.nodeValue.length);
          break;
        } else
          i = o, s = -1;
      }
    }
    n.input.composing = !0;
  }
  aa(n, Zd);
};
ue.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, aa(n, 20));
};
function aa(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => Tr(n), e));
}
function ca(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = Gd()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function Gd() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function Tr(n, e = !1) {
  if (!(We && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), ca(n), e || n.docView && n.docView.dirty) {
      let t = cs(n);
      return t && !t.eq(n.state.selection) ? n.dispatch(n.state.tr.setSelection(t)) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function Yd(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const fn = pe && mt < 15 || dn && Xu < 604;
ce.copy = ue.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let s = fn ? null : t.clipboardData, o = r.content(), { dom: l, text: a } = Ql(n, o);
  s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : Yd(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Xd(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function Qd(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus(), setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? ji(n, r.value, null, e) : ji(n, r.textContent, r.innerHTML, e);
  }, 50);
}
function ji(n, e, t, r) {
  let i = ea(n, e, t, n.input.shiftKey, n.state.selection.$from);
  if (n.someProp("handlePaste", (l) => l(n, r, i || C.empty)))
    return !0;
  if (!i)
    return !1;
  let s = Xd(i), o = s ? n.state.tr.replaceSelectionWith(s, n.input.shiftKey) : n.state.tr.replaceSelection(i);
  return n.dispatch(o.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
ue.paste = (n, e) => {
  let t = e;
  if (n.composing && !We)
    return;
  let r = fn ? null : t.clipboardData;
  r && ji(n, r.getData("text/plain"), r.getData("text/html"), t) ? t.preventDefault() : Qd(n, t);
};
class ef {
  constructor(e, t) {
    this.slice = e, this.move = t;
  }
}
const ua = Oe ? "altKey" : "ctrlKey";
ce.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, s = i.empty ? null : n.posAtCoords(_r(t));
  if (!(s && s.pos >= i.from && s.pos <= (i instanceof A ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      n.dispatch(n.state.tr.setSelection(A.create(n.state.doc, r.mightDrag.pos)));
    else if (t.target && t.target.nodeType == 1) {
      let c = n.docView.nearestDesc(t.target, !0);
      c && c.node.type.spec.draggable && c != n.docView && n.dispatch(n.state.tr.setSelection(A.create(n.state.doc, c.posBefore)));
    }
  }
  let o = n.state.selection.content(), { dom: l, text: a } = Ql(n, o);
  t.dataTransfer.clearData(), t.dataTransfer.setData(fn ? "Text" : "text/html", l.innerHTML), t.dataTransfer.effectAllowed = "copyMove", fn || t.dataTransfer.setData("text/plain", a), n.dragging = new ef(o, !t[ua]);
};
ce.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
ue.dragover = ue.dragenter = (n, e) => e.preventDefault();
ue.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(_r(t));
  if (!i)
    return;
  let s = n.state.doc.resolve(i.pos), o = r && r.slice;
  o ? n.someProp("transformPasted", (p) => {
    o = p(o, n);
  }) : o = ea(n, t.dataTransfer.getData(fn ? "Text" : "text/plain"), fn ? null : t.dataTransfer.getData("text/html"), !1, s);
  let l = !!(r && !t[ua]);
  if (n.someProp("handleDrop", (p) => p(n, t, o || C.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!o)
    return;
  t.preventDefault();
  let a = o ? Nl(n.state.doc, s.pos, o) : s.pos;
  a == null && (a = s.pos);
  let c = n.state.tr;
  l && c.deleteSelection();
  let u = c.mapping.map(a), d = o.openStart == 0 && o.openEnd == 0 && o.content.childCount == 1, f = c.doc;
  if (d ? c.replaceRangeWith(u, u, o.content.firstChild) : c.replaceRange(u, u, o), c.doc.eq(f))
    return;
  let h = c.doc.resolve(u);
  if (d && A.isSelectable(o.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(o.content.firstChild))
    c.setSelection(new A(h));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, y, v, w) => p = w), c.setSelection(us(n, h, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
ce.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && it(n);
  }, 20));
};
ce.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
ce.beforeinput = (n, e) => {
  if (he && We && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (s) => s(n, en(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in ue)
  ce[n] = ue[n];
function _n(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class ps {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || Pt, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: s, deleted: o } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return o ? null : new Ee(s - r, s - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof ps && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && _n(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class gt {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Pt;
  }
  map(e, t, r, i) {
    let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return s >= o ? null : new Ee(s, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof gt && _n(this.attrs, e.attrs) && _n(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof gt;
  }
  destroy() {
  }
}
class ms {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Pt;
  }
  map(e, t, r, i) {
    let s = e.mapResult(t.from + i, 1);
    if (s.deleted)
      return null;
    let o = e.mapResult(t.to + i, -1);
    return o.deleted || o.pos <= s.pos ? null : new Ee(s.pos - r, o.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), s;
    return i == t.from && !(s = e.child(r)).isText && i + s.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof ms && _n(this.attrs, e.attrs) && _n(this.spec, e.spec);
  }
  destroy() {
  }
}
class Ee {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new Ee(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new Ee(e, e, new ps(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new Ee(e, t, new gt(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new Ee(e, t, new ms(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof gt;
  }
}
const Yt = [], Pt = {};
class J {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : Yt, this.children = t.length ? t : Yt;
  }
  /**
  Create a set of decorations, using the structure of the given
  document.
  */
  static create(e, t) {
    return t.length ? Er(t, e, 0, Pt) : re;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, s) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= t && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, r, i + l, s);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == re || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || Pt);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, s) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec);
    }
    return this.children.length ? tf(this.children, o || [], e, t, r, i, s) : o ? new J(o.sort(Bt), Yt) : re;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Needs access to the current document to
  create the appropriate tree structure.
  */
  add(e, t) {
    return t.length ? this == re ? J.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, s = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = fa(t, l, c)) {
        for (i || (i = this.children.slice()); s < i.length && i[s] < a; )
          s += 3;
        i[s] == a ? i[s + 2] = i[s + 2].addInner(l, u, c + 1) : i.splice(s, 0, a, a + l.nodeSize, Er(u, l, c + 1, Pt)), s += 3;
      }
    });
    let o = da(s ? ha(t) : t, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new J(o.length ? this.local.concat(o).sort(Bt) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == re ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let s = 0; s < r.length; s += 3) {
      let o, l = r[s] + t, a = r[s + 1] + t;
      for (let u = 0, d; u < e.length; u++)
        (d = e[u]) && d.from > l && d.to < a && (e[u] = null, (o || (o = [])).push(d));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[s + 2].removeInner(o, l + 1);
      c != re ? r[s + 2] = c : (r.splice(s, 3), s -= 3);
    }
    if (i.length) {
      for (let s = 0, o; s < e.length; s++)
        if (o = e[s])
          for (let l = 0; l < i.length; l++)
            i[l].eq(o, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new J(i, r) : re;
  }
  /**
  @internal
  */
  forChild(e, t) {
    if (this == re)
      return this;
    if (t.isLeaf)
      return J.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let s = e + 1, o = s + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > s && a.type instanceof gt) {
        let c = Math.max(s, a.from) - s, u = Math.min(o, a.to) - s;
        c < u && (i || (i = [])).push(a.copy(c, u));
      }
    }
    if (i) {
      let l = new J(i.sort(Bt), Yt);
      return r ? new dt([l, r]) : l;
    }
    return r || re;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof J) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return gs(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == re)
      return Yt;
    if (e.inlineContent || !this.local.some(gt.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof gt || t.push(this.local[r]);
    return t;
  }
}
J.empty = new J([], []);
J.removeOverlap = gs;
const re = J.empty;
class dt {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, Pt));
    return dt.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return J.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].forChild(e, t);
      s != re && (s instanceof dt ? r = r.concat(s.members) : r.push(s));
    }
    return dt.from(r);
  }
  eq(e) {
    if (!(e instanceof dt) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e);
      if (s.length)
        if (!t)
          t = s;
        else {
          r && (t = t.slice(), r = !1);
          for (let o = 0; o < s.length; o++)
            t.push(s[o]);
        }
    }
    return t ? gs(r ? t : t.sort(Bt)) : Yt;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return re;
      case 1:
        return e[0];
      default:
        return new dt(e.every((t) => t instanceof J) ? e : e.reduce((t, r) => t.concat(r instanceof J ? r : r.members), []));
    }
  }
}
function tf(n, e, t, r, i, s, o) {
  let l = n.slice();
  for (let c = 0, u = s; c < t.maps.length; c++) {
    let d = 0;
    t.maps[c].forEach((f, h, p, m) => {
      let y = m - p - (h - f);
      for (let v = 0; v < l.length; v += 3) {
        let w = l[v + 1];
        if (w < 0 || f > w + u - d)
          continue;
        let S = l[v] + u - d;
        h >= S ? l[v + 1] = f <= S ? -2 : -1 : p >= i && y && (l[v] += y, l[v + 1] += y);
      }
      d += y;
    }), u = t.maps[c].map(u, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let u = t.map(n[c] + s), d = u - i;
      if (d < 0 || d >= r.content.size) {
        a = !0;
        continue;
      }
      let f = t.map(n[c + 1] + s, -1), h = f - i, { index: p, offset: m } = r.content.findIndex(d), y = r.maybeChild(p);
      if (y && m == d && m + y.nodeSize == h) {
        let v = l[c + 2].mapInner(t, y, u + 1, n[c] + s + 1, o);
        v != re ? (l[c] = d, l[c + 1] = h, l[c + 2] = v) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = nf(l, n, e, t, i, s, o), u = Er(c, r, 0, o);
    e = u.local;
    for (let d = 0; d < l.length; d += 3)
      l[d + 1] < 0 && (l.splice(d, 3), d -= 3);
    for (let d = 0, f = 0; d < u.children.length; d += 3) {
      let h = u.children[d];
      for (; f < l.length && l[f] < h; )
        f += 3;
      l.splice(f, 0, u.children[d], u.children[d + 1], u.children[d + 2]);
    }
  }
  return new J(e.sort(Bt), l);
}
function da(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new Ee(i.from + e, i.to + e, i.type));
  }
  return t;
}
function nf(n, e, t, r, i, s, o) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let d = a.local[u].map(r, i, c);
      d ? t.push(d) : o.onRemove && o.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + s + 1);
  return t;
}
function fa(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let s = 0, o; s < n.length; s++)
    (o = n[s]) && o.from > t && o.to < r && ((i || (i = [])).push(o), n[s] = null);
  return i;
}
function ha(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function Er(n, e, t, r) {
  let i = [], s = !1;
  e.forEach((l, a) => {
    let c = fa(n, l, a + t);
    if (c) {
      s = !0;
      let u = Er(c, l, t + a + 1, r);
      u != re && i.push(a, a + l.nodeSize, u);
    }
  });
  let o = da(s ? ha(n) : n, -t).sort(Bt);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || i.length ? new J(o, i) : re;
}
function Bt(n, e) {
  return n.from - e.from || n.to - e.to;
}
function gs(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let s = e[i];
        if (s.from == r.from) {
          s.to != r.to && (e == n && (e = n.slice()), e[i] = s.copy(s.from, r.to), yo(e, i + 1, s.copy(r.to, s.to)));
          continue;
        } else {
          s.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, s.from), yo(e, i, r.copy(s.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function yo(n, e, t) {
  for (; e < n.length && Bt(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function fi(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != re && e.push(r);
  }), n.cursorWrapper && e.push(J.create(n.state.doc, [n.cursorWrapper.deco])), dt.from(e);
}
const rf = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, sf = pe && mt <= 11;
class of {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class lf {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new of(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      pe && mt <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), sf && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, rf)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (co(this.view)) {
      if (this.suppressingSelectionUpdates)
        return it(this.view);
      if (pe && mt <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && Ht(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let s = e.focusNode; s; s = Fn(s))
      t.add(s);
    for (let s = e.anchorNode; s; s = Fn(s))
      if (t.has(s)) {
        r = s;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.observer ? this.observer.takeRecords() : [];
    this.queue.length && (t = this.queue.concat(t), this.queue.length = 0);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && co(e) && !this.ignoreSelectionChange(r), s = -1, o = -1, l = !1, a = [];
    if (e.editable)
      for (let u = 0; u < t.length; u++) {
        let d = this.registerMutation(t[u], a);
        d && (s = s < 0 ? d.from : Math.min(d.from, s), o = o < 0 ? d.to : Math.max(d.to, o), d.typeOver && (l = !0));
      }
    if (Be && a.length > 1) {
      let u = a.filter((d) => d.nodeName == "BR");
      if (u.length == 2) {
        let d = u[0], f = u[1];
        d.parentNode && d.parentNode.parentNode == f.parentNode ? f.remove() : d.remove();
      }
    }
    let c = null;
    s < 0 && i && e.input.lastFocus > Date.now() - 200 && e.input.lastTouch < Date.now() - 300 && zr(r) && (c = cs(e)) && c.eq(R.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, it(e), this.currentSelection.set(r), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o), af(e)), this.handleDOMChange(s, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || it(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++)
        t.push(e.addedNodes[u]);
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, s = e.nextSibling;
      if (pe && mt <= 11 && e.addedNodes.length)
        for (let u = 0; u < e.addedNodes.length; u++) {
          let { previousSibling: d, nextSibling: f } = e.addedNodes[u];
          (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (i = d), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (s = f);
        }
      let o = i && i.parentNode == e.target ? xe(i) + 1 : 0, l = r.localPosFromDOM(e.target, o, -1), a = s && s.parentNode == e.target ? xe(s) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else
      return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : {
        from: r.posAtStart,
        to: r.posAtEnd,
        // An event was generated for a text change that didn't change
        // any text. Mark the dom change to fall back to assuming the
        // selection was typed over with an identical value if it can't
        // find another change.
        typeOver: e.target.nodeValue == e.oldValue
      };
  }
}
let vo = /* @__PURE__ */ new WeakMap(), bo = !1;
function af(n) {
  if (!vo.has(n) && (vo.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = Be, bo)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), bo = !0;
  }
}
function cf(n) {
  let e;
  function t(a) {
    a.preventDefault(), a.stopImmediatePropagation(), e = a.getTargetRanges()[0];
  }
  n.dom.addEventListener("beforeinput", t, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", t, !0);
  let r = e.startContainer, i = e.startOffset, s = e.endContainer, o = e.endOffset, l = n.domAtPos(n.state.selection.anchor);
  return Ht(l.node, l.offset, s, o) && ([r, i, s, o] = [s, o, r, i]), { anchorNode: r, anchorOffset: i, focusNode: s, focusOffset: o };
}
function uf(n, e, t) {
  let { node: r, fromOffset: i, toOffset: s, from: o, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, u = a.anchorNode;
  if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: a.anchorOffset }], zr(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), he && n.input.lastKeyCode === 8)
    for (let y = s; y > i; y--) {
      let v = r.childNodes[y - 1], w = v.pmViewDesc;
      if (v.nodeName == "BR" && !w) {
        s = y;
        break;
      }
      if (!w || w.size)
        break;
    }
  let d = n.state.doc, f = n.someProp("domParser") || an.fromSchema(n.state.schema), h = d.resolve(o), p = null, m = f.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: i,
    to: s,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: df,
    context: h
  });
  if (c && c[0].pos != null) {
    let y = c[0].pos, v = c[1] && c[1].pos;
    v == null && (v = y), p = { anchor: y + o, head: v + o };
  }
  return { doc: m, sel: p, from: o, to: l };
}
function df(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (ae && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || ae && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
function ff(n, e, t, r, i) {
  if (e < 0) {
    let O = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, z = cs(n, O);
    if (z && !n.state.selection.eq(z)) {
      let H = n.state.tr.setSelection(z);
      O == "pointer" ? H.setMeta("pointer", !0) : O == "key" && H.scrollIntoView(), n.dispatch(H);
    }
    return;
  }
  let s = n.state.doc.resolve(e), o = s.sharedDepth(t);
  e = s.before(o + 1), t = n.state.doc.resolve(t).after(o + 1);
  let l = n.state.selection, a = uf(n, e, t), c = n.state.doc, u = c.slice(a.from, a.to), d, f;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (d = n.state.selection.to, f = "end") : (d = n.state.selection.from, f = "start"), n.input.lastKeyCode = null;
  let h = mf(u.content, a.doc.content, a.from, d, f);
  if ((dn && n.input.lastIOSEnter > Date.now() - 225 || We) && i.some((O) => O.nodeName == "DIV" || O.nodeName == "P" || O.nodeName == "LI") && (!h || h.endA >= h.endB) && n.someProp("handleKeyDown", (O) => O(n, en(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!h)
    if (r && l instanceof L && !l.empty && l.$head.sameParent(l.$anchor) && !n.composing && !(a.sel && a.sel.anchor != a.sel.head))
      h = { start: l.from, endA: l.to, endB: l.to };
    else {
      if (a.sel) {
        let O = ko(n, n.state.doc, a.sel);
        O && !O.eq(n.state.selection) && n.dispatch(n.state.tr.setSelection(O));
      }
      return;
    }
  if (he && n.cursorWrapper && a.sel && a.sel.anchor == n.cursorWrapper.deco.from && a.sel.head == a.sel.anchor) {
    let O = h.endB - h.start;
    a.sel = { anchor: a.sel.anchor + O, head: a.sel.anchor + O };
  }
  n.input.domChangeCount++, n.state.selection.from < n.state.selection.to && h.start == h.endB && n.state.selection instanceof L && (h.start > n.state.selection.from && h.start <= n.state.selection.from + 2 && n.state.selection.from >= a.from ? h.start = n.state.selection.from : h.endA < n.state.selection.to && h.endA >= n.state.selection.to - 2 && n.state.selection.to <= a.to && (h.endB += n.state.selection.to - h.endA, h.endA = n.state.selection.to)), pe && mt <= 11 && h.endB == h.start + 1 && h.endA == h.start && h.start > a.from && a.doc.textBetween(h.start - a.from - 1, h.start - a.from + 1) == "  " && (h.start--, h.endA--, h.endB--);
  let p = a.doc.resolveNoCache(h.start - a.from), m = a.doc.resolveNoCache(h.endB - a.from), y = c.resolve(h.start), v = p.sameParent(m) && p.parent.inlineContent && y.end() >= h.endA, w;
  if ((dn && n.input.lastIOSEnter > Date.now() - 225 && (!v || i.some((O) => O.nodeName == "DIV" || O.nodeName == "P")) || !v && p.pos < a.doc.content.size && (w = R.findFrom(a.doc.resolve(p.pos + 1), 1, !0)) && w.head == m.pos) && n.someProp("handleKeyDown", (O) => O(n, en(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > h.start && pf(c, h.start, h.endA, p, m) && n.someProp("handleKeyDown", (O) => O(n, en(8, "Backspace")))) {
    We && he && n.domObserver.suppressSelectionUpdates();
    return;
  }
  he && We && h.endB == h.start && (n.input.lastAndroidDelete = Date.now()), We && !v && p.start() != m.start() && m.parentOffset == 0 && p.depth == m.depth && a.sel && a.sel.anchor == a.sel.head && a.sel.head == h.endA && (h.endB -= 2, m = a.doc.resolveNoCache(h.endB - a.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(O) {
      return O(n, en(13, "Enter"));
    });
  }, 20));
  let S = h.start, g = h.endA, E, x, D;
  if (v) {
    if (p.pos == m.pos)
      pe && mt <= 11 && p.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => it(n), 20)), E = n.state.tr.delete(S, g), x = c.resolve(h.start).marksAcross(c.resolve(h.endA));
    else if (
      // Adding or removing a mark
      h.endA == h.endB && (D = hf(p.parent.content.cut(p.parentOffset, m.parentOffset), y.parent.content.cut(y.parentOffset, h.endA - y.start())))
    )
      E = n.state.tr, D.type == "add" ? E.addMark(S, g, D.mark) : E.removeMark(S, g, D.mark);
    else if (p.parent.child(p.index()).isText && p.index() == m.index() - (m.textOffset ? 0 : 1)) {
      let O = p.parent.textBetween(p.parentOffset, m.parentOffset);
      if (n.someProp("handleTextInput", (z) => z(n, S, g, O)))
        return;
      E = n.state.tr.insertText(O, S, g);
    }
  }
  if (E || (E = n.state.tr.replace(S, g, a.doc.slice(h.start - a.from, h.endB - a.from))), a.sel) {
    let O = ko(n, E.doc, a.sel);
    O && !(he && We && n.composing && O.empty && (h.start != h.endB || n.input.lastAndroidDelete < Date.now() - 100) && (O.head == S || O.head == E.mapping.map(g) - 1) || pe && O.empty && O.head == S) && E.setSelection(O);
  }
  x && E.ensureMarks(x), n.dispatch(E.scrollIntoView());
}
function ko(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : us(n, e.resolve(t.anchor), e.resolve(t.head));
}
function hf(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, s = r, o, l, a;
  for (let u = 0; u < r.length; u++)
    i = r[u].removeFromSet(i);
  for (let u = 0; u < t.length; u++)
    s = t[u].removeFromSet(s);
  if (i.length == 1 && s.length == 0)
    l = i[0], o = "add", a = (u) => u.mark(l.addToSet(u.marks));
  else if (i.length == 0 && s.length == 1)
    l = s[0], o = "remove", a = (u) => u.mark(l.removeFromSet(u.marks));
  else
    return null;
  let c = [];
  for (let u = 0; u < e.childCount; u++)
    c.push(a(e.child(u)));
  if (k.from(c).eq(n))
    return { mark: l, type: o };
}
function pf(n, e, t, r, i) {
  if (!r.parent.isTextblock || // The content must have shrunk
  t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
  hi(r, !0, !1) < i.pos)
    return !1;
  let s = n.resolve(e);
  if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
    return !1;
  let o = n.resolve(hi(s, !0, !0));
  return !o.parent.isTextblock || o.pos > t || hi(o, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function hi(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let s = n.node(r).maybeChild(n.indexAfter(r));
    for (; s && !s.isLeaf; )
      s = s.firstChild, i++;
  }
  return i;
}
function mf(n, e, t, r, i) {
  let s = n.findDiffStart(e, t);
  if (s == null)
    return null;
  let { a: o, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    r -= o + a - s;
  }
  if (o < s && n.size < e.size) {
    let a = r <= s && r >= o ? s - r : 0;
    s -= a, l = s + (l - o), o = s;
  } else if (l < s) {
    let a = r <= s && r >= l ? s - r : 0;
    s -= a, o = s + (o - l), l = s;
  }
  return { start: s, endA: o, endB: l };
}
class gf {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Bd(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Mo), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Co(this), xo(this), this.nodeViews = So(this), this.docView = ro(this.state.doc, wo(this), fi(this), this.dom, this), this.domObserver = new lf(this, (r, i, s, o) => ff(this, r, i, s, o)), this.domObserver.start(), Vd(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && $i(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Mo), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    let r = this.state, i = !1, s = !1;
    e.storedMarks && this.composing && (ca(this), s = !0), this.state = e;
    let o = r.plugins != e.plugins || this._props.plugins != t.plugins;
    if (o || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let f = So(this);
      vf(f, this.nodeViews) && (this.nodeViews = f, i = !0);
    }
    (o || t.handleDOMEvents != this._props.handleDOMEvents) && $i(this), this.editable = Co(this), xo(this);
    let l = fi(this), a = wo(this), c = r.plugins != e.plugins && !r.doc.eq(e.doc) ? "reset" : e.scrollToSelection > r.scrollToSelection ? "to selection" : "preserve", u = i || !this.docView.matchesNode(e.doc, a, l);
    (u || !e.selection.eq(r.selection)) && (s = !0);
    let d = c == "preserve" && s && this.dom.style.overflowAnchor == null && td(this);
    if (s) {
      this.domObserver.stop();
      let f = u && (pe || he) && !this.composing && !r.selection.empty && !e.selection.empty && yf(r.selection, e.selection);
      if (u) {
        let h = he ? this.trackWrites = this.domSelectionRange().focusNode : null;
        (i || !this.docView.update(e.doc, a, l, this)) && (this.docView.updateOuterDeco([]), this.docView.destroy(), this.docView = ro(e.doc, a, l, this.dom, this)), h && !this.trackWrites && (f = !0);
      }
      f || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Od(this)) ? it(this, f) : (Gl(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(r), c == "reset" ? this.dom.scrollTop = 0 : c == "to selection" ? this.scrollToSelection() : d && nd(d);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (t) => t(this)))
      if (this.state.selection instanceof A) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && Xs(this, t.getBoundingClientRect(), e);
      } else
        Xs(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let s = this.state.plugins;
    if (s)
      for (let o = 0; o < s.length; o++) {
        let l = s[o].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (pe) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && rd(this.dom), it(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return ad(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return $l(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return hd(this, t || this.state, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (zd(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], fi(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null);
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return Fd(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    return ae && this.root.nodeType === 11 && Gu(this.dom.ownerDocument) == this.dom ? cf(this) : this.domSelection();
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function wo(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), e.translate = "no", n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" && (e.class += " " + t[r]), r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), [Ee.node(0, n.state.doc.content.size, e)];
}
function xo(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: Ee.widget(n.state.selection.head, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Co(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function yf(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function So(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function vf(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function Mo(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var bt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Ar = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Oo = typeof navigator < "u" && /Chrome\/(\d+)/.exec(navigator.userAgent), bf = typeof navigator < "u" && /Mac/.test(navigator.platform), kf = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), wf = bf || Oo && +Oo[1] < 57;
for (var Q = 0; Q < 10; Q++)
  bt[48 + Q] = bt[96 + Q] = String(Q);
for (var Q = 1; Q <= 24; Q++)
  bt[Q + 111] = "F" + Q;
for (var Q = 65; Q <= 90; Q++)
  bt[Q] = String.fromCharCode(Q + 32), Ar[Q] = String.fromCharCode(Q);
for (var pi in bt)
  Ar.hasOwnProperty(pi) || (Ar[pi] = bt[pi]);
function xf(n) {
  var e = wf && (n.ctrlKey || n.altKey || n.metaKey) || kf && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Ar : bt)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const Cf = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function Sf(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      Cf ? o = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), o && (t = "Meta-" + t), s && (t = "Shift-" + t), t;
}
function Mf(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[Sf(t)] = n[t];
  return e;
}
function mi(n, e, t) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t !== !1 && e.shiftKey && (n = "Shift-" + n), n;
}
function Of(n) {
  return new ve({ props: { handleKeyDown: pa(n) } });
}
function pa(n) {
  let e = Mf(n);
  return function(t, r) {
    let i = xf(r), s = i.length == 1 && i != " ", o, l = e[mi(i, r, !s)];
    if (l && l(t.state, t.dispatch, t))
      return !0;
    if (s && (r.shiftKey || r.altKey || r.metaKey || i.charCodeAt(0) > 127) && (o = bt[r.keyCode]) && o != i) {
      let a = e[mi(o, r, !0)];
      if (a && a(t.state, t.dispatch, t))
        return !0;
    } else if (s && r.shiftKey) {
      let a = e[mi(i, r, !0)];
      if (a && a(t.state, t.dispatch, t))
        return !0;
    }
    return !1;
  };
}
const Tf = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function Ef(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Af = (n, e, t) => {
  let r = Ef(n, t);
  if (!r)
    return !1;
  let i = ma(r);
  if (!i) {
    let o = r.blockRange(), l = o && kn(o);
    return l == null ? !1 : (e && e(n.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (!s.type.spec.isolating && va(n, i, e))
    return !0;
  if (r.parent.content.size == 0 && (hn(s, "end") || A.isSelectable(s))) {
    let o = ss(n.doc, r.before(), r.after(), C.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(hn(s, "end") ? R.findFrom(l.doc.resolve(l.mapping.map(i.pos, -1)), -1) : A.create(l.doc, i.pos - s.nodeSize)), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
};
function hn(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const Nf = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    s = ma(r);
  }
  let o = s && s.nodeBefore;
  return !o || !A.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(A.create(n.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function ma(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Df(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Lf = (n, e, t) => {
  let r = Df(n, t);
  if (!r)
    return !1;
  let i = ga(r);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (va(n, i, e))
    return !0;
  if (r.parent.content.size == 0 && (hn(s, "start") || A.isSelectable(s))) {
    let o = ss(n.doc, r.before(), r.after(), C.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(hn(s, "start") ? R.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : A.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, If = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    s = ga(r);
  }
  let o = s && s.nodeAfter;
  return !o || !A.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(A.create(n.doc, s.pos)).scrollIntoView()), !0);
};
function ga(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const Rf = (n, e) => {
  let t = n.selection, r = t instanceof A, i;
  if (r) {
    if (t.node.isTextblock || !kt(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Br(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let s = n.tr.join(i);
    r && s.setSelection(A.create(s.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, Pf = (n, e) => {
  let t = n.selection, r;
  if (t instanceof A) {
    if (t.node.isTextblock || !kt(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = Br(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, Bf = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), s = i && kn(i);
  return s == null ? !1 : (e && e(n.tr.lift(i, s).scrollIntoView()), !0);
}, Vf = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function ya(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const zf = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), s = t.indexAfter(-1), o = ya(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(R.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, Hf = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof Re || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = ya(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(o, s.createAndFill());
    l.setSelection(L.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Ff = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before();
    if (sn(n.doc, s))
      return e && e(n.tr.split(s).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && kn(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, _f = (n, e) => {
  let { $from: t, to: r } = n.selection, i, s = t.sharedDepth(r);
  return s == 0 ? !1 : (i = t.before(s), e && e(n.tr.setSelection(A.create(n.doc, i))), !0);
};
function $f(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || kt(n.doc, e.pos)) ? !1 : (t && t(n.tr.clearIncompatible(e.pos, r.type, r.contentMatchAt(r.childCount)).join(e.pos).scrollIntoView()), !0);
}
function va(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s, o;
  if (r.type.spec.isolating || i.type.spec.isolating)
    return !1;
  if ($f(n, e, t))
    return !0;
  let l = e.parent.canReplace(e.index(), e.index() + 1);
  if (l && (s = (o = r.contentMatchAt(r.childCount)).findWrapping(i.type)) && o.matchType(s[0] || i.type).validEnd) {
    if (t) {
      let d = e.pos + i.nodeSize, f = k.empty;
      for (let m = s.length - 1; m >= 0; m--)
        f = k.from(s[m].create(null, f));
      f = k.from(r.copy(f));
      let h = n.tr.step(new Z(e.pos - 1, d, e.pos, d, new C(f, 1, 0), s.length, !0)), p = d + 2 * s.length;
      kt(h.doc, p) && h.join(p), t(h.scrollIntoView());
    }
    return !0;
  }
  let a = R.findFrom(e, 1), c = a && a.$from.blockRange(a.$to), u = c && kn(c);
  if (u != null && u >= e.depth)
    return t && t(n.tr.lift(c, u).scrollIntoView()), !0;
  if (l && hn(i, "start", !0) && hn(r, "end")) {
    let d = r, f = [];
    for (; f.push(d), !d.isTextblock; )
      d = d.lastChild;
    let h = i, p = 1;
    for (; !h.isTextblock; h = h.firstChild)
      p++;
    if (d.canReplace(d.childCount, d.childCount, h.content)) {
      if (t) {
        let m = k.empty;
        for (let v = f.length - 1; v >= 0; v--)
          m = k.from(f[v].copy(m));
        let y = n.tr.step(new Z(e.pos - f.length, e.pos + i.nodeSize, e.pos + p, e.pos + i.nodeSize - p, new C(m, f.length, 0), 0, !0));
        t(y.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function ba(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (t && t(e.tr.setSelection(L.create(e.doc, n < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const jf = ba(-1), Wf = ba(1);
function qf(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = o && is(o, n, e);
    return l ? (r && r(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function To(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let s = 0; s < t.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[s];
      t.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let u = t.doc.resolve(c), d = u.index();
            i = u.parent.canReplaceWith(d, d + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let s = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o];
        s.setBlockType(l, a, n, e);
      }
      r(s.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Kf(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = !1, a = o;
    if (!o)
      return !1;
    if (o.depth >= 2 && i.node(o.depth - 1).type.compatibleContent(n) && o.startIndex == 0) {
      if (i.index(o.depth - 1) == 0)
        return !1;
      let u = t.doc.resolve(o.start - 2);
      a = new xr(u, u, o.depth), o.endIndex < o.parent.childCount && (o = new xr(i, t.doc.resolve(s.end(o.depth)), o.depth)), l = !0;
    }
    let c = is(a, n, e, o);
    return c ? (r && r(Jf(t.tr, o, c, l, n).scrollIntoView()), !0) : !1;
  };
}
function Jf(n, e, t, r, i) {
  let s = k.empty;
  for (let u = t.length - 1; u >= 0; u--)
    s = k.from(t[u].type.create(t[u].attrs, s));
  n.step(new Z(e.start - (r ? 2 : 0), e.end, e.start, e.end, new C(s, 0, 0), t.length, !0));
  let o = 0;
  for (let u = 0; u < t.length; u++)
    t[u].type == i && (o = u + 1);
  let l = t.length - o, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, d = e.endIndex, f = !0; u < d; u++, f = !1)
    !f && sn(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return n;
}
function Uf(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == n);
    return s ? t ? r.node(s.depth - 1).type == n ? Zf(e, t, n, s) : Gf(e, t, s) : !0 : !1;
  };
}
function Zf(n, e, t, r) {
  let i = n.tr, s = r.end, o = r.$to.end(r.depth);
  s < o && (i.step(new Z(s - 1, o, s, o, new C(k.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new xr(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth));
  const l = kn(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.mapping.map(s, -1) - 1;
  return kt(i.doc, a) && i.join(a), e(i.scrollIntoView()), !0;
}
function Gf(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let h = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let s = r.doc.resolve(t.start), o = s.nodeAfter;
  if (r.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = s.node(-1), u = s.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? k.empty : k.from(i))))
    return !1;
  let d = s.pos, f = d + o.nodeSize;
  return r.step(new Z(d - (l ? 1 : 0), f + (a ? 1 : 0), d + 1, f - 1, new C((l ? k.empty : k.from(i.copy(k.empty))).append(a ? k.empty : k.from(i.copy(k.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function Yf(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, a = l.child(o - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, u = k.from(c ? n.create() : null), d = new C(k.from(n.create(null, k.from(l.type.create(null, u)))), c ? 3 : 1, 0), f = s.start, h = s.end;
      t(e.tr.step(new Z(f - (c ? 3 : 1), h, f, h, d, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function $r(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: s } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    filterTransaction: e.filterTransaction,
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, s = t.storedMarks, t;
    }
  };
}
class jr {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: s } = r, o = this.buildProps(s);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...u) => {
      const d = a(...u)(o);
      return !s.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(s), d;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = [], a = !!e, c = e || s.tr, u = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(c), l.every((f) => f === !0)), d = {
      ...Object.fromEntries(Object.entries(r).map(([f, h]) => [f, (...m) => {
        const y = this.buildProps(c, t), v = h(...m)(y);
        return l.push(v), d;
      }])),
      run: u
    };
    return d;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, s = e || r.tr, o = this.buildProps(s, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...u) => c(...u)({ ...o, dispatch: void 0 })])),
      chain: () => this.createChain(s, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = {
      tr: e,
      editor: i,
      view: o,
      state: $r({
        state: s,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, c]) => [a, (...u) => c(...u)(l)]));
      }
    };
    return l;
  }
}
class Xf {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function M(n, e, t) {
  return n.config[e] === void 0 && n.parent ? M(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? M(n.parent, e, t) : null
  }) : n.config[e];
}
function Wr(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function ka(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = Wr(n), i = [...t, ...r], s = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = M(o, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((u) => {
      u.types.forEach((d) => {
        Object.entries(u.attributes).forEach(([f, h]) => {
          e.push({
            type: d,
            name: f,
            attribute: {
              ...s,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = M(o, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([u, d]) => {
      const f = {
        ...s,
        ...d
      };
      typeof (f == null ? void 0 : f.default) == "function" && (f.default = f.default()), f != null && f.isRequired && (f == null ? void 0 : f.default) === void 0 && delete f.default, e.push({
        type: o.name,
        name: u,
        attribute: f
      });
    });
  }), e;
}
function G(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function q(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, s]) => {
      if (!r[i]) {
        r[i] = s;
        return;
      }
      if (i === "class") {
        const l = s ? s.split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter((u) => !a.includes(u));
        r[i] = [...a, ...c].join(" ");
      } else
        i === "style" ? r[i] = [r[i], s].join("; ") : r[i] = s;
    }), r;
  }, {});
}
function Wi(n, e) {
  return e.filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => q(t, r), {});
}
function wa(n) {
  return typeof n == "function";
}
function I(n, e = void 0, ...t) {
  return wa(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function Qf(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function eh(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function Eo(n, e) {
  return n.style ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((s, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : eh(t.getAttribute(o.name));
        return l == null ? s : {
          ...s,
          [o.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function Ao(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && Qf(t) ? !1 : t != null)
  );
}
function th(n, e) {
  var t;
  const r = ka(n), { nodeExtensions: i, markExtensions: s } = Wr(n), o = (t = i.find((c) => M(c, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(i.map((c) => {
    const u = r.filter((v) => v.type === c.name), d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((v, w) => {
      const S = M(w, "extendNodeSchema", d);
      return {
        ...v,
        ...S ? S(c) : {}
      };
    }, {}), h = Ao({
      ...f,
      content: I(M(c, "content", d)),
      marks: I(M(c, "marks", d)),
      group: I(M(c, "group", d)),
      inline: I(M(c, "inline", d)),
      atom: I(M(c, "atom", d)),
      selectable: I(M(c, "selectable", d)),
      draggable: I(M(c, "draggable", d)),
      code: I(M(c, "code", d)),
      defining: I(M(c, "defining", d)),
      isolating: I(M(c, "isolating", d)),
      attrs: Object.fromEntries(u.map((v) => {
        var w;
        return [v.name, { default: (w = v == null ? void 0 : v.attribute) === null || w === void 0 ? void 0 : w.default }];
      }))
    }), p = I(M(c, "parseHTML", d));
    p && (h.parseDOM = p.map((v) => Eo(v, u)));
    const m = M(c, "renderHTML", d);
    m && (h.toDOM = (v) => m({
      node: v,
      HTMLAttributes: Wi(v, u)
    }));
    const y = M(c, "renderText", d);
    return y && (h.toText = y), [c.name, h];
  })), a = Object.fromEntries(s.map((c) => {
    const u = r.filter((y) => y.type === c.name), d = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, f = n.reduce((y, v) => {
      const w = M(v, "extendMarkSchema", d);
      return {
        ...y,
        ...w ? w(c) : {}
      };
    }, {}), h = Ao({
      ...f,
      inclusive: I(M(c, "inclusive", d)),
      excludes: I(M(c, "excludes", d)),
      group: I(M(c, "group", d)),
      spanning: I(M(c, "spanning", d)),
      code: I(M(c, "code", d)),
      attrs: Object.fromEntries(u.map((y) => {
        var v;
        return [y.name, { default: (v = y == null ? void 0 : y.attribute) === null || v === void 0 ? void 0 : v.default }];
      }))
    }), p = I(M(c, "parseHTML", d));
    p && (h.parseDOM = p.map((y) => Eo(y, u)));
    const m = M(c, "renderHTML", d);
    return m && (h.toDOM = (y) => m({
      mark: y,
      HTMLAttributes: Wi(y, u)
    })), [c.name, h];
  }));
  return new hu({
    topNode: o,
    nodes: l,
    marks: a
  });
}
function gi(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function No(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
const nh = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, s, o, l) => {
    var a, c;
    const u = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: s,
      parent: o,
      index: l
    })) || i.textContent || "%leaf%";
    t += u.slice(0, Math.max(0, r - s));
  }), t;
};
function ys(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class qr {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const rh = (n, e) => {
  if (ys(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function yi(n) {
  var e;
  const { editor: t, from: r, to: i, text: s, rules: o, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let u = !1;
  const d = nh(c) + s;
  return o.forEach((f) => {
    if (u)
      return;
    const h = rh(d, f.find);
    if (!h)
      return;
    const p = a.state.tr, m = $r({
      state: a.state,
      transaction: p
    }), y = {
      from: r - (h[0].length - s.length),
      to: i
    }, { commands: v, chain: w, can: S } = new jr({
      editor: t,
      state: m
    });
    f.handler({
      state: m,
      range: y,
      match: h,
      commands: v,
      chain: w,
      can: S
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: r,
      to: i,
      text: s
    }), a.dispatch(p), u = !0);
  }), u;
}
function ih(n) {
  const { editor: e, rules: t } = n, r = new ve({
    state: {
      init() {
        return null;
      },
      apply(i, s) {
        const o = i.getMeta(r);
        return o || (i.selectionSet || i.docChanged ? null : s);
      }
    },
    props: {
      handleTextInput(i, s, o, l) {
        return yi({
          editor: e,
          from: s,
          to: o,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: s } = i.state.selection;
          s && yi({
            editor: e,
            from: s.pos,
            to: s.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, s) {
        if (s.key !== "Enter")
          return !1;
        const { $cursor: o } = i.state.selection;
        return o ? yi({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function sh(n) {
  return typeof n == "number";
}
class oh {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const lh = (n, e, t) => {
  if (ys(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const s = [i.text];
    return s.index = i.index, s.input = n, s.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), s.push(i.replaceWith)), s;
  }) : [];
};
function ah(n) {
  const { editor: e, state: t, from: r, to: i, rule: s, pasteEvent: o, dropEvent: l } = n, { commands: a, chain: c, can: u } = new jr({
    editor: e,
    state: t
  }), d = [];
  return t.doc.nodesBetween(r, i, (h, p) => {
    if (!h.isTextblock || h.type.spec.code)
      return;
    const m = Math.max(r, p), y = Math.min(i, p + h.content.size), v = h.textBetween(m - p, y - p, void 0, "￼");
    lh(v, s.find, o).forEach((S) => {
      if (S.index === void 0)
        return;
      const g = m + S.index + 1, E = g + S[0].length, x = {
        from: t.tr.mapping.map(g),
        to: t.tr.mapping.map(E)
      }, D = s.handler({
        state: t,
        range: x,
        match: S,
        commands: a,
        chain: c,
        can: u,
        pasteEvent: o,
        dropEvent: l
      });
      d.push(D);
    });
  }), d.every((h) => h !== null);
}
function ch(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, s = !1, o = new ClipboardEvent("paste"), l = new DragEvent("drop");
  return t.map((c) => new ve({
    // we register a global drag handler to track the current drag source element
    view(u) {
      const d = (f) => {
        var h;
        r = !((h = u.dom.parentElement) === null || h === void 0) && h.contains(f.target) ? u.dom.parentElement : null;
      };
      return window.addEventListener("dragstart", d), {
        destroy() {
          window.removeEventListener("dragstart", d);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (u, d) => (s = r === u.dom.parentElement, l = d, !1),
        paste: (u, d) => {
          var f;
          const h = (f = d.clipboardData) === null || f === void 0 ? void 0 : f.getData("text/html");
          return o = d, i = !!(h != null && h.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (u, d, f) => {
      const h = u[0], p = h.getMeta("uiEvent") === "paste" && !i, m = h.getMeta("uiEvent") === "drop" && !s;
      if (!p && !m)
        return;
      const y = d.doc.content.findDiffStart(f.doc.content), v = d.doc.content.findDiffEnd(f.doc.content);
      if (!sh(y) || !v || y === v.b)
        return;
      const w = f.tr, S = $r({
        state: f,
        transaction: w
      });
      if (!(!ah({
        editor: e,
        state: S,
        from: Math.max(y - 1, 0),
        to: v.b - 1,
        rule: c,
        pasteEvent: o,
        dropEvent: l
      }) || !w.steps.length))
        return l = new DragEvent("drop"), o = new ClipboardEvent("paste"), w;
    }
  }));
}
function uh(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return [...new Set(e)];
}
class nn {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = nn.resolve(e), this.schema = th(this.extensions, t), this.extensions.forEach((r) => {
      var i;
      this.editor.extensionStorage[r.name] = r.storage;
      const s = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: this.editor,
        type: gi(r.name, this.schema)
      };
      r.type === "mark" && (!((i = I(M(r, "keepOnSplit", s))) !== null && i !== void 0) || i) && this.splittableMarks.push(r.name);
      const o = M(r, "onBeforeCreate", s);
      o && this.editor.on("beforeCreate", o);
      const l = M(r, "onCreate", s);
      l && this.editor.on("create", l);
      const a = M(r, "onUpdate", s);
      a && this.editor.on("update", a);
      const c = M(r, "onSelectionUpdate", s);
      c && this.editor.on("selectionUpdate", c);
      const u = M(r, "onTransaction", s);
      u && this.editor.on("transaction", u);
      const d = M(r, "onFocus", s);
      d && this.editor.on("focus", d);
      const f = M(r, "onBlur", s);
      f && this.editor.on("blur", f);
      const h = M(r, "onDestroy", s);
      h && this.editor.on("destroy", h);
    });
  }
  static resolve(e) {
    const t = nn.sort(nn.flatten(e)), r = uh(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = M(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  static sort(e) {
    return e.sort((r, i) => {
      const s = M(r, "priority") || 100, o = M(i, "priority") || 100;
      return s > o ? -1 : s < o ? 1 : 0;
    });
  }
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: gi(t.name, this.schema)
      }, i = M(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  get plugins() {
    const { editor: e } = this, t = nn.sort([...this.extensions].reverse()), r = [], i = [], s = t.map((o) => {
      const l = {
        name: o.name,
        options: o.options,
        storage: o.storage,
        editor: e,
        type: gi(o.name, this.schema)
      }, a = [], c = M(o, "addKeyboardShortcuts", l);
      let u = {};
      if (o.type === "mark" && o.config.exitable && (u.ArrowRight = () => Ve.handleExit({ editor: e, mark: o })), c) {
        const m = Object.fromEntries(Object.entries(c()).map(([y, v]) => [y, () => v({ editor: e })]));
        u = { ...u, ...m };
      }
      const d = Of(u);
      a.push(d);
      const f = M(o, "addInputRules", l);
      No(o, e.options.enableInputRules) && f && r.push(...f());
      const h = M(o, "addPasteRules", l);
      No(o, e.options.enablePasteRules) && h && i.push(...h());
      const p = M(o, "addProseMirrorPlugins", l);
      if (p) {
        const m = p();
        a.push(...m);
      }
      return a;
    }).flat();
    return [
      ih({
        editor: e,
        rules: r
      }),
      ...ch({
        editor: e,
        rules: i
      }),
      ...s
    ];
  }
  get attributes() {
    return ka(this.extensions);
  }
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = Wr(this.extensions);
    return Object.fromEntries(t.filter((r) => !!M(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((a) => a.type === r.name), s = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: G(r.name, this.schema)
      }, o = M(r, "addNodeView", s);
      if (!o)
        return [];
      const l = (a, c, u, d) => {
        const f = Wi(a, i);
        return o()({
          editor: e,
          node: a,
          getPos: u,
          decorations: d,
          HTMLAttributes: f,
          extension: r
        });
      };
      return [r.name, l];
    }));
  }
}
function dh(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function vi(n) {
  return dh(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function Kr(n, e) {
  const t = { ...n };
  return vi(n) && vi(e) && Object.keys(e).forEach((r) => {
    vi(e[r]) ? r in n ? t[r] = Kr(n[r], e[r]) : Object.assign(t, { [r]: e[r] }) : Object.assign(t, { [r]: e[r] });
  }), t;
}
class de {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = I(M(this, "addOptions", {
      name: this.name
    }))), this.storage = I(M(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new de(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = Kr(this.options, e), t.storage = I(M(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new de(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = I(M(t, "addOptions", {
      name: t.name
    })), t.storage = I(M(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function xa(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: s = `

`, textSerializers: o = {} } = t || {};
  let l = "", a = !0;
  return n.nodesBetween(r, i, (c, u, d, f) => {
    var h;
    const p = o == null ? void 0 : o[c.type.name];
    p ? (c.isBlock && !a && (l += s, a = !0), d && (l += p({
      node: c,
      pos: u,
      parent: d,
      index: f,
      range: e
    }))) : c.isText ? (l += (h = c == null ? void 0 : c.text) === null || h === void 0 ? void 0 : h.slice(Math.max(r, u) - u, i - u), a = !1) : c.isBlock && !a && (l += s, a = !0);
  }), l;
}
function Ca(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const fh = de.create({
  name: "clipboardTextSerializer",
  addProseMirrorPlugins() {
    return [
      new ve({
        key: new Ge("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: s } = i, o = Math.min(...s.map((u) => u.$from.pos)), l = Math.max(...s.map((u) => u.$to.pos)), a = Ca(t);
            return xa(r, { from: o, to: l }, {
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), hh = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), ph = (n = !1) => ({ commands: e }) => e.setContent("", n), mh = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: s, $to: o }) => {
    n.doc.nodesBetween(s.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, d = c.resolve(u.map(a)), f = c.resolve(u.map(a + l.nodeSize)), h = d.blockRange(f);
      if (!h)
        return;
      const p = kn(h);
      if (l.type.isTextblock) {
        const { defaultType: m } = d.parent.contentMatchAt(d.index());
        e.setNodeMarkup(h.start, m);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, gh = (n) => (e) => n(e), yh = () => ({ state: n, dispatch: e }) => Hf(n, e), vh = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, s = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const o = r.mapping.map(e);
  return r.insert(o, s.content), r.setSelection(new L(r.doc.resolve(o - 1))), !0;
}, bh = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === r.type) {
      if (e) {
        const l = i.before(s), a = i.after(s);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, kh = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = G(n, t.schema), s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (r) {
        const a = s.before(o), c = s.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, wh = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, xh = () => ({ state: n, dispatch: e }) => Tf(n, e), Ch = () => ({ commands: n }) => n.keyboardShortcut("Enter"), Sh = () => ({ state: n, dispatch: e }) => zf(n, e);
function Nr(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : ys(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function qi(n, e, t = {}) {
  return n.find((r) => r.type === e && Nr(r.attrs, t));
}
function Mh(n, e, t = {}) {
  return !!qi(n, e, t);
}
function vs(n, e, t = {}) {
  if (!n || !e)
    return;
  let r = n.parent.childAfter(n.parentOffset);
  if (n.parentOffset === r.offset && r.offset !== 0 && (r = n.parent.childBefore(n.parentOffset)), !r.node)
    return;
  const i = qi([...r.node.marks], e, t);
  if (!i)
    return;
  let s = r.index, o = n.start() + r.offset, l = s + 1, a = o + r.node.nodeSize;
  for (qi([...r.node.marks], e, t); s > 0 && i.isInSet(n.parent.child(s - 1).marks); )
    s -= 1, o -= n.parent.child(s).nodeSize;
  for (; l < n.parent.childCount && Mh([...n.parent.child(l).marks], e, t); )
    a += n.parent.child(l).nodeSize, l += 1;
  return {
    from: o,
    to: a
  };
}
function xt(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const Oh = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const s = xt(n, r.schema), { doc: o, selection: l } = t, { $from: a, from: c, to: u } = l;
  if (i) {
    const d = vs(a, s, e);
    if (d && d.from <= c && d.to >= u) {
      const f = L.create(o, d.from, d.to);
      t.setSelection(f);
    }
  }
  return !0;
}, Th = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function bs(n) {
  return n instanceof L;
}
function rt(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function Sa(n, e = null) {
  if (!e)
    return null;
  const t = R.atStart(n), r = R.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, s = r.to;
  return e === "all" ? L.create(n, rt(0, i, s), rt(n.content.size, i, s)) : L.create(n, rt(e, i, s), rt(e, i, s));
}
function ks() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const Eh = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    ks() && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (s && n === null && !bs(t.state.selection))
    return o(), !0;
  const l = Sa(i.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, Ah = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), Nh = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), Ki = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && !/\S/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && Ki(r);
  }
  return n;
};
function Do(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return Ki(t), Ki(t);
}
function Dr(n, e, t) {
  if (t = {
    slice: !0,
    parseOptions: {},
    ...t
  }, typeof n == "object" && n !== null)
    try {
      return Array.isArray(n) && n.length > 0 ? k.fromArray(n.map((r) => e.nodeFromJSON(r))) : e.nodeFromJSON(n);
    } catch (r) {
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", r), Dr("", e, t);
    }
  if (typeof n == "string") {
    const r = an.fromSchema(e);
    return t.slice ? r.parseSlice(Do(n), t.parseOptions).content : r.parse(Do(n), t.parseOptions);
  }
  return Dr("", e, t);
}
function Dh(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof ie || i instanceof Z))
    return;
  const s = n.mapping.maps[r];
  let o = 0;
  s.forEach((l, a, c, u) => {
    o === 0 && (o = u);
  }), n.setSelection(R.near(n.doc.resolve(o), t));
}
const Lh = (n) => n.toString().startsWith("<"), Ih = (n, e, t) => ({ tr: r, dispatch: i, editor: s }) => {
  if (i) {
    t = {
      parseOptions: {},
      updateSelection: !0,
      ...t
    };
    const o = Dr(e, s.schema, {
      parseOptions: {
        preserveWhitespace: "full",
        ...t.parseOptions
      }
    });
    if (o.toString() === "<>")
      return !0;
    let { from: l, to: a } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, c = !0, u = !0;
    if ((Lh(o) ? o : [o]).forEach((f) => {
      f.check(), c = c ? f.isText && f.marks.length === 0 : !1, u = u ? f.isBlock : !1;
    }), l === a && u) {
      const { parent: f } = r.doc.resolve(l);
      f.isTextblock && !f.type.spec.code && !f.childCount && (l -= 1, a += 1);
    }
    c ? Array.isArray(e) ? r.insertText(e.map((f) => f.text || "").join(""), l, a) : typeof e == "object" && e && e.text ? r.insertText(e.text, l, a) : r.insertText(e, l, a) : r.replaceWith(l, a, o), t.updateSelection && Dh(r, r.steps.length - 1, -1);
  }
  return !0;
}, Rh = () => ({ state: n, dispatch: e }) => Rf(n, e), Ph = () => ({ state: n, dispatch: e }) => Pf(n, e), Bh = () => ({ state: n, dispatch: e }) => Af(n, e), Vh = () => ({ state: n, dispatch: e }) => Lf(n, e), zh = () => ({ tr: n, state: e, dispatch: t }) => {
  try {
    const r = Br(e.doc, e.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), t && t(n), !0);
  } catch {
    return !1;
  }
}, Hh = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Br(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
};
function ws() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Fh(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      ks() || ws() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
}
const _h = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const s = Fh(n).split(/-(?!$)/), o = s.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a == null || a.steps.forEach((c) => {
    const u = c.map(r.mapping);
    u && i && r.maybeStep(u);
  }), !0;
};
function $n(n, e, t = {}) {
  const { from: r, to: i, empty: s } = n.selection, o = e ? G(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (d, f) => {
    if (d.isText)
      return;
    const h = Math.max(r, f), p = Math.min(i, f + d.nodeSize);
    l.push({
      node: d,
      from: h,
      to: p
    });
  });
  const a = i - r, c = l.filter((d) => o ? o.name === d.node.type.name : !0).filter((d) => Nr(d.node.attrs, t, { strict: !1 }));
  return s ? !!c.length : c.reduce((d, f) => d + f.to - f.from, 0) >= a;
}
const $h = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = G(n, t.schema);
  return $n(t, i, e) ? Bf(t, r) : !1;
}, jh = () => ({ state: n, dispatch: e }) => Ff(n, e), Wh = (n) => ({ state: e, dispatch: t }) => {
  const r = G(n, e.schema);
  return Uf(r)(e, t);
}, qh = () => ({ state: n, dispatch: e }) => Vf(n, e);
function Jr(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Lo(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const Kh = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = Jr(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (s = G(n, r.schema)), l === "mark" && (o = xt(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, u) => {
      s && s === c.type && t.setNodeMarkup(u, void 0, Lo(c.attrs, e)), o && c.marks.length && c.marks.forEach((d) => {
        o === d.type && t.addMark(u, u + c.nodeSize, o.create(Lo(d.attrs, e)));
      });
    });
  }), !0) : !1;
}, Jh = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), Uh = () => ({ tr: n, commands: e }) => e.setTextSelection({
  from: 0,
  to: n.doc.content.size
}), Zh = () => ({ state: n, dispatch: e }) => Nf(n, e), Gh = () => ({ state: n, dispatch: e }) => If(n, e), Yh = () => ({ state: n, dispatch: e }) => _f(n, e), Xh = () => ({ state: n, dispatch: e }) => Wf(n, e), Qh = () => ({ state: n, dispatch: e }) => jf(n, e);
function Ma(n, e, t = {}) {
  return Dr(n, e, { slice: !1, parseOptions: t });
}
const ep = (n, e = !1, t = {}) => ({ tr: r, editor: i, dispatch: s }) => {
  const { doc: o } = r, l = Ma(n, i.schema, t);
  return s && r.replaceWith(0, o.content.size, l).setMeta("preventUpdate", !e), !0;
};
function Ur(n, e) {
  const t = xt(e, n.schema), { from: r, to: i, empty: s } = n.selection, o = [];
  s ? (n.storedMarks && o.push(...n.storedMarks), o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function tp(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function np(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function xs(n) {
  return (e) => np(e.$from, n);
}
function rp(n, e) {
  const t = qe.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
function ip(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return xa(n, t, e);
}
function sp(n, e) {
  const t = G(e, n.schema), { from: r, to: i } = n.selection, s = [];
  n.doc.nodesBetween(r, i, (l) => {
    s.push(l);
  });
  const o = s.reverse().find((l) => l.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function op(n, e) {
  const t = Jr(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? sp(n, e) : t === "mark" ? Ur(n, e) : {};
}
function Oa(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const s = t.resolve(n - 1), o = vs(s, i.type);
    o && r.push({
      mark: i,
      ...o
    });
  }) : t.nodesBetween(n, e, (i, s) => {
    !i || i.nodeSize === void 0 || r.push(...i.marks.map((o) => ({
      from: s,
      to: s + i.nodeSize,
      mark: o
    })));
  }), r;
}
function gr(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((s) => s.type === e && s.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function Ji(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, s = e ? xt(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((d) => s ? s.name === d.type.name : !0).find((d) => Nr(d.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: d, $to: f }) => {
    const h = d.pos, p = f.pos;
    n.doc.nodesBetween(h, p, (m, y) => {
      if (!m.isText && !m.marks.length)
        return;
      const v = Math.max(h, y), w = Math.min(p, y + m.nodeSize), S = w - v;
      o += S, l.push(...m.marks.map((g) => ({
        mark: g,
        from: v,
        to: w
      })));
    });
  }), o === 0)
    return !1;
  const a = l.filter((d) => s ? s.name === d.mark.type.name : !0).filter((d) => Nr(d.mark.attrs, t, { strict: !1 })).reduce((d, f) => d + f.to - f.from, 0), c = l.filter((d) => s ? d.mark.type !== s && d.mark.type.excludes(s) : !0).reduce((d, f) => d + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function lp(n, e, t = {}) {
  if (!e)
    return $n(n, null, t) || Ji(n, null, t);
  const r = Jr(e, n.schema);
  return r === "node" ? $n(n, e, t) : r === "mark" ? Ji(n, e, t) : !1;
}
function Io(n, e) {
  const { nodeExtensions: t } = Wr(e), r = t.find((o) => o.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, s = I(M(r, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function ap(n) {
  var e;
  const t = (e = n.type.createAndFill()) === null || e === void 0 ? void 0 : e.toJSON(), r = n.toJSON();
  return JSON.stringify(t) === JSON.stringify(r);
}
function cp(n) {
  return n instanceof A;
}
function Ta(n, e, t) {
  const i = n.state.doc.content.size, s = rt(e, 0, i), o = rt(t, 0, i), l = n.coordsAtPos(s), a = n.coordsAtPos(o, -1), c = Math.min(l.top, a.top), u = Math.max(l.bottom, a.bottom), d = Math.min(l.left, a.left), f = Math.max(l.right, a.right), h = f - d, p = u - c, v = {
    top: c,
    bottom: u,
    left: d,
    right: f,
    width: h,
    height: p,
    x: d,
    y: c
  };
  return {
    ...v,
    toJSON: () => v
  };
}
function up(n, e, t) {
  var r;
  const { selection: i } = e;
  let s = null;
  if (bs(i) && (s = i.$cursor), s) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : s.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (u, d, f) => {
      if (c)
        return !1;
      if (u.isInline) {
        const h = !f || f.type.allowsMarkType(t), p = !!t.isInSet(u.marks) || !u.marks.some((m) => m.type.excludes(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const dp = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: s } = t, { empty: o, ranges: l } = s, a = xt(n, r.schema);
  if (i)
    if (o) {
      const c = Ur(r, a);
      t.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const u = c.$from.pos, d = c.$to.pos;
        r.doc.nodesBetween(u, d, (f, h) => {
          const p = Math.max(h, u), m = Math.min(h + f.nodeSize, d);
          f.marks.find((v) => v.type === a) ? f.marks.forEach((v) => {
            a === v.type && t.addMark(p, m, a.create({
              ...v.attrs,
              ...e
            }));
          }) : t.addMark(p, m, a.create(e));
        });
      });
  return up(r, t, a);
}, fp = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), hp = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const s = G(n, t.schema);
  return s.isTextblock ? i().command(({ commands: o }) => To(s, e)(t) ? !0 : o.clearNodes()).command(({ state: o }) => To(s, e)(o, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, pp = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = rt(n, 0, r.content.size), s = A.create(r, i);
    e.setSelection(s);
  }
  return !0;
}, mp = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: s } = typeof n == "number" ? { from: n, to: n } : n, o = L.atStart(r).from, l = L.atEnd(r).to, a = rt(i, o, l), c = rt(s, o, l), u = L.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, gp = (n) => ({ state: e, dispatch: t }) => {
  const r = G(n, e.schema);
  return Yf(r)(e, t);
};
function Ro(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const yp = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: s, doc: o } = e, { $from: l, $to: a } = s, c = i.extensionManager.attributes, u = gr(c, l.node().type.name, l.node().attrs);
  if (s instanceof A && s.node.isBlock)
    return !l.parentOffset || !sn(o, l.pos) ? !1 : (r && (n && Ro(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  if (r) {
    const d = a.parentOffset === a.parent.content.size;
    s instanceof L && e.deleteSelection();
    const f = l.depth === 0 ? void 0 : tp(l.node(-1).contentMatchAt(l.indexAfter(-1)));
    let h = d && f ? [
      {
        type: f,
        attrs: u
      }
    ] : void 0, p = sn(e.doc, e.mapping.map(l.pos), 1, h);
    if (!h && !p && sn(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (p = !0, h = f ? [
      {
        type: f,
        attrs: u
      }
    ] : void 0), p && (e.split(e.mapping.map(l.pos), 1, h), f && !d && !l.parentOffset && l.parent.type !== f)) {
      const m = e.mapping.map(l.before()), y = e.doc.resolve(m);
      l.node(-1).canReplaceWith(y.index(), y.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    n && Ro(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return !0;
}, vp = (n) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  var s;
  const o = G(n, t.schema), { $from: l, $to: a } = t.selection, c = t.selection.node;
  if (c && c.isBlock || l.depth < 2 || !l.sameParent(a))
    return !1;
  const u = l.node(-1);
  if (u.type !== o)
    return !1;
  const d = i.extensionManager.attributes;
  if (l.parent.content.size === 0 && l.node(-1).childCount === l.indexAfter(-1)) {
    if (l.depth === 2 || l.node(-3).type !== o || l.index(-2) !== l.node(-2).childCount - 1)
      return !1;
    if (r) {
      let y = k.empty;
      const v = l.index(-1) ? 1 : l.index(-2) ? 2 : 3;
      for (let D = l.depth - v; D >= l.depth - 3; D -= 1)
        y = k.from(l.node(D).copy(y));
      const w = l.indexAfter(-1) < l.node(-2).childCount ? 1 : l.indexAfter(-2) < l.node(-3).childCount ? 2 : 3, S = gr(d, l.node().type.name, l.node().attrs), g = ((s = o.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(S)) || void 0;
      y = y.append(k.from(o.createAndFill(null, g) || void 0));
      const E = l.before(l.depth - (v - 1));
      e.replace(E, l.after(-w), new C(y, 4 - v, 0));
      let x = -1;
      e.doc.nodesBetween(E, e.doc.content.size, (D, O) => {
        if (x > -1)
          return !1;
        D.isTextblock && D.content.size === 0 && (x = O + 1);
      }), x > -1 && e.setSelection(L.near(e.doc.resolve(x))), e.scrollIntoView();
    }
    return !0;
  }
  const f = a.pos === l.end() ? u.contentMatchAt(0).defaultType : null, h = gr(d, u.type.name, u.attrs), p = gr(d, l.node().type.name, l.node().attrs);
  e.delete(l.pos, a.pos);
  const m = f ? [
    { type: o, attrs: h },
    { type: f, attrs: p }
  ] : [{ type: o, attrs: h }];
  if (!sn(e.doc, l.pos, 2))
    return !1;
  if (r) {
    const { selection: y, storedMarks: v } = t, { splittableMarks: w } = i.extensionManager, S = v || y.$to.parentOffset && y.$from.marks();
    if (e.split(l.pos, 2, m).scrollIntoView(), !S || !r)
      return !0;
    const g = S.filter((E) => w.includes(E.type.name));
    e.ensureMarks(g);
  }
  return !0;
}, bi = (n, e) => {
  const t = xs((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && kt(n.doc, t.pos) && n.join(t.pos), !0;
}, ki = (n, e) => {
  const t = xs((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && kt(n.doc, r) && n.join(r), !0;
}, bp = (n, e, t, r = {}) => ({ editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: d, splittableMarks: f } = i.extensionManager, h = G(n, o.schema), p = G(e, o.schema), { selection: m, storedMarks: y } = o, { $from: v, $to: w } = m, S = v.blockRange(w), g = y || m.$to.parentOffset && m.$from.marks();
  if (!S)
    return !1;
  const E = xs((x) => Io(x.type.name, d))(m);
  if (S.depth >= 1 && E && S.depth - E.depth <= 1) {
    if (E.node.type === h)
      return c.liftListItem(p);
    if (Io(E.node.type.name, d) && h.validContent(E.node.content) && l)
      return a().command(() => (s.setNodeMarkup(E.pos, h), !0)).command(() => bi(s, h)).command(() => ki(s, h)).run();
  }
  return !t || !g || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => bi(s, h)).command(() => ki(s, h)).run() : a().command(() => {
    const x = u().wrapInList(h, r), D = g.filter((O) => f.includes(O.type.name));
    return s.ensureMarks(D), x ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => bi(s, h)).command(() => ki(s, h)).run();
}, kp = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = t, o = xt(n, r.schema);
  return Ji(r, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e);
}, wp = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const s = G(n, r.schema), o = G(e, r.schema);
  return $n(r, s, t) ? i.setNode(o) : i.setNode(s, t);
}, xp = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = G(n, t.schema);
  return $n(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, Cp = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let s;
    if (i.spec.isInputRules && (s = i.getState(n))) {
      if (e) {
        const o = n.tr, l = s.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (s.text) {
          const a = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, n.schema.text(s.text, a));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, Sp = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((s) => {
    n.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, Mp = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, a = xt(n, r.schema), { $from: c, empty: u, ranges: d } = l;
  if (!i)
    return !0;
  if (u && o) {
    let { from: f, to: h } = l;
    const p = (s = c.marks().find((y) => y.type === a)) === null || s === void 0 ? void 0 : s.attrs, m = vs(c, a, p);
    m && (f = m.from, h = m.to), t.removeMark(f, h, a);
  } else
    d.forEach((f) => {
      t.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, Op = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = Jr(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (s = G(n, r.schema)), l === "mark" && (o = xt(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, u = a.$to.pos;
    r.doc.nodesBetween(c, u, (d, f) => {
      s && s === d.type && t.setNodeMarkup(f, void 0, {
        ...d.attrs,
        ...e
      }), o && d.marks.length && d.marks.forEach((h) => {
        if (o === h.type) {
          const p = Math.max(f, c), m = Math.min(f + d.nodeSize, u);
          t.addMark(p, m, o.create({
            ...h.attrs,
            ...e
          }));
        }
      });
    });
  }), !0) : !1;
}, Tp = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = G(n, t.schema);
  return qf(i, e)(t, r);
}, Ep = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = G(n, t.schema);
  return Kf(i, e)(t, r);
};
var Ap = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: hh,
  clearContent: ph,
  clearNodes: mh,
  command: gh,
  createParagraphNear: yh,
  cut: vh,
  deleteCurrentNode: bh,
  deleteNode: kh,
  deleteRange: wh,
  deleteSelection: xh,
  enter: Ch,
  exitCode: Sh,
  extendMarkRange: Oh,
  first: Th,
  focus: Eh,
  forEach: Ah,
  insertContent: Nh,
  insertContentAt: Ih,
  joinUp: Rh,
  joinDown: Ph,
  joinBackward: Bh,
  joinForward: Vh,
  joinItemBackward: zh,
  joinItemForward: Hh,
  keyboardShortcut: _h,
  lift: $h,
  liftEmptyBlock: jh,
  liftListItem: Wh,
  newlineInCode: qh,
  resetAttributes: Kh,
  scrollIntoView: Jh,
  selectAll: Uh,
  selectNodeBackward: Zh,
  selectNodeForward: Gh,
  selectParentNode: Yh,
  selectTextblockEnd: Xh,
  selectTextblockStart: Qh,
  setContent: ep,
  setMark: dp,
  setMeta: fp,
  setNode: hp,
  setNodeSelection: pp,
  setTextSelection: mp,
  sinkListItem: gp,
  splitBlock: yp,
  splitListItem: vp,
  toggleList: bp,
  toggleMark: kp,
  toggleNode: wp,
  toggleWrap: xp,
  undoInputRule: Cp,
  unsetAllMarks: Sp,
  unsetMark: Mp,
  updateAttributes: Op,
  wrapIn: Tp,
  wrapInList: Ep
});
const Np = de.create({
  name: "commands",
  addCommands() {
    return {
      ...Ap
    };
  }
}), Dp = de.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new ve({
        key: new Ge("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Lp = de.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new ve({
        key: new Ge("focusEvents"),
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Ip = de.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: d } = a, { pos: f, parent: h } = d, p = d.parent.isTextblock ? l.doc.resolve(f - 1) : d, m = p.parent.type.spec.isolating, y = d.pos - d.parentOffset, v = m && p.parent.childCount === 1 ? y === d.pos : R.atStart(c).from === f;
        return !u || !v || !h.type.isTextblock || h.textContent.length ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, s = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return ks() || ws() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new ve({
        key: new Ge("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (!(n.some((p) => p.docChanged) && !e.doc.eq(t.doc)))
            return;
          const { empty: i, from: s, to: o } = e.selection, l = R.atStart(e.doc).from, a = R.atEnd(e.doc).to;
          if (i || !(s === l && o === a) || !(t.doc.textBetween(0, t.doc.content.size, " ", " ").length === 0))
            return;
          const d = t.tr, f = $r({
            state: t,
            transaction: d
          }), { commands: h } = new jr({
            editor: this.editor,
            state: f
          });
          if (h.clearNodes(), !!d.steps.length)
            return d;
        }
      })
    ];
  }
}), Rp = de.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new ve({
        key: new Ge("tabindex"),
        props: {
          attributes: this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
var Pp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ClipboardTextSerializer: fh,
  Commands: Np,
  Editable: Dp,
  FocusEvents: Lp,
  Keymap: Ip,
  Tabindex: Rp
});
const Bp = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 1px !important;
  height: 1px !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function Vp(n, e, t) {
  const r = document.querySelector(`style[data-tiptap-style${t ? `-${t}` : ""}]`);
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute(`data-tiptap-style${t ? `-${t}` : ""}`, ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
let zp = class extends Xf {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }));
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = Vp(Bp, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   */
  registerPlugin(e, t) {
    const r = wa(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    this.view.updateState(i);
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKey The plugins name
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = typeof e == "string" ? `${e}$` : e.key, r = this.state.reconfigure({
      // @ts-ignore
      plugins: this.state.plugins.filter((i) => !i.key.startsWith(t))
    });
    this.view.updateState(r);
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    const t = [...this.options.enableCoreExtensions ? Object.values(Pp) : [], ...this.options.extensions].filter((r) => ["extension", "node", "mark"].includes(r == null ? void 0 : r.type));
    this.extensionManager = new nn(t, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new jr({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    const e = Ma(this.options.content, this.schema, this.options.parseOptions), t = Sa(e, this.options.autofocus);
    this.view = new gf(this.options.element, {
      ...this.options.editorProps,
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: Qt.create({
        doc: e,
        selection: t || void 0
      })
    });
    const r = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(r), this.createNodeViews(), this.prependClass();
    const i = this.view.dom;
    i.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((o) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(o);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), s = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), s && this.emit("blur", {
      editor: this,
      event: s.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return op(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return lp(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return rp(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return ip(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...Ca(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return ap(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.view && this.view.destroy(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
};
function pn(n) {
  return new qr({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = I(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = r[r.length - 1], l = r[0];
      if (o) {
        const a = l.search(/\S/), c = t.from + l.indexOf(o), u = c + o.length;
        if (Oa(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((m) => m === n.type && m !== h.mark.type)).filter((h) => h.to > c).length)
          return null;
        u < t.to && s.delete(u, t.to), c > t.from && s.delete(t.from + a, c);
        const f = t.from + a + o.length;
        s.addMark(t.from + a, f, n.type.create(i || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
function Hp(n) {
  return new qr({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = I(n.getAttributes, void 0, r) || {}, { tr: s } = e, o = t.from;
      let l = t.to;
      const a = n.type.create(i);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let u = o + c;
        u > l ? u = l : l = u + r[1].length;
        const d = r[0][r[0].length - 1];
        s.insertText(d, o + r[0].length - 1), s.replaceWith(u, l, a);
      } else
        r[0] && s.insert(o - 1, n.type.create(i)).delete(s.mapping.map(o), s.mapping.map(l));
      s.scrollIntoView();
    }
  });
}
function Ui(n) {
  return new qr({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), s = I(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, s);
    }
  });
}
function jn(n) {
  return new qr({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const s = I(n.getAttributes, void 0, r) || {}, o = e.tr.delete(t.from, t.to), a = o.doc.resolve(t.from).blockRange(), c = a && is(a, n.type, s);
      if (!c)
        return null;
      if (o.wrap(a, c), n.keepMarks && n.editor) {
        const { selection: d, storedMarks: f } = e, { splittableMarks: h } = n.editor.extensionManager, p = f || d.$to.parentOffset && d.$from.marks();
        if (p) {
          const m = p.filter((y) => h.includes(y.type.name));
          o.ensureMarks(m);
        }
      }
      if (n.keepAttributes) {
        const d = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(d, s).run();
      }
      const u = o.doc.resolve(t.from - 1).nodeBefore;
      u && u.type === n.type && kt(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, u)) && o.join(t.from - 1);
    }
  });
}
class Ve {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = I(M(this, "addOptions", {
      name: this.name
    }))), this.storage = I(M(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Ve(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = Kr(this.options, e), t.storage = I(M(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new Ve(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = I(M(t, "addOptions", {
      name: t.name
    })), t.storage = I(M(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const o = i.marks();
      if (!!!o.find((c) => (c == null ? void 0 : c.type.name) === t.name))
        return !1;
      const a = o.find((c) => (c == null ? void 0 : c.type.name) === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
class se {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = I(M(this, "addOptions", {
      name: this.name
    }))), this.storage = I(M(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new se(e);
  }
  configure(e = {}) {
    const t = this.extend();
    return t.options = Kr(this.options, e), t.storage = I(M(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  extend(e = {}) {
    const t = new se(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = I(M(t, "addOptions", {
      name: t.name
    })), t.storage = I(M(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function mn(n) {
  return new oh({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const s = I(n.getAttributes, void 0, r, i);
      if (s === !1 || s === null)
        return null;
      const { tr: o } = e, l = r[r.length - 1], a = r[0];
      let c = t.to;
      if (l) {
        const u = a.search(/\S/), d = t.from + a.indexOf(l), f = d + l.length;
        if (Oa(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((y) => y === n.type && y !== p.mark.type)).filter((p) => p.to > d).length)
          return null;
        f < t.to && o.delete(f, t.to), d > t.from && o.delete(t.from + u, d), c = t.from + u + l.length, o.addMark(t.from + u, c, n.type.create(s || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
var me = "top", Ne = "bottom", De = "right", ge = "left", Cs = "auto", Gn = [me, Ne, De, ge], gn = "start", Wn = "end", Fp = "clippingParents", Ea = "viewport", En = "popper", _p = "reference", Po = /* @__PURE__ */ Gn.reduce(function(n, e) {
  return n.concat([e + "-" + gn, e + "-" + Wn]);
}, []), Aa = /* @__PURE__ */ [].concat(Gn, [Cs]).reduce(function(n, e) {
  return n.concat([e, e + "-" + gn, e + "-" + Wn]);
}, []), $p = "beforeRead", jp = "read", Wp = "afterRead", qp = "beforeMain", Kp = "main", Jp = "afterMain", Up = "beforeWrite", Zp = "write", Gp = "afterWrite", Yp = [$p, jp, Wp, qp, Kp, Jp, Up, Zp, Gp];
function Ze(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function Se(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function $t(n) {
  var e = Se(n).Element;
  return n instanceof e || n instanceof Element;
}
function Ae(n) {
  var e = Se(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function Ss(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = Se(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
function Xp(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var r = e.styles[t] || {}, i = e.attributes[t] || {}, s = e.elements[t];
    !Ae(s) || !Ze(s) || (Object.assign(s.style, r), Object.keys(i).forEach(function(o) {
      var l = i[o];
      l === !1 ? s.removeAttribute(o) : s.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function Qp(n) {
  var e = n.state, t = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], s = e.attributes[r] || {}, o = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : t[r]), l = o.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !Ae(i) || !Ze(i) || (Object.assign(i.style, l), Object.keys(s).forEach(function(a) {
        i.removeAttribute(a);
      }));
    });
  };
}
const Na = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Xp,
  effect: Qp,
  requires: ["computeStyles"]
};
function Je(n) {
  return n.split("-")[0];
}
var Vt = Math.max, Lr = Math.min, yn = Math.round;
function Zi() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Da() {
  return !/^((?!chrome|android).)*safari/i.test(Zi());
}
function vn(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var r = n.getBoundingClientRect(), i = 1, s = 1;
  e && Ae(n) && (i = n.offsetWidth > 0 && yn(r.width) / n.offsetWidth || 1, s = n.offsetHeight > 0 && yn(r.height) / n.offsetHeight || 1);
  var o = $t(n) ? Se(n) : window, l = o.visualViewport, a = !Da() && t, c = (r.left + (a && l ? l.offsetLeft : 0)) / i, u = (r.top + (a && l ? l.offsetTop : 0)) / s, d = r.width / i, f = r.height / s;
  return {
    width: d,
    height: f,
    top: u,
    right: c + d,
    bottom: u + f,
    left: c,
    x: c,
    y: u
  };
}
function Ms(n) {
  var e = vn(n), t = n.offsetWidth, r = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: r
  };
}
function La(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && Ss(t)) {
    var r = e;
    do {
      if (r && n.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function st(n) {
  return Se(n).getComputedStyle(n);
}
function em(n) {
  return ["table", "td", "th"].indexOf(Ze(n)) >= 0;
}
function Ct(n) {
  return (($t(n) ? n.ownerDocument : (
    // $FlowFixMe[prop-missing]
    n.document
  )) || window.document).documentElement;
}
function Zr(n) {
  return Ze(n) === "html" ? n : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    n.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    n.parentNode || // DOM Element detected
    (Ss(n) ? n.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ct(n)
  );
}
function Bo(n) {
  return !Ae(n) || // https://github.com/popperjs/popper-core/issues/837
  st(n).position === "fixed" ? null : n.offsetParent;
}
function tm(n) {
  var e = /firefox/i.test(Zi()), t = /Trident/i.test(Zi());
  if (t && Ae(n)) {
    var r = st(n);
    if (r.position === "fixed")
      return null;
  }
  var i = Zr(n);
  for (Ss(i) && (i = i.host); Ae(i) && ["html", "body"].indexOf(Ze(i)) < 0; ) {
    var s = st(i);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || e && s.willChange === "filter" || e && s.filter && s.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Yn(n) {
  for (var e = Se(n), t = Bo(n); t && em(t) && st(t).position === "static"; )
    t = Bo(t);
  return t && (Ze(t) === "html" || Ze(t) === "body" && st(t).position === "static") ? e : t || tm(n) || e;
}
function Os(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Bn(n, e, t) {
  return Vt(n, Lr(e, t));
}
function nm(n, e, t) {
  var r = Bn(n, e, t);
  return r > t ? t : r;
}
function Ia() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ra(n) {
  return Object.assign({}, Ia(), n);
}
function Pa(n, e) {
  return e.reduce(function(t, r) {
    return t[r] = n, t;
  }, {});
}
var rm = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
    placement: t.placement
  })) : e, Ra(typeof e != "number" ? e : Pa(e, Gn));
};
function im(n) {
  var e, t = n.state, r = n.name, i = n.options, s = t.elements.arrow, o = t.modifiersData.popperOffsets, l = Je(t.placement), a = Os(l), c = [ge, De].indexOf(l) >= 0, u = c ? "height" : "width";
  if (!(!s || !o)) {
    var d = rm(i.padding, t), f = Ms(s), h = a === "y" ? me : ge, p = a === "y" ? Ne : De, m = t.rects.reference[u] + t.rects.reference[a] - o[a] - t.rects.popper[u], y = o[a] - t.rects.reference[a], v = Yn(s), w = v ? a === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, S = m / 2 - y / 2, g = d[h], E = w - f[u] - d[p], x = w / 2 - f[u] / 2 + S, D = Bn(g, x, E), O = a;
    t.modifiersData[r] = (e = {}, e[O] = D, e.centerOffset = D - x, e);
  }
}
function sm(n) {
  var e = n.state, t = n.options, r = t.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || La(e.elements.popper, i) && (e.elements.arrow = i));
}
const om = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: im,
  effect: sm,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function bn(n) {
  return n.split("-")[1];
}
var lm = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function am(n, e) {
  var t = n.x, r = n.y, i = e.devicePixelRatio || 1;
  return {
    x: yn(t * i) / i || 0,
    y: yn(r * i) / i || 0
  };
}
function Vo(n) {
  var e, t = n.popper, r = n.popperRect, i = n.placement, s = n.variation, o = n.offsets, l = n.position, a = n.gpuAcceleration, c = n.adaptive, u = n.roundOffsets, d = n.isFixed, f = o.x, h = f === void 0 ? 0 : f, p = o.y, m = p === void 0 ? 0 : p, y = typeof u == "function" ? u({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  h = y.x, m = y.y;
  var v = o.hasOwnProperty("x"), w = o.hasOwnProperty("y"), S = ge, g = me, E = window;
  if (c) {
    var x = Yn(t), D = "clientHeight", O = "clientWidth";
    if (x === Se(t) && (x = Ct(t), st(x).position !== "static" && l === "absolute" && (D = "scrollHeight", O = "scrollWidth")), x = x, i === me || (i === ge || i === De) && s === Wn) {
      g = Ne;
      var z = d && x === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        x[D]
      );
      m -= z - r.height, m *= a ? 1 : -1;
    }
    if (i === ge || (i === me || i === Ne) && s === Wn) {
      S = De;
      var H = d && x === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        x[O]
      );
      h -= H - r.width, h *= a ? 1 : -1;
    }
  }
  var K = Object.assign({
    position: l
  }, c && lm), _ = u === !0 ? am({
    x: h,
    y: m
  }, Se(t)) : {
    x: h,
    y: m
  };
  if (h = _.x, m = _.y, a) {
    var F;
    return Object.assign({}, K, (F = {}, F[g] = w ? "0" : "", F[S] = v ? "0" : "", F.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", F));
  }
  return Object.assign({}, K, (e = {}, e[g] = w ? m + "px" : "", e[S] = v ? h + "px" : "", e.transform = "", e));
}
function cm(n) {
  var e = n.state, t = n.options, r = t.gpuAcceleration, i = r === void 0 ? !0 : r, s = t.adaptive, o = s === void 0 ? !0 : s, l = t.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: Je(e.placement),
    variation: bn(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Vo(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: o,
    roundOffsets: a
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Vo(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const um = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: cm,
  data: {}
};
var fr = {
  passive: !0
};
function dm(n) {
  var e = n.state, t = n.instance, r = n.options, i = r.scroll, s = i === void 0 ? !0 : i, o = r.resize, l = o === void 0 ? !0 : o, a = Se(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return s && c.forEach(function(u) {
    u.addEventListener("scroll", t.update, fr);
  }), l && a.addEventListener("resize", t.update, fr), function() {
    s && c.forEach(function(u) {
      u.removeEventListener("scroll", t.update, fr);
    }), l && a.removeEventListener("resize", t.update, fr);
  };
}
const fm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: dm,
  data: {}
};
var hm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yr(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return hm[e];
  });
}
var pm = {
  start: "end",
  end: "start"
};
function zo(n) {
  return n.replace(/start|end/g, function(e) {
    return pm[e];
  });
}
function Ts(n) {
  var e = Se(n), t = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: r
  };
}
function Es(n) {
  return vn(Ct(n)).left + Ts(n).scrollLeft;
}
function mm(n, e) {
  var t = Se(n), r = Ct(n), i = t.visualViewport, s = r.clientWidth, o = r.clientHeight, l = 0, a = 0;
  if (i) {
    s = i.width, o = i.height;
    var c = Da();
    (c || !c && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: l + Es(n),
    y: a
  };
}
function gm(n) {
  var e, t = Ct(n), r = Ts(n), i = (e = n.ownerDocument) == null ? void 0 : e.body, s = Vt(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = Vt(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + Es(n), a = -r.scrollTop;
  return st(i || t).direction === "rtl" && (l += Vt(t.clientWidth, i ? i.clientWidth : 0) - s), {
    width: s,
    height: o,
    x: l,
    y: a
  };
}
function As(n) {
  var e = st(n), t = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + i + r);
}
function Ba(n) {
  return ["html", "body", "#document"].indexOf(Ze(n)) >= 0 ? n.ownerDocument.body : Ae(n) && As(n) ? n : Ba(Zr(n));
}
function Vn(n, e) {
  var t;
  e === void 0 && (e = []);
  var r = Ba(n), i = r === ((t = n.ownerDocument) == null ? void 0 : t.body), s = Se(r), o = i ? [s].concat(s.visualViewport || [], As(r) ? r : []) : r, l = e.concat(o);
  return i ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Vn(Zr(o)))
  );
}
function Gi(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function ym(n, e) {
  var t = vn(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Ho(n, e, t) {
  return e === Ea ? Gi(mm(n, t)) : $t(e) ? ym(e, t) : Gi(gm(Ct(n)));
}
function vm(n) {
  var e = Vn(Zr(n)), t = ["absolute", "fixed"].indexOf(st(n).position) >= 0, r = t && Ae(n) ? Yn(n) : n;
  return $t(r) ? e.filter(function(i) {
    return $t(i) && La(i, r) && Ze(i) !== "body";
  }) : [];
}
function bm(n, e, t, r) {
  var i = e === "clippingParents" ? vm(n) : [].concat(e), s = [].concat(i, [t]), o = s[0], l = s.reduce(function(a, c) {
    var u = Ho(n, c, r);
    return a.top = Vt(u.top, a.top), a.right = Lr(u.right, a.right), a.bottom = Lr(u.bottom, a.bottom), a.left = Vt(u.left, a.left), a;
  }, Ho(n, o, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Va(n) {
  var e = n.reference, t = n.element, r = n.placement, i = r ? Je(r) : null, s = r ? bn(r) : null, o = e.x + e.width / 2 - t.width / 2, l = e.y + e.height / 2 - t.height / 2, a;
  switch (i) {
    case me:
      a = {
        x: o,
        y: e.y - t.height
      };
      break;
    case Ne:
      a = {
        x: o,
        y: e.y + e.height
      };
      break;
    case De:
      a = {
        x: e.x + e.width,
        y: l
      };
      break;
    case ge:
      a = {
        x: e.x - t.width,
        y: l
      };
      break;
    default:
      a = {
        x: e.x,
        y: e.y
      };
  }
  var c = i ? Os(i) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (s) {
      case gn:
        a[c] = a[c] - (e[u] / 2 - t[u] / 2);
        break;
      case Wn:
        a[c] = a[c] + (e[u] / 2 - t[u] / 2);
        break;
    }
  }
  return a;
}
function qn(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = r === void 0 ? n.placement : r, s = t.strategy, o = s === void 0 ? n.strategy : s, l = t.boundary, a = l === void 0 ? Fp : l, c = t.rootBoundary, u = c === void 0 ? Ea : c, d = t.elementContext, f = d === void 0 ? En : d, h = t.altBoundary, p = h === void 0 ? !1 : h, m = t.padding, y = m === void 0 ? 0 : m, v = Ra(typeof y != "number" ? y : Pa(y, Gn)), w = f === En ? _p : En, S = n.rects.popper, g = n.elements[p ? w : f], E = bm($t(g) ? g : g.contextElement || Ct(n.elements.popper), a, u, o), x = vn(n.elements.reference), D = Va({
    reference: x,
    element: S,
    strategy: "absolute",
    placement: i
  }), O = Gi(Object.assign({}, S, D)), z = f === En ? O : x, H = {
    top: E.top - z.top + v.top,
    bottom: z.bottom - E.bottom + v.bottom,
    left: E.left - z.left + v.left,
    right: z.right - E.right + v.right
  }, K = n.modifiersData.offset;
  if (f === En && K) {
    var _ = K[i];
    Object.keys(H).forEach(function(F) {
      var be = [De, Ne].indexOf(F) >= 0 ? 1 : -1, ke = [me, Ne].indexOf(F) >= 0 ? "y" : "x";
      H[F] += _[ke] * be;
    });
  }
  return H;
}
function km(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = t.boundary, s = t.rootBoundary, o = t.padding, l = t.flipVariations, a = t.allowedAutoPlacements, c = a === void 0 ? Aa : a, u = bn(r), d = u ? l ? Po : Po.filter(function(p) {
    return bn(p) === u;
  }) : Gn, f = d.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  f.length === 0 && (f = d);
  var h = f.reduce(function(p, m) {
    return p[m] = qn(n, {
      placement: m,
      boundary: i,
      rootBoundary: s,
      padding: o
    })[Je(m)], p;
  }, {});
  return Object.keys(h).sort(function(p, m) {
    return h[p] - h[m];
  });
}
function wm(n) {
  if (Je(n) === Cs)
    return [];
  var e = yr(n);
  return [zo(n), e, zo(e)];
}
function xm(n) {
  var e = n.state, t = n.options, r = n.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = t.mainAxis, s = i === void 0 ? !0 : i, o = t.altAxis, l = o === void 0 ? !0 : o, a = t.fallbackPlacements, c = t.padding, u = t.boundary, d = t.rootBoundary, f = t.altBoundary, h = t.flipVariations, p = h === void 0 ? !0 : h, m = t.allowedAutoPlacements, y = e.options.placement, v = Je(y), w = v === y, S = a || (w || !p ? [yr(y)] : wm(y)), g = [y].concat(S).reduce(function(Ye, Le) {
      return Ye.concat(Je(Le) === Cs ? km(e, {
        placement: Le,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: p,
        allowedAutoPlacements: m
      }) : Le);
    }, []), E = e.rects.reference, x = e.rects.popper, D = /* @__PURE__ */ new Map(), O = !0, z = g[0], H = 0; H < g.length; H++) {
      var K = g[H], _ = Je(K), F = bn(K) === gn, be = [me, Ne].indexOf(_) >= 0, ke = be ? "width" : "height", te = qn(e, {
        placement: K,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), ne = be ? F ? De : ge : F ? Ne : me;
      E[ke] > x[ke] && (ne = yr(ne));
      var Y = yr(ne), ze = [];
      if (s && ze.push(te[_] <= 0), l && ze.push(te[ne] <= 0, te[Y] <= 0), ze.every(function(Ye) {
        return Ye;
      })) {
        z = K, O = !1;
        break;
      }
      D.set(K, ze);
    }
    if (O)
      for (var He = p ? 3 : 1, St = function(Le) {
        var Xe = g.find(function(jt) {
          var Qe = D.get(jt);
          if (Qe)
            return Qe.slice(0, Le).every(function(Wt) {
              return Wt;
            });
        });
        if (Xe)
          return z = Xe, "break";
      }, Fe = He; Fe > 0; Fe--) {
        var Mt = St(Fe);
        if (Mt === "break")
          break;
      }
    e.placement !== z && (e.modifiersData[r]._skip = !0, e.placement = z, e.reset = !0);
  }
}
const Cm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: xm,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Fo(n, e, t) {
  return t === void 0 && (t = {
    x: 0,
    y: 0
  }), {
    top: n.top - e.height - t.y,
    right: n.right - e.width + t.x,
    bottom: n.bottom - e.height + t.y,
    left: n.left - e.width - t.x
  };
}
function _o(n) {
  return [me, De, Ne, ge].some(function(e) {
    return n[e] >= 0;
  });
}
function Sm(n) {
  var e = n.state, t = n.name, r = e.rects.reference, i = e.rects.popper, s = e.modifiersData.preventOverflow, o = qn(e, {
    elementContext: "reference"
  }), l = qn(e, {
    altBoundary: !0
  }), a = Fo(o, r), c = Fo(l, i, s), u = _o(a), d = _o(c);
  e.modifiersData[t] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const Mm = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Sm
};
function Om(n, e, t) {
  var r = Je(n), i = [ge, me].indexOf(r) >= 0 ? -1 : 1, s = typeof t == "function" ? t(Object.assign({}, e, {
    placement: n
  })) : t, o = s[0], l = s[1];
  return o = o || 0, l = (l || 0) * i, [ge, De].indexOf(r) >= 0 ? {
    x: l,
    y: o
  } : {
    x: o,
    y: l
  };
}
function Tm(n) {
  var e = n.state, t = n.options, r = n.name, i = t.offset, s = i === void 0 ? [0, 0] : i, o = Aa.reduce(function(u, d) {
    return u[d] = Om(d, e.rects, s), u;
  }, {}), l = o[e.placement], a = l.x, c = l.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = o;
}
const Em = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Tm
};
function Am(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = Va({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const Nm = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Am,
  data: {}
};
function Dm(n) {
  return n === "x" ? "y" : "x";
}
function Lm(n) {
  var e = n.state, t = n.options, r = n.name, i = t.mainAxis, s = i === void 0 ? !0 : i, o = t.altAxis, l = o === void 0 ? !1 : o, a = t.boundary, c = t.rootBoundary, u = t.altBoundary, d = t.padding, f = t.tether, h = f === void 0 ? !0 : f, p = t.tetherOffset, m = p === void 0 ? 0 : p, y = qn(e, {
    boundary: a,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), v = Je(e.placement), w = bn(e.placement), S = !w, g = Os(v), E = Dm(g), x = e.modifiersData.popperOffsets, D = e.rects.reference, O = e.rects.popper, z = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, H = typeof z == "number" ? {
    mainAxis: z,
    altAxis: z
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, z), K = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, _ = {
    x: 0,
    y: 0
  };
  if (x) {
    if (s) {
      var F, be = g === "y" ? me : ge, ke = g === "y" ? Ne : De, te = g === "y" ? "height" : "width", ne = x[g], Y = ne + y[be], ze = ne - y[ke], He = h ? -O[te] / 2 : 0, St = w === gn ? D[te] : O[te], Fe = w === gn ? -O[te] : -D[te], Mt = e.elements.arrow, Ye = h && Mt ? Ms(Mt) : {
        width: 0,
        height: 0
      }, Le = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Ia(), Xe = Le[be], jt = Le[ke], Qe = Bn(0, D[te], Ye[te]), Wt = S ? D[te] / 2 - He - Qe - Xe - H.mainAxis : St - Qe - Xe - H.mainAxis, ot = S ? -D[te] / 2 + He + Qe + jt + H.mainAxis : Fe + Qe + jt + H.mainAxis, qt = e.elements.arrow && Yn(e.elements.arrow), Xn = qt ? g === "y" ? qt.clientTop || 0 : qt.clientLeft || 0 : 0, xn = (F = K == null ? void 0 : K[g]) != null ? F : 0, Qn = ne + Wt - xn - Xn, er = ne + ot - xn, Cn = Bn(h ? Lr(Y, Qn) : Y, ne, h ? Vt(ze, er) : ze);
      x[g] = Cn, _[g] = Cn - ne;
    }
    if (l) {
      var Sn, tr = g === "x" ? me : ge, nr = g === "x" ? Ne : De, et = x[E], lt = E === "y" ? "height" : "width", Mn = et + y[tr], Ot = et - y[nr], On = [me, ge].indexOf(v) !== -1, rr = (Sn = K == null ? void 0 : K[E]) != null ? Sn : 0, ir = On ? Mn : et - D[lt] - O[lt] - rr + H.altAxis, sr = On ? et + D[lt] + O[lt] - rr - H.altAxis : Ot, or = h && On ? nm(ir, et, sr) : Bn(h ? ir : Mn, et, h ? sr : Ot);
      x[E] = or, _[E] = or - et;
    }
    e.modifiersData[r] = _;
  }
}
const Im = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Lm,
  requiresIfExists: ["offset"]
};
function Rm(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function Pm(n) {
  return n === Se(n) || !Ae(n) ? Ts(n) : Rm(n);
}
function Bm(n) {
  var e = n.getBoundingClientRect(), t = yn(e.width) / n.offsetWidth || 1, r = yn(e.height) / n.offsetHeight || 1;
  return t !== 1 || r !== 1;
}
function Vm(n, e, t) {
  t === void 0 && (t = !1);
  var r = Ae(e), i = Ae(e) && Bm(e), s = Ct(e), o = vn(n, i, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !t) && ((Ze(e) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  As(s)) && (l = Pm(e)), Ae(e) ? (a = vn(e, !0), a.x += e.clientLeft, a.y += e.clientTop) : s && (a.x = Es(s))), {
    x: o.left + l.scrollLeft - a.x,
    y: o.top + l.scrollTop - a.y,
    width: o.width,
    height: o.height
  };
}
function zm(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), r = [];
  n.forEach(function(s) {
    e.set(s.name, s);
  });
  function i(s) {
    t.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function(l) {
      if (!t.has(l)) {
        var a = e.get(l);
        a && i(a);
      }
    }), r.push(s);
  }
  return n.forEach(function(s) {
    t.has(s.name) || i(s);
  }), r;
}
function Hm(n) {
  var e = zm(n);
  return Yp.reduce(function(t, r) {
    return t.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function Fm(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function _m(n) {
  var e = n.reduce(function(t, r) {
    var i = t[r.name];
    return t[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
var $o = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function jo() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function $m(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, r = t === void 0 ? [] : t, i = e.defaultOptions, s = i === void 0 ? $o : i;
  return function(l, a, c) {
    c === void 0 && (c = s);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $o, s),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, h = {
      state: u,
      setOptions: function(v) {
        var w = typeof v == "function" ? v(u.options) : v;
        m(), u.options = Object.assign({}, s, u.options, w), u.scrollParents = {
          reference: $t(l) ? Vn(l) : l.contextElement ? Vn(l.contextElement) : [],
          popper: Vn(a)
        };
        var S = Hm(_m([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = S.filter(function(g) {
          return g.enabled;
        }), p(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var v = u.elements, w = v.reference, S = v.popper;
          if (jo(w, S)) {
            u.rects = {
              reference: Vm(w, Yn(S), u.options.strategy === "fixed"),
              popper: Ms(S)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(H) {
              return u.modifiersData[H.name] = Object.assign({}, H.data);
            });
            for (var g = 0; g < u.orderedModifiers.length; g++) {
              if (u.reset === !0) {
                u.reset = !1, g = -1;
                continue;
              }
              var E = u.orderedModifiers[g], x = E.fn, D = E.options, O = D === void 0 ? {} : D, z = E.name;
              typeof x == "function" && (u = x({
                state: u,
                options: O,
                name: z,
                instance: h
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Fm(function() {
        return new Promise(function(y) {
          h.forceUpdate(), y(u);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!jo(l, a))
      return h;
    h.setOptions(c).then(function(y) {
      !f && c.onFirstUpdate && c.onFirstUpdate(y);
    });
    function p() {
      u.orderedModifiers.forEach(function(y) {
        var v = y.name, w = y.options, S = w === void 0 ? {} : w, g = y.effect;
        if (typeof g == "function") {
          var E = g({
            state: u,
            name: v,
            instance: h,
            options: S
          }), x = function() {
          };
          d.push(E || x);
        }
      });
    }
    function m() {
      d.forEach(function(y) {
        return y();
      }), d = [];
    }
    return h;
  };
}
var jm = [fm, Nm, um, Na, Em, Cm, Im, om, Mm], Wm = /* @__PURE__ */ $m({
  defaultModifiers: jm
}), qm = "tippy-box", za = "tippy-content", Km = "tippy-backdrop", Ha = "tippy-arrow", Fa = "tippy-svg-arrow", Et = {
  passive: !0,
  capture: !0
}, _a = function() {
  return document.body;
};
function Jm(n, e) {
  return {}.hasOwnProperty.call(n, e);
}
function wi(n, e, t) {
  if (Array.isArray(n)) {
    var r = n[e];
    return r ?? (Array.isArray(t) ? t[e] : t);
  }
  return n;
}
function Ns(n, e) {
  var t = {}.toString.call(n);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function $a(n, e) {
  return typeof n == "function" ? n.apply(void 0, e) : n;
}
function Wo(n, e) {
  if (e === 0)
    return n;
  var t;
  return function(r) {
    clearTimeout(t), t = setTimeout(function() {
      n(r);
    }, e);
  };
}
function Um(n, e) {
  var t = Object.assign({}, n);
  return e.forEach(function(r) {
    delete t[r];
  }), t;
}
function Zm(n) {
  return n.split(/\s+/).filter(Boolean);
}
function Xt(n) {
  return [].concat(n);
}
function qo(n, e) {
  n.indexOf(e) === -1 && n.push(e);
}
function Gm(n) {
  return n.filter(function(e, t) {
    return n.indexOf(e) === t;
  });
}
function Ym(n) {
  return n.split("-")[0];
}
function Ir(n) {
  return [].slice.call(n);
}
function Ko(n) {
  return Object.keys(n).reduce(function(e, t) {
    return n[t] !== void 0 && (e[t] = n[t]), e;
  }, {});
}
function zn() {
  return document.createElement("div");
}
function Kn(n) {
  return ["Element", "Fragment"].some(function(e) {
    return Ns(n, e);
  });
}
function Xm(n) {
  return Ns(n, "NodeList");
}
function Qm(n) {
  return Ns(n, "MouseEvent");
}
function e1(n) {
  return !!(n && n._tippy && n._tippy.reference === n);
}
function t1(n) {
  return Kn(n) ? [n] : Xm(n) ? Ir(n) : Array.isArray(n) ? n : Ir(document.querySelectorAll(n));
}
function xi(n, e) {
  n.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function Jo(n, e) {
  n.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
function n1(n) {
  var e, t = Xt(n), r = t[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function r1(n, e) {
  var t = e.clientX, r = e.clientY;
  return n.every(function(i) {
    var s = i.popperRect, o = i.popperState, l = i.props, a = l.interactiveBorder, c = Ym(o.placement), u = o.modifiersData.offset;
    if (!u)
      return !0;
    var d = c === "bottom" ? u.top.y : 0, f = c === "top" ? u.bottom.y : 0, h = c === "right" ? u.left.x : 0, p = c === "left" ? u.right.x : 0, m = s.top - r + d > a, y = r - s.bottom - f > a, v = s.left - t + h > a, w = t - s.right - p > a;
    return m || y || v || w;
  });
}
function Ci(n, e, t) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    n[r](i, t);
  });
}
function Uo(n, e) {
  for (var t = e; t; ) {
    var r;
    if (n.contains(t))
      return !0;
    t = t.getRootNode == null || (r = t.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var $e = {
  isTouch: !1
}, Zo = 0;
function i1() {
  $e.isTouch || ($e.isTouch = !0, window.performance && document.addEventListener("mousemove", ja));
}
function ja() {
  var n = performance.now();
  n - Zo < 20 && ($e.isTouch = !1, document.removeEventListener("mousemove", ja)), Zo = n;
}
function s1() {
  var n = document.activeElement;
  if (e1(n)) {
    var e = n._tippy;
    n.blur && !e.state.isVisible && n.blur();
  }
}
function o1() {
  document.addEventListener("touchstart", i1, Et), window.addEventListener("blur", s1);
}
var l1 = typeof window < "u" && typeof document < "u", a1 = l1 ? (
  // @ts-ignore
  !!window.msCrypto
) : !1;
function Zt(n) {
  var e = n === "destroy" ? "n already-" : " ";
  return [n + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function Go(n) {
  var e = /[ \t]{2,}/g, t = /^[ \t]*/gm;
  return n.replace(e, " ").replace(t, "").trim();
}
function c1(n) {
  return Go(`
  %ctippy.js

  %c` + Go(n) + `

  %c👷‍ This is a development-only message. It will be removed in production.
  `);
}
function Wa(n) {
  return [
    c1(n),
    // title
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    // message
    "line-height: 1.5",
    // footer
    "color: #a6a095;"
  ];
}
var Jn;
process.env.NODE_ENV !== "production" && u1();
function u1() {
  Jn = /* @__PURE__ */ new Set();
}
function nt(n, e) {
  if (n && !Jn.has(e)) {
    var t;
    Jn.add(e), (t = console).warn.apply(t, Wa(e));
  }
}
function Yi(n, e) {
  if (n && !Jn.has(e)) {
    var t;
    Jn.add(e), (t = console).error.apply(t, Wa(e));
  }
}
function d1(n) {
  var e = !n, t = Object.prototype.toString.call(n) === "[object Object]" && !n.addEventListener;
  Yi(e, ["tippy() was passed", "`" + String(n) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), Yi(t, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var qa = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, f1 = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, Ce = Object.assign({
  appendTo: _a,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, qa, f1), h1 = Object.keys(Ce), p1 = function(e) {
  process.env.NODE_ENV !== "production" && Ja(e, []);
  var t = Object.keys(e);
  t.forEach(function(r) {
    Ce[r] = e[r];
  });
};
function Ka(n) {
  var e = n.plugins || [], t = e.reduce(function(r, i) {
    var s = i.name, o = i.defaultValue;
    if (s) {
      var l;
      r[s] = n[s] !== void 0 ? n[s] : (l = Ce[s]) != null ? l : o;
    }
    return r;
  }, {});
  return Object.assign({}, n, t);
}
function m1(n, e) {
  var t = e ? Object.keys(Ka(Object.assign({}, Ce, {
    plugins: e
  }))) : h1, r = t.reduce(function(i, s) {
    var o = (n.getAttribute("data-tippy-" + s) || "").trim();
    if (!o)
      return i;
    if (s === "content")
      i[s] = o;
    else
      try {
        i[s] = JSON.parse(o);
      } catch {
        i[s] = o;
      }
    return i;
  }, {});
  return r;
}
function Yo(n, e) {
  var t = Object.assign({}, e, {
    content: $a(e.content, [n])
  }, e.ignoreAttributes ? {} : m1(n, e.plugins));
  return t.aria = Object.assign({}, Ce.aria, t.aria), t.aria = {
    expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
    content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content
  }, t;
}
function Ja(n, e) {
  n === void 0 && (n = {}), e === void 0 && (e = []);
  var t = Object.keys(n);
  t.forEach(function(r) {
    var i = Um(Ce, Object.keys(qa)), s = !Jm(i, r);
    s && (s = e.filter(function(o) {
      return o.name === r;
    }).length === 0), nt(s, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var g1 = function() {
  return "innerHTML";
};
function Xi(n, e) {
  n[g1()] = e;
}
function Xo(n) {
  var e = zn();
  return n === !0 ? e.className = Ha : (e.className = Fa, Kn(n) ? e.appendChild(n) : Xi(e, n)), e;
}
function Qo(n, e) {
  Kn(e.content) ? (Xi(n, ""), n.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? Xi(n, e.content) : n.textContent = e.content);
}
function Qi(n) {
  var e = n.firstElementChild, t = Ir(e.children);
  return {
    box: e,
    content: t.find(function(r) {
      return r.classList.contains(za);
    }),
    arrow: t.find(function(r) {
      return r.classList.contains(Ha) || r.classList.contains(Fa);
    }),
    backdrop: t.find(function(r) {
      return r.classList.contains(Km);
    })
  };
}
function Ua(n) {
  var e = zn(), t = zn();
  t.className = qm, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var r = zn();
  r.className = za, r.setAttribute("data-state", "hidden"), Qo(r, n.props), e.appendChild(t), t.appendChild(r), i(n.props, n.props);
  function i(s, o) {
    var l = Qi(e), a = l.box, c = l.content, u = l.arrow;
    o.theme ? a.setAttribute("data-theme", o.theme) : a.removeAttribute("data-theme"), typeof o.animation == "string" ? a.setAttribute("data-animation", o.animation) : a.removeAttribute("data-animation"), o.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"), a.style.maxWidth = typeof o.maxWidth == "number" ? o.maxWidth + "px" : o.maxWidth, o.role ? a.setAttribute("role", o.role) : a.removeAttribute("role"), (s.content !== o.content || s.allowHTML !== o.allowHTML) && Qo(c, n.props), o.arrow ? u ? s.arrow !== o.arrow && (a.removeChild(u), a.appendChild(Xo(o.arrow))) : a.appendChild(Xo(o.arrow)) : u && a.removeChild(u);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
Ua.$$tippy = !0;
var y1 = 1, hr = [], Si = [];
function v1(n, e) {
  var t = Yo(n, Object.assign({}, Ce, Ka(Ko(e)))), r, i, s, o = !1, l = !1, a = !1, c = !1, u, d, f, h = [], p = Wo(Qn, t.interactiveDebounce), m, y = y1++, v = null, w = Gm(t.plugins), S = {
    // Is the instance currently enabled?
    isEnabled: !0,
    // Is the tippy currently showing and not transitioning out?
    isVisible: !1,
    // Has the instance been destroyed?
    isDestroyed: !1,
    // Is the tippy currently mounted to the DOM?
    isMounted: !1,
    // Has the tippy finished transitioning in?
    isShown: !1
  }, g = {
    // properties
    id: y,
    reference: n,
    popper: zn(),
    popperInstance: v,
    props: t,
    state: S,
    plugins: w,
    // methods
    clearDelayTimeouts: ir,
    setProps: sr,
    setContent: or,
    show: nc,
    hide: rc,
    hideWithInteractivity: ic,
    enable: On,
    disable: rr,
    unmount: sc,
    destroy: oc
  };
  if (!t.render)
    return process.env.NODE_ENV !== "production" && Yi(!0, "render() function has not been supplied."), g;
  var E = t.render(g), x = E.popper, D = E.onUpdate;
  x.setAttribute("data-tippy-root", ""), x.id = "tippy-" + g.id, g.popper = x, n._tippy = g, x._tippy = g;
  var O = w.map(function(b) {
    return b.fn(g);
  }), z = n.hasAttribute("aria-expanded");
  return qt(), He(), ne(), Y("onCreate", [g]), t.showOnCreate && Mn(), x.addEventListener("mouseenter", function() {
    g.props.interactive && g.state.isVisible && g.clearDelayTimeouts();
  }), x.addEventListener("mouseleave", function() {
    g.props.interactive && g.props.trigger.indexOf("mouseenter") >= 0 && be().addEventListener("mousemove", p);
  }), g;
  function H() {
    var b = g.props.touch;
    return Array.isArray(b) ? b : [b, 0];
  }
  function K() {
    return H()[0] === "hold";
  }
  function _() {
    var b;
    return !!((b = g.props.render) != null && b.$$tippy);
  }
  function F() {
    return m || n;
  }
  function be() {
    var b = F().parentNode;
    return b ? n1(b) : document;
  }
  function ke() {
    return Qi(x);
  }
  function te(b) {
    return g.state.isMounted && !g.state.isVisible || $e.isTouch || u && u.type === "focus" ? 0 : wi(g.props.delay, b ? 0 : 1, Ce.delay);
  }
  function ne(b) {
    b === void 0 && (b = !1), x.style.pointerEvents = g.props.interactive && !b ? "" : "none", x.style.zIndex = "" + g.props.zIndex;
  }
  function Y(b, T, N) {
    if (N === void 0 && (N = !0), O.forEach(function(P) {
      P[b] && P[b].apply(P, T);
    }), N) {
      var B;
      (B = g.props)[b].apply(B, T);
    }
  }
  function ze() {
    var b = g.props.aria;
    if (b.content) {
      var T = "aria-" + b.content, N = x.id, B = Xt(g.props.triggerTarget || n);
      B.forEach(function(P) {
        var oe = P.getAttribute(T);
        if (g.state.isVisible)
          P.setAttribute(T, oe ? oe + " " + N : N);
        else {
          var Me = oe && oe.replace(N, "").trim();
          Me ? P.setAttribute(T, Me) : P.removeAttribute(T);
        }
      });
    }
  }
  function He() {
    if (!(z || !g.props.aria.expanded)) {
      var b = Xt(g.props.triggerTarget || n);
      b.forEach(function(T) {
        g.props.interactive ? T.setAttribute("aria-expanded", g.state.isVisible && T === F() ? "true" : "false") : T.removeAttribute("aria-expanded");
      });
    }
  }
  function St() {
    be().removeEventListener("mousemove", p), hr = hr.filter(function(b) {
      return b !== p;
    });
  }
  function Fe(b) {
    if (!($e.isTouch && (a || b.type === "mousedown"))) {
      var T = b.composedPath && b.composedPath()[0] || b.target;
      if (!(g.props.interactive && Uo(x, T))) {
        if (Xt(g.props.triggerTarget || n).some(function(N) {
          return Uo(N, T);
        })) {
          if ($e.isTouch || g.state.isVisible && g.props.trigger.indexOf("click") >= 0)
            return;
        } else
          Y("onClickOutside", [g, b]);
        g.props.hideOnClick === !0 && (g.clearDelayTimeouts(), g.hide(), l = !0, setTimeout(function() {
          l = !1;
        }), g.state.isMounted || Xe());
      }
    }
  }
  function Mt() {
    a = !0;
  }
  function Ye() {
    a = !1;
  }
  function Le() {
    var b = be();
    b.addEventListener("mousedown", Fe, !0), b.addEventListener("touchend", Fe, Et), b.addEventListener("touchstart", Ye, Et), b.addEventListener("touchmove", Mt, Et);
  }
  function Xe() {
    var b = be();
    b.removeEventListener("mousedown", Fe, !0), b.removeEventListener("touchend", Fe, Et), b.removeEventListener("touchstart", Ye, Et), b.removeEventListener("touchmove", Mt, Et);
  }
  function jt(b, T) {
    Wt(b, function() {
      !g.state.isVisible && x.parentNode && x.parentNode.contains(x) && T();
    });
  }
  function Qe(b, T) {
    Wt(b, T);
  }
  function Wt(b, T) {
    var N = ke().box;
    function B(P) {
      P.target === N && (Ci(N, "remove", B), T());
    }
    if (b === 0)
      return T();
    Ci(N, "remove", d), Ci(N, "add", B), d = B;
  }
  function ot(b, T, N) {
    N === void 0 && (N = !1);
    var B = Xt(g.props.triggerTarget || n);
    B.forEach(function(P) {
      P.addEventListener(b, T, N), h.push({
        node: P,
        eventType: b,
        handler: T,
        options: N
      });
    });
  }
  function qt() {
    K() && (ot("touchstart", xn, {
      passive: !0
    }), ot("touchend", er, {
      passive: !0
    })), Zm(g.props.trigger).forEach(function(b) {
      if (b !== "manual")
        switch (ot(b, xn), b) {
          case "mouseenter":
            ot("mouseleave", er);
            break;
          case "focus":
            ot(a1 ? "focusout" : "blur", Cn);
            break;
          case "focusin":
            ot("focusout", Cn);
            break;
        }
    });
  }
  function Xn() {
    h.forEach(function(b) {
      var T = b.node, N = b.eventType, B = b.handler, P = b.options;
      T.removeEventListener(N, B, P);
    }), h = [];
  }
  function xn(b) {
    var T, N = !1;
    if (!(!g.state.isEnabled || Sn(b) || l)) {
      var B = ((T = u) == null ? void 0 : T.type) === "focus";
      u = b, m = b.currentTarget, He(), !g.state.isVisible && Qm(b) && hr.forEach(function(P) {
        return P(b);
      }), b.type === "click" && (g.props.trigger.indexOf("mouseenter") < 0 || o) && g.props.hideOnClick !== !1 && g.state.isVisible ? N = !0 : Mn(b), b.type === "click" && (o = !N), N && !B && Ot(b);
    }
  }
  function Qn(b) {
    var T = b.target, N = F().contains(T) || x.contains(T);
    if (!(b.type === "mousemove" && N)) {
      var B = lt().concat(x).map(function(P) {
        var oe, Me = P._tippy, Kt = (oe = Me.popperInstance) == null ? void 0 : oe.state;
        return Kt ? {
          popperRect: P.getBoundingClientRect(),
          popperState: Kt,
          props: t
        } : null;
      }).filter(Boolean);
      r1(B, b) && (St(), Ot(b));
    }
  }
  function er(b) {
    var T = Sn(b) || g.props.trigger.indexOf("click") >= 0 && o;
    if (!T) {
      if (g.props.interactive) {
        g.hideWithInteractivity(b);
        return;
      }
      Ot(b);
    }
  }
  function Cn(b) {
    g.props.trigger.indexOf("focusin") < 0 && b.target !== F() || g.props.interactive && b.relatedTarget && x.contains(b.relatedTarget) || Ot(b);
  }
  function Sn(b) {
    return $e.isTouch ? K() !== b.type.indexOf("touch") >= 0 : !1;
  }
  function tr() {
    nr();
    var b = g.props, T = b.popperOptions, N = b.placement, B = b.offset, P = b.getReferenceClientRect, oe = b.moveTransition, Me = _() ? Qi(x).arrow : null, Kt = P ? {
      getBoundingClientRect: P,
      contextElement: P.contextElement || F()
    } : n, Ls = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(lr) {
        var Jt = lr.state;
        if (_()) {
          var lc = ke(), Yr = lc.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(ar) {
            ar === "placement" ? Yr.setAttribute("data-placement", Jt.placement) : Jt.attributes.popper["data-popper-" + ar] ? Yr.setAttribute("data-" + ar, "") : Yr.removeAttribute("data-" + ar);
          }), Jt.attributes.popper = {};
        }
      }
    }, Tt = [{
      name: "offset",
      options: {
        offset: B
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !oe
      }
    }, Ls];
    _() && Me && Tt.push({
      name: "arrow",
      options: {
        element: Me,
        padding: 3
      }
    }), Tt.push.apply(Tt, (T == null ? void 0 : T.modifiers) || []), g.popperInstance = Wm(Kt, x, Object.assign({}, T, {
      placement: N,
      onFirstUpdate: f,
      modifiers: Tt
    }));
  }
  function nr() {
    g.popperInstance && (g.popperInstance.destroy(), g.popperInstance = null);
  }
  function et() {
    var b = g.props.appendTo, T, N = F();
    g.props.interactive && b === _a || b === "parent" ? T = N.parentNode : T = $a(b, [N]), T.contains(x) || T.appendChild(x), g.state.isMounted = !0, tr(), process.env.NODE_ENV !== "production" && nt(g.props.interactive && b === Ce.appendTo && N.nextElementSibling !== x, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function lt() {
    return Ir(x.querySelectorAll("[data-tippy-root]"));
  }
  function Mn(b) {
    g.clearDelayTimeouts(), b && Y("onTrigger", [g, b]), Le();
    var T = te(!0), N = H(), B = N[0], P = N[1];
    $e.isTouch && B === "hold" && P && (T = P), T ? r = setTimeout(function() {
      g.show();
    }, T) : g.show();
  }
  function Ot(b) {
    if (g.clearDelayTimeouts(), Y("onUntrigger", [g, b]), !g.state.isVisible) {
      Xe();
      return;
    }
    if (!(g.props.trigger.indexOf("mouseenter") >= 0 && g.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(b.type) >= 0 && o)) {
      var T = te(!1);
      T ? i = setTimeout(function() {
        g.state.isVisible && g.hide();
      }, T) : s = requestAnimationFrame(function() {
        g.hide();
      });
    }
  }
  function On() {
    g.state.isEnabled = !0;
  }
  function rr() {
    g.hide(), g.state.isEnabled = !1;
  }
  function ir() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(s);
  }
  function sr(b) {
    if (process.env.NODE_ENV !== "production" && nt(g.state.isDestroyed, Zt("setProps")), !g.state.isDestroyed) {
      Y("onBeforeUpdate", [g, b]), Xn();
      var T = g.props, N = Yo(n, Object.assign({}, T, Ko(b), {
        ignoreAttributes: !0
      }));
      g.props = N, qt(), T.interactiveDebounce !== N.interactiveDebounce && (St(), p = Wo(Qn, N.interactiveDebounce)), T.triggerTarget && !N.triggerTarget ? Xt(T.triggerTarget).forEach(function(B) {
        B.removeAttribute("aria-expanded");
      }) : N.triggerTarget && n.removeAttribute("aria-expanded"), He(), ne(), D && D(T, N), g.popperInstance && (tr(), lt().forEach(function(B) {
        requestAnimationFrame(B._tippy.popperInstance.forceUpdate);
      })), Y("onAfterUpdate", [g, b]);
    }
  }
  function or(b) {
    g.setProps({
      content: b
    });
  }
  function nc() {
    process.env.NODE_ENV !== "production" && nt(g.state.isDestroyed, Zt("show"));
    var b = g.state.isVisible, T = g.state.isDestroyed, N = !g.state.isEnabled, B = $e.isTouch && !g.props.touch, P = wi(g.props.duration, 0, Ce.duration);
    if (!(b || T || N || B) && !F().hasAttribute("disabled") && (Y("onShow", [g], !1), g.props.onShow(g) !== !1)) {
      if (g.state.isVisible = !0, _() && (x.style.visibility = "visible"), ne(), Le(), g.state.isMounted || (x.style.transition = "none"), _()) {
        var oe = ke(), Me = oe.box, Kt = oe.content;
        xi([Me, Kt], 0);
      }
      f = function() {
        var Tt;
        if (!(!g.state.isVisible || c)) {
          if (c = !0, x.offsetHeight, x.style.transition = g.props.moveTransition, _() && g.props.animation) {
            var Gr = ke(), lr = Gr.box, Jt = Gr.content;
            xi([lr, Jt], P), Jo([lr, Jt], "visible");
          }
          ze(), He(), qo(Si, g), (Tt = g.popperInstance) == null || Tt.forceUpdate(), Y("onMount", [g]), g.props.animation && _() && Qe(P, function() {
            g.state.isShown = !0, Y("onShown", [g]);
          });
        }
      }, et();
    }
  }
  function rc() {
    process.env.NODE_ENV !== "production" && nt(g.state.isDestroyed, Zt("hide"));
    var b = !g.state.isVisible, T = g.state.isDestroyed, N = !g.state.isEnabled, B = wi(g.props.duration, 1, Ce.duration);
    if (!(b || T || N) && (Y("onHide", [g], !1), g.props.onHide(g) !== !1)) {
      if (g.state.isVisible = !1, g.state.isShown = !1, c = !1, o = !1, _() && (x.style.visibility = "hidden"), St(), Xe(), ne(!0), _()) {
        var P = ke(), oe = P.box, Me = P.content;
        g.props.animation && (xi([oe, Me], B), Jo([oe, Me], "hidden"));
      }
      ze(), He(), g.props.animation ? _() && jt(B, g.unmount) : g.unmount();
    }
  }
  function ic(b) {
    process.env.NODE_ENV !== "production" && nt(g.state.isDestroyed, Zt("hideWithInteractivity")), be().addEventListener("mousemove", p), qo(hr, p), p(b);
  }
  function sc() {
    process.env.NODE_ENV !== "production" && nt(g.state.isDestroyed, Zt("unmount")), g.state.isVisible && g.hide(), g.state.isMounted && (nr(), lt().forEach(function(b) {
      b._tippy.unmount();
    }), x.parentNode && x.parentNode.removeChild(x), Si = Si.filter(function(b) {
      return b !== g;
    }), g.state.isMounted = !1, Y("onHidden", [g]));
  }
  function oc() {
    process.env.NODE_ENV !== "production" && nt(g.state.isDestroyed, Zt("destroy")), !g.state.isDestroyed && (g.clearDelayTimeouts(), g.unmount(), Xn(), delete n._tippy, g.state.isDestroyed = !0, Y("onDestroy", [g]));
  }
}
function wn(n, e) {
  e === void 0 && (e = {});
  var t = Ce.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && (d1(n), Ja(e, t)), o1();
  var r = Object.assign({}, e, {
    plugins: t
  }), i = t1(n);
  if (process.env.NODE_ENV !== "production") {
    var s = Kn(r.content), o = i.length > 1;
    nt(s && o, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var l = i.reduce(function(a, c) {
    var u = c && v1(c, r);
    return u && a.push(u), a;
  }, []);
  return Kn(n) ? l[0] : l;
}
wn.defaultProps = Ce;
wn.setDefaultProps = p1;
wn.currentInput = $e;
Object.assign({}, Na, {
  effect: function(e) {
    var t = e.state, r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow);
  }
});
wn.setDefaultProps({
  render: Ua
});
class b1 {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, updateDelay: s = 250, shouldShow: o }) {
    this.preventHide = !1, this.shouldShow = ({ view: l, state: a, from: c, to: u }) => {
      const { doc: d, selection: f } = a, { empty: h } = f, p = !d.textBetween(c, u).length && bs(a.selection), m = this.element.contains(document.activeElement);
      return !(!(l.hasFocus() || m) || h || p || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: l }) => {
      var a;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      l != null && l.relatedTarget && (!((a = this.element.parentNode) === null || a === void 0) && a.contains(l.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (l) => {
      this.blurHandler({ event: l });
    }, this.handleDebouncedUpdate = (l, a) => {
      const c = !(a != null && a.selection.eq(l.state.selection)), u = !(a != null && a.doc.eq(l.state.doc));
      !c && !u || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(l, c, u, a);
      }, this.updateDelay));
    }, this.updateHandler = (l, a, c, u) => {
      var d, f, h;
      const { state: p, composing: m } = l, { selection: y } = p;
      if (m || !a && !c)
        return;
      this.createTooltip();
      const { ranges: w } = y, S = Math.min(...w.map((x) => x.$from.pos)), g = Math.max(...w.map((x) => x.$to.pos));
      if (!((d = this.shouldShow) === null || d === void 0 ? void 0 : d.call(this, {
        editor: this.editor,
        view: l,
        state: p,
        oldState: u,
        from: S,
        to: g
      }))) {
        this.hide();
        return;
      }
      (f = this.tippy) === null || f === void 0 || f.setProps({
        getReferenceClientRect: ((h = this.tippyOptions) === null || h === void 0 ? void 0 : h.getReferenceClientRect) || (() => {
          if (cp(p.selection)) {
            let x = l.nodeDOM(S);
            const D = x.dataset.nodeViewWrapper ? x : x.querySelector("[data-node-view-wrapper]");
            if (D && (x = D.firstChild), x)
              return x.getBoundingClientRect();
          }
          return Ta(l, S, g);
        })
      }), this.show();
    }, this.editor = e, this.element = t, this.view = r, this.updateDelay = s, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = wn(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    const { state: r } = e, i = r.selection.$from.pos !== r.selection.$to.pos;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, t);
      return;
    }
    const s = !(t != null && t.selection.eq(e.state.selection)), o = !(t != null && t.doc.eq(e.state.doc));
    this.updateHandler(e, s, o, t);
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const Za = (n) => new ve({
  key: typeof n.pluginKey == "string" ? new Ge(n.pluginKey) : n.pluginKey,
  view: (e) => new b1({ view: e, ...n })
});
de.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Za({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
class k1 {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, shouldShow: s }) {
    this.preventHide = !1, this.shouldShow = ({ view: o, state: l }) => {
      const { selection: a } = l, { $anchor: c, empty: u } = a, d = c.depth === 1, f = c.parent.isTextblock && !c.parent.type.spec.code && !c.parent.textContent;
      return !(!o.hasFocus() || !u || !d || !f || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: o }) => {
      var l;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      o != null && o.relatedTarget && (!((l = this.element.parentNode) === null || l === void 0) && l.contains(o.relatedTarget)) || this.hide();
    }, this.tippyBlurHandler = (o) => {
      this.blurHandler({ event: o });
    }, this.editor = e, this.element = t, this.view = r, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = wn(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "right",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    var r, i, s;
    const { state: o } = e, { doc: l, selection: a } = o, { from: c, to: u } = a;
    if (t && t.doc.eq(l) && t.selection.eq(a))
      return;
    if (this.createTooltip(), !((r = this.shouldShow) === null || r === void 0 ? void 0 : r.call(this, {
      editor: this.editor,
      view: e,
      state: o,
      oldState: t
    }))) {
      this.hide();
      return;
    }
    (i = this.tippy) === null || i === void 0 || i.setProps({
      getReferenceClientRect: ((s = this.tippyOptions) === null || s === void 0 ? void 0 : s.getReferenceClientRect) || (() => Ta(e, c, u))
    }), this.show();
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const Ga = (n) => new ve({
  key: typeof n.pluginKey == "string" ? new Ge(n.pluginKey) : n.pluginKey,
  view: (e) => new k1({ view: e, ...n })
});
de.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "floatingMenu",
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Ga({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
Un({
  name: "BubbleMenu",
  props: {
    pluginKey: {
      type: [String, Object],
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = es(null);
    return ll(() => {
      const { updateDelay: r, editor: i, pluginKey: s, shouldShow: o, tippyOptions: l } = n;
      i.registerPlugin(Za({
        updateDelay: r,
        editor: i,
        element: t.value,
        pluginKey: s,
        shouldShow: o,
        tippyOptions: l
      }));
    }), ts(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Dt("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function el(n) {
  return mc((e, t) => ({
    get() {
      return e(), n;
    },
    set(r) {
      n = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t();
        });
      });
    }
  }));
}
let w1 = class extends zp {
  constructor(e = {}) {
    return super(e), this.vueRenderers = ac(/* @__PURE__ */ new Map()), this.contentComponent = null, this.reactiveState = el(this.view.state), this.reactiveExtensionStorage = el(this.extensionStorage), this.on("transaction", () => {
      this.reactiveState.value = this.view.state, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), cc(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(e, t) {
    super.registerPlugin(e, t), this.reactiveState.value = this.view.state;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(e) {
    super.unregisterPlugin(e), this.reactiveState.value = this.view.state;
  }
};
const x1 = Un({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(n) {
    const e = es(), t = uc();
    return dc(() => {
      const r = n.editor;
      r && r.options.element && e.value && fc(() => {
        if (!e.value || !r.options.element.firstChild)
          return;
        const i = hc(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = t.ctx._, r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), ts(() => {
      const r = n.editor;
      if (!r || (r.isDestroyed || r.view.setProps({
        nodeViews: {}
      }), r.contentComponent = null, !r.options.element.firstChild))
        return;
      const i = document.createElement("div");
      i.append(...r.options.element.childNodes), r.setOptions({
        element: i
      });
    }), { rootEl: e };
  },
  render() {
    const n = [];
    return this.editor && this.editor.vueRenderers.forEach((e) => {
      const t = Dt(pc, {
        to: e.teleportElement,
        key: e.id
      }, Dt(e.component, {
        ref: e.id,
        ...e.props
      }));
      n.push(t);
    }), Dt("div", {
      ref: (e) => {
        this.rootEl = e;
      }
    }, ...n);
  }
});
Un({
  name: "FloatingMenu",
  props: {
    pluginKey: {
      // TODO: TypeScript breaks :(
      // type: [String, Object as PropType<Exclude<FloatingMenuPluginProps['pluginKey'], string>>],
      type: null,
      default: "floatingMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = es(null);
    return ll(() => {
      const { pluginKey: r, editor: i, tippyOptions: s, shouldShow: o } = n;
      i.registerPlugin(Ga({
        pluginKey: r,
        editor: i,
        element: t.value,
        tippyOptions: s,
        shouldShow: o
      }));
    }), ts(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Dt("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
Un({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return Dt(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
Un({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var n, e;
    return Dt(this.as, {
      // @ts-ignore
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
      onDragstart: this.onDragStart
    }, (e = (n = this.$slots).default) === null || e === void 0 ? void 0 : e.call(n));
  }
});
const C1 = /^\s*>\s$/, S1 = se.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["blockquote", q(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      jn({
        find: C1,
        type: this.type
      })
    ];
  }
}), M1 = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))$/, O1 = /(?:^|\s)((?:\*\*)((?:[^*]+))(?:\*\*))/g, T1 = /(?:^|\s)((?:__)((?:[^__]+))(?:__))$/, E1 = /(?:^|\s)((?:__)((?:[^__]+))(?:__))/g, A1 = Ve.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", q(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      pn({
        find: M1,
        type: this.type
      }),
      pn({
        find: T1,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      mn({
        find: O1,
        type: this.type
      }),
      mn({
        find: E1,
        type: this.type
      })
    ];
  }
}), N1 = se.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", q(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), tl = Ve.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", q(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = Ur(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), nl = /^\s*([-+*])\s$/, D1 = se.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", q(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(N1.name, this.editor.getAttributes(tl.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = jn({
      find: nl,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = jn({
      find: nl,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(tl.name),
      editor: this.editor
    })), [
      n
    ];
  }
}), L1 = /(?:^|\s)((?:`)((?:[^`]+))(?:`))$/, I1 = /(?:^|\s)((?:`)((?:[^`]+))(?:`))/g, R1 = Ve.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["code", q(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: n }) => n.setMark(this.name),
      toggleCode: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetCode: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      pn({
        find: L1,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      mn({
        find: I1,
        type: this.type
      })
    ];
  }
}), P1 = /^```([a-z]+)?[\s\n]$/, B1 = /^~~~([a-z]+)?[\s\n]$/, V1 = se.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: null,
        parseHTML: (n) => {
          var e;
          const { languageClassPrefix: t } = this.options, s = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((o) => o.startsWith(t)).map((o) => o.replace(t, ""))[0];
          return s || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [
      "pre",
      q(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (n) => ({ commands: e }) => e.setNode(this.name, n),
      toggleCodeBlock: (n) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", n)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: n, $anchor: e } = this.editor.state.selection, t = e.pos === 1;
        return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: n }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = n, { selection: t } = e, { $from: r, empty: i } = t;
        if (!i || r.parent.type !== this.type)
          return !1;
        const s = r.parentOffset === r.parent.nodeSize - 2, o = r.parent.textContent.endsWith(`

`);
        return !s || !o ? !1 : n.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: i, empty: s } = t;
        if (!s || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 || r.nodeAt(l) ? !1 : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Ui({
        find: P1,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      Ui({
        find: B1,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new ve({
        key: new Ge("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, s = i == null ? void 0 : i.mode;
            if (!t || !s)
              return !1;
            const { tr: o } = n.state;
            return o.replaceSelectionWith(this.type.create({ language: s })), o.setSelection(L.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.insertText(t.replace(/\r\n?/g, `
`)), o.setMeta("paste", !0), n.dispatch(o), !0;
          }
        }
      })
    ];
  }
}), z1 = se.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function H1(n = {}) {
  return new ve({
    view(e) {
      return new F1(e, n);
    }
  });
}
class F1 {
  constructor(e, t) {
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = t.width || 1, this.color = t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((r) => {
      let i = (s) => {
        this[r](s);
      };
      return e.dom.addEventListener(r, i), { name: r, handler: i };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t;
    if (!e.parent.inlineContent) {
      let o = e.nodeBefore, l = e.nodeAfter;
      if (o || l) {
        let a = this.editorView.nodeDOM(this.cursorPos - (o ? o.nodeSize : 0)).getBoundingClientRect(), c = o ? a.bottom : a.top;
        o && l && (c = (c + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), t = { left: a.left, right: a.right, top: c - this.width / 2, bottom: c + this.width / 2 };
      }
    }
    if (!t) {
      let o = this.editorView.coordsAtPos(this.cursorPos);
      t = { left: o.left - this.width / 2, right: o.left + this.width / 2, top: o.top, bottom: o.bottom };
    }
    let r = this.editorView.dom.offsetParent;
    this.element || (this.element = r.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none; background-color: " + this.color);
    let i, s;
    if (!r || r == document.body && getComputedStyle(r).position == "static")
      i = -pageXOffset, s = -pageYOffset;
    else {
      let o = r.getBoundingClientRect();
      i = o.left - r.scrollLeft, s = o.top - r.scrollTop;
    }
    this.element.style.left = t.left - i + "px", this.element.style.top = t.top - s + "px", this.element.style.width = t.right - t.left + "px", this.element.style.height = t.bottom - t.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, s = typeof i == "function" ? i(this.editorView, t) : i;
    if (t && !s) {
      let o = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice && (o = Nl(this.editorView.state.doc, o, this.editorView.dragging.slice), o == null))
        return this.setCursor(null);
      this.setCursor(o), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
const _1 = de.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      H1(this.options)
    ];
  }
});
class $ extends R {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return $.valid(r) ? new $(r) : R.near(r);
  }
  content() {
    return C.empty;
  }
  eq(e) {
    return e instanceof $ && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new $(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new Ds(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !$1(e) || !j1(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = t.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e:
      for (; ; ) {
        if (!r && $.valid(e))
          return e;
        let i = e.pos, s = null;
        for (let o = e.depth; ; o--) {
          let l = e.node(o);
          if (t > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
            s = l.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1);
            break;
          } else if (o == 0)
            return null;
          i += t;
          let a = e.doc.resolve(i);
          if ($.valid(a))
            return a;
        }
        for (; ; ) {
          let o = t > 0 ? s.firstChild : s.lastChild;
          if (!o) {
            if (s.isAtom && !s.isText && !A.isSelectable(s)) {
              e = e.doc.resolve(i + s.nodeSize * t), r = !1;
              continue e;
            }
            break;
          }
          s = o, i += t;
          let l = e.doc.resolve(i);
          if ($.valid(l))
            return l;
        }
        return null;
      }
  }
}
$.prototype.visible = !1;
$.findFrom = $.findGapCursorFrom;
R.jsonID("gapcursor", $);
class Ds {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Ds(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return $.valid(t) ? new $(t) : R.near(t);
  }
}
function $1(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function j1(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || i.isAtom || i.type.spec.isolating)
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function W1() {
  return new ve({
    props: {
      decorations: U1,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && $.valid(t) ? new $(t) : null;
      },
      handleClick: K1,
      handleKeyDown: q1,
      handleDOMEvents: { beforeinput: J1 }
    }
  });
}
const q1 = pa({
  ArrowLeft: pr("horiz", -1),
  ArrowRight: pr("horiz", 1),
  ArrowUp: pr("vert", -1),
  ArrowDown: pr("vert", 1)
});
function pr(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, s) {
    let o = r.selection, l = e > 0 ? o.$to : o.$from, a = o.empty;
    if (o instanceof L) {
      if (!s.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = $.findGapCursorFrom(l, e, a);
    return c ? (i && i(r.tr.setSelection(new $(c))), !0) : !1;
  };
}
function K1(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!$.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && A.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new $(r))), !0);
}
function J1(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof $))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = k.empty;
  for (let o = r.length - 1; o >= 0; o--)
    i = k.from(r[o].createAndFill(null, i));
  let s = n.state.tr.replace(t.pos, t.pos, new C(i, 0, 0));
  return s.setSelection(L.near(s.doc.resolve(t.pos + 1))), n.dispatch(s), !1;
}
function U1(n) {
  if (!(n.selection instanceof $))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", J.create(n.doc, [Ee.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const Z1 = de.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      W1()
    ];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = I(M(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), G1 = se.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["br", q(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: i, storedMarks: s } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: o } = this.options, { splittableMarks: l } = r.extensionManager, a = s || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: u }) => {
            if (u && a && o) {
              const d = a.filter((f) => l.includes(f.type.name));
              c.ensureMarks(d);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), Y1 = se.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, q(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => Ui({
      find: new RegExp(`^(#{1,${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var Rr = 200, ee = function() {
};
ee.prototype.append = function(e) {
  return e.length ? (e = ee.from(e), !this.length && e || e.length < Rr && this.leafAppend(e) || this.length < Rr && e.leafPrepend(this) || this.appendInner(e)) : this;
};
ee.prototype.prepend = function(e) {
  return e.length ? ee.from(e).append(this) : this;
};
ee.prototype.appendInner = function(e) {
  return new X1(this, e);
};
ee.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? ee.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
ee.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
ee.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
ee.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(s, o) {
    return i.push(e(s, o));
  }, t, r), i;
};
ee.from = function(e) {
  return e instanceof ee ? e : e && e.length ? new Ya(e) : ee.empty;
};
var Ya = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, s) {
    return i == 0 && s == this.length ? this : new e(this.values.slice(i, s));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, s, o, l) {
    for (var a = s; a < o; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, s, o, l) {
    for (var a = s - 1; a >= o; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= Rr)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= Rr)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(ee);
ee.empty = new Ya([]);
var X1 = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, s) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(r, Math.min(i, l), s, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var s = this.left.length;
    return i <= s ? this.left.slice(r, i) : r >= s ? this.right.slice(r - s, i - s) : this.left.slice(r, s).append(this.right.slice(0, i - s));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(ee), Xa = ee;
const Q1 = 500;
class Ie {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, s;
    t && (i = this.remapping(r, this.items.length), s = i.maps.length);
    let o = e.tr, l, a, c = [], u = [];
    return this.items.forEach((d, f) => {
      if (!d.step) {
        i || (i = this.remapping(r, f + 1), s = i.maps.length), s--, u.push(d);
        return;
      }
      if (i) {
        u.push(new _e(d.map));
        let h = d.step.map(i.slice(s)), p;
        h && o.maybeStep(h).doc && (p = o.mapping.maps[o.mapping.maps.length - 1], c.push(new _e(p, void 0, void 0, c.length + u.length))), s--, p && i.appendMap(p, s);
      } else
        o.maybeStep(d.step);
      if (d.selection)
        return l = i ? d.selection.map(i.slice(s)) : d.selection, a = new Ie(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let s = [], o = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let d = e.steps[u].invert(e.docs[u]), f = new _e(e.mapping.maps[u], d, t), h;
      (h = a && a.merge(f)) && (f = h, u ? s.pop() : l = l.slice(0, l.length - 1)), s.push(f), t && (o++, t = void 0), i || (a = f);
    }
    let c = o - r.depth;
    return c > tg && (l = eg(l, c), o -= c), new Ie(l.append(s), o);
  }
  remapping(e, t) {
    let r = new rn();
    return this.items.forEach((i, s) => {
      let o = i.mirrorOffset != null && s - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, o);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Ie(this.items.append(e.map((t) => new _e(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), s = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((f) => {
      f.selection && l--;
    }, i);
    let a = t;
    this.items.forEach((f) => {
      let h = s.getMirror(--a);
      if (h == null)
        return;
      o = Math.min(o, h);
      let p = s.maps[h];
      if (f.step) {
        let m = e.steps[h].invert(e.docs[h]), y = f.selection && f.selection.map(s.slice(a + 1, h));
        y && l++, r.push(new _e(p, m, y));
      } else
        r.push(new _e(p));
    }, i);
    let c = [];
    for (let f = t; f < o; f++)
      c.push(new _e(s.maps[f]));
    let u = this.items.slice(0, i).append(c).append(r), d = new Ie(u, l);
    return d.emptyItemCount() > Q1 && (d = d.compress(this.items.length - r.length)), d;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], s = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        i.push(o), o.selection && s++;
      else if (o.step) {
        let a = o.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let u = o.selection && o.selection.map(t.slice(r));
          u && s++;
          let d = new _e(c.invert(), a, u), f, h = i.length - 1;
          (f = i.length && i[h].merge(d)) ? i[h] = f : i.push(d);
        }
      } else
        o.map && r--;
    }, this.items.length, 0), new Ie(Xa.from(i.reverse()), s);
  }
}
Ie.empty = new Ie(Xa.empty, 0);
function eg(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class _e {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new _e(t.getMap().invert(), t, this.selection);
    }
  }
}
class ut {
  constructor(e, t, r, i) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i;
  }
}
const tg = 20;
function ng(n, e, t, r) {
  let i = t.getMeta(yt), s;
  if (i)
    return i.historyState;
  t.getMeta(ig) && (n = new ut(n.done, n.undone, null, 0));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (o && o.getMeta(yt))
    return o.getMeta(yt).redo ? new ut(n.done.addTransform(t, void 0, r, vr(e)), n.undone, rl(t.mapping.maps[t.steps.length - 1]), n.prevTime) : new ut(n.done, n.undone.addTransform(t, void 0, r, vr(e)), null, n.prevTime);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = n.prevTime == 0 || !o && (n.prevTime < (t.time || 0) - r.newGroupDelay || !rg(t, n.prevRanges)), a = o ? Mi(n.prevRanges, t.mapping) : rl(t.mapping.maps[t.steps.length - 1]);
    return new ut(n.done.addTransform(t, l ? e.selection.getBookmark() : void 0, r, vr(e)), Ie.empty, a, t.time);
  } else
    return (s = t.getMeta("rebased")) ? new ut(n.done.rebased(t, s), n.undone.rebased(t, s), Mi(n.prevRanges, t.mapping), n.prevTime) : new ut(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), Mi(n.prevRanges, t.mapping), n.prevTime);
}
function rg(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let s = 0; s < e.length; s += 2)
      r <= e[s + 1] && i >= e[s] && (t = !0);
  }), t;
}
function rl(n) {
  let e = [];
  return n.forEach((t, r, i, s) => e.push(i, s)), e;
}
function Mi(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), s = e.map(n[r + 1], -1);
    i <= s && t.push(i, s);
  }
  return t;
}
function Qa(n, e, t, r) {
  let i = vr(e), s = yt.get(e).spec.config, o = (r ? n.undone : n.done).popEvent(e, i);
  if (!o)
    return;
  let l = o.selection.resolve(o.transform.doc), a = (r ? n.done : n.undone).addTransform(o.transform, e.selection.getBookmark(), s, i), c = new ut(r ? a : o.remaining, r ? o.remaining : a, null, 0);
  t(o.transform.setSelection(l).setMeta(yt, { redo: r, historyState: c }).scrollIntoView());
}
let Oi = !1, il = null;
function vr(n) {
  let e = n.plugins;
  if (il != e) {
    Oi = !1, il = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        Oi = !0;
        break;
      }
  }
  return Oi;
}
const yt = new Ge("history"), ig = new Ge("closeHistory");
function sg(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new ve({
    key: yt,
    state: {
      init() {
        return new ut(Ie.empty, Ie.empty, null, 0);
      },
      apply(e, t, r) {
        return ng(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? ec : r == "historyRedo" ? tc : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
const ec = (n, e) => {
  let t = yt.getState(n);
  return !t || t.done.eventCount == 0 ? !1 : (e && Qa(t, n, e, !1), !0);
}, tc = (n, e) => {
  let t = yt.getState(n);
  return !t || t.undone.eventCount == 0 ? !1 : (e && Qa(t, n, e, !0), !0);
}, og = de.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => ec(n, e),
      redo: () => ({ state: n, dispatch: e }) => tc(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      sg(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Mod-Z": () => this.editor.commands.undo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Mod-Y": () => this.editor.commands.redo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Shift-Mod-Z": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), lg = se.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", q(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n, state: e }) => {
        const { $to: t } = e.selection, r = n();
        return t.parentOffset === 0 ? r.insertContentAt(Math.max(t.pos - 2, 0), { type: this.name }) : r.insertContent({ type: this.name }), r.command(({ tr: i, dispatch: s }) => {
          var o;
          if (s) {
            const { $to: l } = i.selection, a = l.end();
            if (l.nodeAfter)
              l.nodeAfter.isTextblock ? i.setSelection(L.create(i.doc, l.pos + 1)) : l.nodeAfter.isBlock ? i.setSelection(A.create(i.doc, l.pos)) : i.setSelection(L.create(i.doc, l.pos));
            else {
              const c = (o = l.parent.type.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.create();
              c && (i.insert(a, c), i.setSelection(L.create(i.doc, a + 1)));
            }
            i.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      Hp({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), ag = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))$/, cg = /(?:^|\s)((?:\*)((?:[^*]+))(?:\*))/g, ug = /(?:^|\s)((?:_)((?:[^_]+))(?:_))$/, dg = /(?:^|\s)((?:_)((?:[^_]+))(?:_))/g, fg = Ve.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", q(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      pn({
        find: ag,
        type: this.type
      }),
      pn({
        find: ug,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      mn({
        find: cg,
        type: this.type
      }),
      mn({
        find: dg,
        type: this.type
      })
    ];
  }
}), hg = se.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", q(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), pg = se.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", q(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), sl = Ve.create({
  name: "textStyle",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", q(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ state: n, commands: e }) => {
        const t = Ur(n, this.type);
        return Object.entries(t).some(([, i]) => !!i) ? !0 : e.unsetMark(this.name);
      }
    };
  }
}), ol = /^(\d+)\.\s$/, mg = se.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", q(this.options.HTMLAttributes, t), 0] : ["ol", q(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(pg.name, this.editor.getAttributes(sl.name)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = jn({
      find: ol,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = jn({
      find: ol,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(sl.name) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), gg = se.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", q(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), yg = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))$/, vg = /(?:^|\s)((?:~~)((?:[^~]+))(?:~~))/g, bg = Ve.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", q(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    const n = {};
    return ws() ? n["Mod-Shift-s"] = () => this.editor.commands.toggleStrike() : n["Ctrl-Shift-s"] = () => this.editor.commands.toggleStrike(), n;
  },
  addInputRules() {
    return [
      pn({
        find: yg,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      mn({
        find: vg,
        type: this.type
      })
    ];
  }
}), kg = se.create({
  name: "text",
  group: "inline"
}), wg = de.create({
  name: "starterKit",
  addExtensions() {
    var n, e, t, r, i, s, o, l, a, c, u, d, f, h, p, m, y, v;
    const w = [];
    return this.options.blockquote !== !1 && w.push(S1.configure((n = this.options) === null || n === void 0 ? void 0 : n.blockquote)), this.options.bold !== !1 && w.push(A1.configure((e = this.options) === null || e === void 0 ? void 0 : e.bold)), this.options.bulletList !== !1 && w.push(D1.configure((t = this.options) === null || t === void 0 ? void 0 : t.bulletList)), this.options.code !== !1 && w.push(R1.configure((r = this.options) === null || r === void 0 ? void 0 : r.code)), this.options.codeBlock !== !1 && w.push(V1.configure((i = this.options) === null || i === void 0 ? void 0 : i.codeBlock)), this.options.document !== !1 && w.push(z1.configure((s = this.options) === null || s === void 0 ? void 0 : s.document)), this.options.dropcursor !== !1 && w.push(_1.configure((o = this.options) === null || o === void 0 ? void 0 : o.dropcursor)), this.options.gapcursor !== !1 && w.push(Z1.configure((l = this.options) === null || l === void 0 ? void 0 : l.gapcursor)), this.options.hardBreak !== !1 && w.push(G1.configure((a = this.options) === null || a === void 0 ? void 0 : a.hardBreak)), this.options.heading !== !1 && w.push(Y1.configure((c = this.options) === null || c === void 0 ? void 0 : c.heading)), this.options.history !== !1 && w.push(og.configure((u = this.options) === null || u === void 0 ? void 0 : u.history)), this.options.horizontalRule !== !1 && w.push(lg.configure((d = this.options) === null || d === void 0 ? void 0 : d.horizontalRule)), this.options.italic !== !1 && w.push(fg.configure((f = this.options) === null || f === void 0 ? void 0 : f.italic)), this.options.listItem !== !1 && w.push(hg.configure((h = this.options) === null || h === void 0 ? void 0 : h.listItem)), this.options.orderedList !== !1 && w.push(mg.configure((p = this.options) === null || p === void 0 ? void 0 : p.orderedList)), this.options.paragraph !== !1 && w.push(gg.configure((m = this.options) === null || m === void 0 ? void 0 : m.paragraph)), this.options.strike !== !1 && w.push(bg.configure((y = this.options) === null || y === void 0 ? void 0 : y.strike)), this.options.text !== !1 && w.push(kg.configure((v = this.options) === null || v === void 0 ? void 0 : v.text)), w;
  }
}), xg = Ve.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["u", q(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: n }) => n.setMark(this.name),
      toggleUnderline: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetUnderline: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), Cg = {
  name: "Editor",
  components: {
    EditorContent: x1,
    Icon: Xc
  },
  props: {
    initialContent: {
      type: String,
      required: !0,
      default: "<em>editable text</em>"
    },
    activeButtons: {
      type: Array,
      validator: function(n) {
        for (let e of n)
          if ([
            "bold",
            "italic",
            "strike",
            "underline",
            "code",
            "h1",
            "h2",
            "h3",
            "bulletList",
            "orderedList",
            "blockquote",
            "codeBlock",
            "horizontalRule",
            "undo",
            "redo"
          ].indexOf(e) === -1)
            return -1;
        return 1;
      },
      default: () => ["bold", "italic"]
    }
  },
  emits: ["update"],
  data() {
    return {
      html: "",
      json: "",
      editor: null
    };
  },
  created() {
    this.editor = new w1({
      content: this.initialContent,
      extensions: [wg, xg]
    }), this.html = this.editor.getHTML(), this.json = this.editor.getJSON(), this.editor.on("update", () => {
      this.html = this.editor.getHTML(), this.json = this.editor.getJSON(), this.$emit("update", this.html);
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  }
}, Sg = { class: "editor" }, Mg = { class: "menubar" };
function Og(n, e, t, r, i, s) {
  const o = Ti("icon"), l = Ti("editor-content");
  return j(), W("div", Sg, [
    gc("div", Mg, [
      (j(!0), W(yc, null, vc(t.activeButtons, (a) => (j(), W("span", { key: a }, [
        a === "bold" ? (j(), W("button", {
          key: 0,
          class: we(["menubar__button", { "is-active": i.editor.isActive("bold") }]),
          onClick: e[0] || (e[0] = (c) => i.editor.chain().focus().toggleBold().run())
        }, [
          fe(o, { name: "bold" })
        ], 2)) : le("", !0),
        a === "italic" ? (j(), W("button", {
          key: 1,
          class: we(["menubar__button", { "is-active": i.editor.isActive("italic") }]),
          onClick: e[1] || (e[1] = (c) => i.editor.chain().focus().toggleItalic().run())
        }, [
          fe(o, { name: "italic" })
        ], 2)) : le("", !0),
        a === "strike" ? (j(), W("button", {
          key: 2,
          class: we(["menubar__button", { "is-active": i.editor.isActive("strike") }]),
          onClick: e[2] || (e[2] = (c) => i.editor.chain().focus().toggleStrike().run())
        }, [
          fe(o, { name: "strike" })
        ], 2)) : le("", !0),
        a === "underline" ? (j(), W("button", {
          key: 3,
          class: we(["menubar__button", { "is-active": i.editor.isActive("underline") }]),
          onClick: e[3] || (e[3] = (c) => i.editor.chain().focus().toggleUnderline().run())
        }, [
          fe(o, { name: "underline" })
        ], 2)) : le("", !0),
        a === "code" ? (j(), W("button", {
          key: 4,
          class: we(["menubar__button", { "is-active": i.editor.isActive("code") }]),
          onClick: e[4] || (e[4] = (c) => i.editor.chain().focus().toggleCode().run())
        }, [
          fe(o, { name: "code" })
        ], 2)) : le("", !0),
        a === "h1" ? (j(), W("button", {
          key: 5,
          class: we(["menubar__button", { "is-active": i.editor.isActive("heading", { level: 1 }) }]),
          onClick: e[5] || (e[5] = (c) => i.editor.chain().focus().toggleHeading({ level: 1 }).run())
        }, " H1 ", 2)) : le("", !0),
        a === "h2" ? (j(), W("button", {
          key: 6,
          class: we(["menubar__button", { "is-active": i.editor.isActive("heading", { level: 2 }) }]),
          onClick: e[6] || (e[6] = (c) => i.editor.chain().focus().toggleHeading({ level: 2 }).run())
        }, " H2 ", 2)) : le("", !0),
        a === "h3" ? (j(), W("button", {
          key: 7,
          class: we(["menubar__button", { "is-active": i.editor.isActive("heading", { level: 3 }) }]),
          onClick: e[7] || (e[7] = (c) => i.editor.chain().focus().toggleHeading({ level: 3 }).run())
        }, " H3 ", 2)) : le("", !0),
        a === "bulletList" ? (j(), W("button", {
          key: 8,
          class: we(["menubar__button", { "is-active": i.editor.isActive("bulletList") }]),
          onClick: e[8] || (e[8] = (c) => i.editor.chain().focus().toggleBulletList().run())
        }, [
          fe(o, { name: "ul" })
        ], 2)) : le("", !0),
        a === "orderedList" ? (j(), W("button", {
          key: 9,
          class: we(["menubar__button", { "is-active": i.editor.isActive("orderedList") }]),
          onClick: e[9] || (e[9] = (c) => i.editor.chain().focus().toggleOrderedList().run())
        }, [
          fe(o, { name: "ol" })
        ], 2)) : le("", !0),
        a === "blockquote" ? (j(), W("button", {
          key: 10,
          class: we(["menubar__button", { "is-active": i.editor.isActive("blockquote") }]),
          onClick: e[10] || (e[10] = (c) => i.editor.chain().focus().toggleBlockquote().run())
        }, [
          fe(o, { name: "quote" })
        ], 2)) : le("", !0),
        a === "codeBlock" ? (j(), W("button", {
          key: 11,
          class: we(["menubar__button", { "is-active": i.editor.isActive("codeBlock") }]),
          onClick: e[11] || (e[11] = (c) => i.editor.chain().focus().toggleCodeBlock().run())
        }, [
          fe(o, { name: "code" })
        ], 2)) : le("", !0),
        a === "horizontalRule" ? (j(), W("button", {
          key: 12,
          class: "menubar__button",
          onClick: e[12] || (e[12] = (c) => i.editor.chain().focus().setHorizontalRule().run())
        }, [
          fe(o, { name: "hr" })
        ])) : le("", !0),
        a === "undo" ? (j(), W("button", {
          key: 13,
          class: "menubar__button",
          onClick: e[13] || (e[13] = (c) => i.editor.chain().focus().undo().run())
        }, [
          fe(o, { name: "undo" })
        ])) : le("", !0),
        a === "redo" ? (j(), W("button", {
          key: 14,
          class: "menubar__button",
          onClick: e[14] || (e[14] = (c) => i.editor.chain().focus().redo().run())
        }, [
          fe(o, { name: "redo" })
        ])) : le("", !0)
      ]))), 128))
    ]),
    fe(l, {
      class: "editor__content",
      editor: i.editor
    }, null, 8, ["editor"])
  ]);
}
const Ng = /* @__PURE__ */ ns(Cg, [["render", Og]]);
export {
  Ng as default
};
