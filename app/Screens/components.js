import React from 'react';
import { Platform, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from "react-native-vector-icons/Feather";
import Ripple from 'react-native-material-ripple';
import Header from '../layout/Header';
import { GlobalStyleSheet } from '../constants/StyleSheet';
import { FONTS, SIZES } from '../constants/theme';
import { SvgXml } from 'react-native-svg';
import DropShadow from 'react-native-drop-shadow';

const table = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28px" height="28px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><rect fill="#4A89DC" opacity="0.3" x="4" y="5" width="16" height="6" rx="1.5"/><rect fill="#4A89DC" x="4" y="13" width="16" height="6" rx="1.5"/></g></svg>`;
const sheet = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M4.5,3 L19.5,3 C20.3284271,3 21,3.67157288 21,4.5 L21,19.5 C21,20.3284271 20.3284271,21 19.5,21 L4.5,21 C3.67157288,21 3,20.3284271 3,19.5 L3,4.5 C3,3.67157288 3.67157288,3 4.5,3 Z M8,5 C7.44771525,5 7,5.44771525 7,6 C7,6.55228475 7.44771525,7 8,7 L16,7 C16.5522847,7 17,6.55228475 17,6 C17,5.44771525 16.5522847,5 16,5 L8,5 Z" fill="#da4453"/></g></svg>`;
const modal = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M6,9 L6,15 C6,16.6568542 7.34314575,18 9,18 L15,18 L15,18.8181818 C15,20.2324881 14.2324881,21 12.8181818,21 L5.18181818,21 C3.76751186,21 3,20.2324881 3,18.8181818 L3,11.1818182 C3,9.76751186 3.76751186,9 5.18181818,9 L6,9 Z" fill="#8cc152" fill-rule="nonzero"/><path d="M10.1818182,4 L17.8181818,4 C19.2324881,4 20,4.76751186 20,6.18181818 L20,13.8181818 C20,15.2324881 19.2324881,16 17.8181818,16 L10.1818182,16 C8.76751186,16 8,15.2324881 8,13.8181818 L8,6.18181818 C8,4.76751186 8.76751186,4 10.1818182,4 Z" fill="#8cc152" opacity="0.3"/></g></svg>`;
const chart =  `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M4.00246329,12.2004927 L13,14 L13,4.06189375 C16.9463116,4.55399184 20,7.92038235 20,12 C20,16.418278 16.418278,20 12,20 C7.64874861,20 4.10886412,16.5261253 4.00246329,12.2004927 Z" fill="#939dab" opacity="0.3"/><path d="M3.0603968,10.0120794 C3.54712466,6.05992157 6.91622084,3 11,3 L11,11.6 L3.0603968,10.0120794 Z" fill="#939dab"/></g></svg>`;
const button = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><rect fill="#967adc" x="4" y="5" width="16" height="3" rx="1.5"/><path d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L18.5,10 C19.3284271,10 20,10.6715729 20,11.5 C20,12.3284271 19.3284271,13 18.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z" fill="#967adc" opacity="0.3"/></g></svg>`;
const card = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><rect fill="#f9573d" x="4" y="4" width="16" height="16" rx="2"/></g></svg>`;
const gradient = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M6,9 L6,15 C6,16.6568542 7.34314575,18 9,18 L15,18 L15,18.8181818 C15,20.2324881 14.2324881,21 12.8181818,21 L5.18181818,21 C3.76751186,21 3,20.2324881 3,18.8181818 L3,11.1818182 C3,9.76751186 3.76751186,9 5.18181818,9 L6,9 Z M17,16 L17,10 C17,8.34314575 15.6568542,7 14,7 L8,7 L8,6.18181818 C8,4.76751186 8.76751186,4 10.1818182,4 L17.8181818,4 C19.2324881,4 20,4.76751186 20,6.18181818 L20,13.8181818 C20,15.2324881 19.2324881,16 17.8181818,16 L17,16 Z" fill="#7353f1" fill-rule="nonzero"/><path d="M9.27272727,9 L13.7272727,9 C14.5522847,9 15,9.44771525 15,10.2727273 L15,14.7272727 C15,15.5522847 14.5522847,16 13.7272727,16 L9.27272727,16 C8.44771525,16 8,15.5522847 8,14.7272727 L8,10.2727273 C8,9.44771525 8.44771525,9 9.27272727,9 Z" fill="#7353f1" opacity="0.3"/></g></svg>`;
const column = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><rect fill="#59b3b3" x="2" y="4" width="19" height="4" rx="1"/><path d="M3,10 L6,10 C6.55228475,10 7,10.4477153 7,11 L7,19 C7,19.5522847 6.55228475,20 6,20 L3,20 C2.44771525,20 2,19.5522847 2,19 L2,11 C2,10.4477153 2.44771525,10 3,10 Z M10,10 L13,10 C13.5522847,10 14,10.4477153 14,11 L14,19 C14,19.5522847 13.5522847,20 13,20 L10,20 C9.44771525,20 9,19.5522847 9,19 L9,11 C9,10.4477153 9.44771525,10 10,10 Z M17,10 L20,10 C20.5522847,10 21,10.4477153 21,11 L21,19 C21,19.5522847 20.5522847,20 20,20 L17,20 C16.4477153,20 16,19.5522847 16,19 L16,11 C16,10.4477153 16.4477153,10 17,10 Z" fill="#59b3b3" opacity="0.3"/></g></svg>`;
const upload = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M2,13 C2,12.5 2.5,12 3,12 C3.5,12 4,12.5 4,13 C4,13.3333333 4,15 4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 C2,15 2,13.3333333 2,13 Z" fill="#22977c" fill-rule="nonzero" opacity="0.3"/><rect fill="#22977c" opacity="0.3" x="11" y="2" width="2" height="14" rx="1"/><path d="M12.0362375,3.37797611 L7.70710678,7.70710678 C7.31658249,8.09763107 6.68341751,8.09763107 6.29289322,7.70710678 C5.90236893,7.31658249 5.90236893,6.68341751 6.29289322,6.29289322 L11.2928932,1.29289322 C11.6689749,0.916811528 12.2736364,0.900910387 12.6689647,1.25670585 L17.6689647,5.75670585 C18.0794748,6.12616487 18.1127532,6.75845471 17.7432941,7.16896473 C17.3738351,7.57947475 16.7415453,7.61275317 16.3310353,7.24329415 L12.0362375,3.37797611 Z" fill="#22977c" fill-rule="nonzero"/></g></svg>`;
const code = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M17.2718029,8.68536757 C16.8932864,8.28319382 16.9124644,7.65031935 17.3146382,7.27180288 C17.7168119,6.89328641 18.3496864,6.91246442 18.7282029,7.31463817 L22.7282029,11.5646382 C23.0906029,11.9496882 23.0906029,12.5503176 22.7282029,12.9353676 L18.7282029,17.1853676 C18.3496864,17.5875413 17.7168119,17.6067193 17.3146382,17.2282029 C16.9124644,16.8496864 16.8932864,16.2168119 17.2718029,15.8146382 L20.6267538,12.2500029 L17.2718029,8.68536757 Z M6.72819712,8.6853647 L3.37324625,12.25 L6.72819712,15.8146353 C7.10671359,16.2168091 7.08753558,16.8496835 6.68536183,17.2282 C6.28318808,17.6067165 5.65031361,17.5875384 5.27179713,17.1853647 L1.27179713,12.9353647 C0.909397125,12.5503147 0.909397125,11.9496853 1.27179713,11.5646353 L5.27179713,7.3146353 C5.65031361,6.91246155 6.28318808,6.89328354 6.68536183,7.27180001 C7.08753558,7.65031648 7.10671359,8.28319095 6.72819712,8.6853647 Z" fill="#e54054" fill-rule="nonzero"/><rect fill="#e54054" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-345.000000) translate(-12.000000, -12.000000) " x="11" y="4" width="2" height="16" rx="1"/></g></svg>`;
const pagination = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M1.5,5 L4.5,5 C5.32842712,5 6,5.67157288 6,6.5 L6,17.5 C6,18.3284271 5.32842712,19 4.5,19 L1.5,19 C0.671572875,19 1.01453063e-16,18.3284271 0,17.5 L0,6.5 C-1.01453063e-16,5.67157288 0.671572875,5 1.5,5 Z M18.5,5 L22.5,5 C23.3284271,5 24,5.67157288 24,6.5 L24,17.5 C24,18.3284271 23.3284271,19 22.5,19 L18.5,19 C17.6715729,19 17,18.3284271 17,17.5 L17,6.5 C17,5.67157288 17.6715729,5 18.5,5 Z" fill="#7dcb63"/><rect fill="#7dcb63" opacity="0.3" x="8" y="5" width="7" height="14" rx="1.5"/></g></svg>`;
const dollor = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><rect fill="#c34ecb" opacity="0.3" x="11.5" y="2" width="2" height="4" rx="1"/><rect fill="#c34ecb" opacity="0.3" x="11.5" y="16" width="2" height="5" rx="1"/><path d="M15.493,8.044 C15.2143319,7.68933156 14.8501689,7.40750104 14.4005,7.1985 C13.9508311,6.98949895 13.5170021,6.885 13.099,6.885 C12.8836656,6.885 12.6651678,6.90399981 12.4435,6.942 C12.2218322,6.98000019 12.0223342,7.05283279 11.845,7.1605 C11.6676658,7.2681672 11.5188339,7.40749914 11.3985,7.5785 C11.2781661,7.74950085 11.218,7.96799867 11.218,8.234 C11.218,8.46200114 11.2654995,8.65199924 11.3605,8.804 C11.4555005,8.95600076 11.5948324,9.08899943 11.7785,9.203 C11.9621676,9.31700057 12.1806654,9.42149952 12.434,9.5165 C12.6873346,9.61150047 12.9723317,9.70966616 13.289,9.811 C13.7450023,9.96300076 14.2199975,10.1308324 14.714,10.3145 C15.2080025,10.4981676 15.6576646,10.7419985 16.063,11.046 C16.4683354,11.3500015 16.8039987,11.7268311 17.07,12.1765 C17.3360013,12.6261689 17.469,13.1866633 17.469,13.858 C17.469,14.6306705 17.3265014,15.2988305 17.0415,15.8625 C16.7564986,16.4261695 16.3733357,16.8916648 15.892,17.259 C15.4106643,17.6263352 14.8596698,17.8986658 14.239,18.076 C13.6183302,18.2533342 12.97867,18.342 12.32,18.342 C11.3573285,18.342 10.4263378,18.1741683 9.527,17.8385 C8.62766217,17.5028317 7.88033631,17.0246698 7.285,16.404 L9.413,14.238 C9.74233498,14.6433354 10.176164,14.9821653 10.7145,15.2545 C11.252836,15.5268347 11.7879973,15.663 12.32,15.663 C12.5606679,15.663 12.7949989,15.6376669 13.023,15.587 C13.2510011,15.5363331 13.4504991,15.4540006 13.6215,15.34 C13.7925009,15.2259994 13.9286662,15.0740009 14.03,14.884 C14.1313338,14.693999 14.182,14.4660013 14.182,14.2 C14.182,13.9466654 14.1186673,13.7313342 13.992,13.554 C13.8653327,13.3766658 13.6848345,13.2151674 13.4505,13.0695 C13.2161655,12.9238326 12.9248351,12.7908339 12.5765,12.6705 C12.2281649,12.5501661 11.8323355,12.420334 11.389,12.281 C10.9583312,12.141666 10.5371687,11.9770009 10.1255,11.787 C9.71383127,11.596999 9.34650161,11.3531682 9.0235,11.0555 C8.70049838,10.7578318 8.44083431,10.3968355 8.2445,9.9725 C8.04816568,9.54816454 7.95,9.03200304 7.95,8.424 C7.95,7.67666293 8.10199848,7.03700266 8.406,6.505 C8.71000152,5.97299734 9.10899753,5.53600171 9.603,5.194 C10.0970025,4.85199829 10.6543302,4.60183412 11.275,4.4435 C11.8956698,4.28516587 12.5226635,4.206 13.156,4.206 C13.9160038,4.206 14.6918294,4.34533194 15.4835,4.624 C16.2751706,4.90266806 16.9686637,5.31433061 17.564,5.859 L15.493,8.044 Z" fill="#c34ecb"/></g></svg>`;
const image = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><polygon points="0 0 24 0 24 24 0 24"/><path d="M6,5 L18,5 C19.6568542,5 21,6.34314575 21,8 L21,17 C21,18.6568542 19.6568542,20 18,20 L6,20 C4.34314575,20 3,18.6568542 3,17 L3,8 C3,6.34314575 4.34314575,5 6,5 Z M5,17 L14,17 L9.5,11 L5,17 Z M16,14 C17.6568542,14 19,12.6568542 19,11 C19,9.34314575 17.6568542,8 16,8 C14.3431458,8 13,9.34314575 13,11 C13,12.6568542 14.3431458,14 16,14 Z" fill="#e39d34"/></g></svg>`;
const diamond = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><polygon fill="#34a1e9" opacity="0.3" points="5 3 19 3 23 8 1 8"/><polygon fill="#34a1e9" points="23 8 12 20 1 8"/></g></svg>`;
const social = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"/><path d="M4,16 L5,16 C5.55228475,16 6,16.4477153 6,17 C6,17.5522847 5.55228475,18 5,18 L4,18 C3.44771525,18 3,17.5522847 3,17 C3,16.4477153 3.44771525,16 4,16 Z M1,11 L5,11 C5.55228475,11 6,11.4477153 6,12 C6,12.5522847 5.55228475,13 5,13 L1,13 C0.44771525,13 6.76353751e-17,12.5522847 0,12 C-6.76353751e-17,11.4477153 0.44771525,11 1,11 Z M3,6 L5,6 C5.55228475,6 6,6.44771525 6,7 C6,7.55228475 5.55228475,8 5,8 L3,8 C2.44771525,8 2,7.55228475 2,7 C2,6.44771525 2.44771525,6 3,6 Z" fill="#5970f5" opacity="0.3"/><path d="M10,6 L22,6 C23.1045695,6 24,6.8954305 24,8 L24,16 C24,17.1045695 23.1045695,18 22,18 L10,18 C8.8954305,18 8,17.1045695 8,16 L8,8 C8,6.8954305 8.8954305,6 10,6 Z M21.0849395,8.0718316 L16,10.7185839 L10.9150605,8.0718316 C10.6132433,7.91473331 10.2368262,8.02389331 10.0743092,8.31564728 C9.91179228,8.60740125 10.0247174,8.9712679 10.3265346,9.12836619 L15.705737,11.9282847 C15.8894428,12.0239051 16.1105572,12.0239051 16.294263,11.9282847 L21.6734654,9.12836619 C21.9752826,8.9712679 22.0882077,8.60740125 21.9256908,8.31564728 C21.7631738,8.02389331 21.3867567,7.91473331 21.0849395,8.0718316 Z" fill="#5970f5"/></g></svg>`;
const toggle  = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect opacity="0.200000003" x="0" y="0" width="24" height="24"/><path d="M4.5,7 L9.5,7 C10.3284271,7 11,7.67157288 11,8.5 C11,9.32842712 10.3284271,10 9.5,10 L4.5,10 C3.67157288,10 3,9.32842712 3,8.5 C3,7.67157288 3.67157288,7 4.5,7 Z M13.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L13.5,18 C12.6715729,18 12,17.3284271 12,16.5 C12,15.6715729 12.6715729,15 13.5,15 Z" fill="#d14c3a" opacity="0.3"/><path d="M17,11 C15.3431458,11 14,9.65685425 14,8 C14,6.34314575 15.3431458,5 17,5 C18.6568542,5 20,6.34314575 20,8 C20,9.65685425 18.6568542,11 17,11 Z M6,19 C4.34314575,19 3,17.6568542 3,16 C3,14.3431458 4.34314575,13 6,13 C7.65685425,13 9,14.3431458 9,16 C9,17.6568542 7.65685425,19 6,19 Z" fill="#d14c3a"/></g></svg>`;

const Components = (props) => {

    const {colors} = useTheme();

    const ComponentData = [
        {
            icon : table,
            title : "Accordions List",
            desc  : "Use for compacting content",
            navigate : 'Accordion',
        },
        {
            icon : sheet,
            title : "Bottom Sheets",
            desc  : "Use for Show Messages",
            navigate : 'ActionSheet',
        },
        {
            icon : modal,
            title : "Modal Box",
            desc  : "Use for Show Messages",
            navigate : 'ActionModals',
        },
        {
            icon : button,
            title : "Buttons",
            desc  : "Designed for multipurpose",
            navigate : 'Buttons',
        },
        {
            icon : chart,
            title : "Charts",
            desc  : "Use react native chart kit",
            navigate : 'Charts',
        },
        {
            icon : table,
            title : "Chips",
            desc  : "Show small information",
            navigate : 'Chips',
        },
        {
            icon : card,
            title : "Cards",
            desc  : "Applications cards",
            navigate : 'Cards',
        },
        {
            icon : column,
            title : "Columns",
            desc  : "Two Columns",
            navigate : 'Columns',
        },
        {
            icon : table,
            title : "Collapse",
            desc  : "Best for small menus",
            navigate : 'CollapseElements',
        },
        {
            icon : table,
            title : "Dividers",
            desc  : "Spacing betweeen your elements",
            navigate : 'DividerElements',
        },
        {
            icon : upload,
            title : "File Upload",
            desc  : "Upload image",
            navigate : 'FileUploads',
        },
        {
            icon : button,
            title : "Header Styles",
            desc  : "Header styles available",
            navigate : 'Headers',
        },
        {
            icon : button,
            title : "Footer Menu Styles",
            desc  : "Footer styles available",
            navigate : 'Footers',
        },
        {
            icon : code,
            title : "Inputs",
            desc  : "Textinputs styles and slider",
            navigate : 'Inputs',
        },
        {
            icon : table,
            title : "List Styles",
            desc  : "Link list styles",
            navigate : 'lists',
        },
        {
            icon : pagination,
            title : "Pagination",
            desc  : "move between pages",
            navigate : 'Paginations',
        },
        {
            icon : dollor,
            title : "Pricing Pack",
            desc  : "Subscription & pricing pack",
            navigate : 'Pricings',
        },
        {
            icon : diamond,
            title : "Snackbars",
            desc  : "Little notification boxes for bottom",
            navigate : 'Snackbars',
        },
        {
            icon : social,
            title : "Social",
            desc  : "Sharing and get visitors",
            navigate : 'Socials',
        },
        {
            icon : button,
            title : "Swipeable",
            desc  : "swipe to delete list",
            navigate : 'Swipeable',
        },
        {
            icon : button,
            title : "System Pages",
            desc  : "page for authentication",
            navigate : 'SystemPage',
        },
        {
            icon : column,
            title : "Tabs",
            desc  : "Compact content with tabs",
            navigate : 'Tabs',
        },
        {
            icon : button,
            title : "Table",
            desc  : "Add information you need",
            navigate : 'Tables',
        },
        {
            icon : toggle,
            title : "Toggle",
            desc  : "Toggle your content on or off",
            navigate : 'Toggles',
        },
    ]

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.themeBg}}>
                {/* <LinearGradient
                    style={{flex:1}}
                    colors={colors.bgGradient}
                > */}
                    <Header title={'Components'} backNavigate={'Home'} bgWhite leftIcon={'back'}/>

                    <ScrollView contentContainerStyle={{paddingBottom:60}}>
                        <View style={GlobalStyleSheet.container}>
                            <DropShadow
                                style={[{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 5,
                                        height: 5,
                                    },
                                    shadowOpacity: .15,
                                    shadowRadius: 5,
                                },Platform.OS === 'ios' && {
                                    backgroundColor:colors.cardBg,
                                    borderRadius:SIZES.radius,
                                }]}
                            >
                                <View style={{
                                    backgroundColor:colors.cardBg,
                                    borderRadius:SIZES.radius,
                                    paddingVertical:10,
                                    overflow:'hidden',
                                }}>
                                    {ComponentData.map((data,index) => {
                                        return(
                                            <Ripple
                                                onPress={() => props.navigation.navigate(data.navigate)}
                                                key={index}
                                                style={[{
                                                    flexDirection:'row',
                                                    alignItems:'center',
                                                    paddingHorizontal:15,
                                                    paddingVertical:20,
                                                    borderBottomWidth:1,
                                                    borderColor:colors.borderColor,
                                                },
                                                index === ComponentData.length - 1 && {
                                                    borderBottomWidth:0,
                                                }
                                                ]}
                                            >
                                                <View style={{
                                                    height:40,
                                                    width:40,
                                                    borderWidth:1,
                                                    borderColor:colors.borderColor,
                                                    borderRadius:SIZES.radius,
                                                    marginRight:12,
                                                    alignItems:'center',
                                                    justifyContent:'center',
                                                }}>
                                                    <SvgXml
                                                        xml={data.icon}
                                                    />
                                                </View>
                                                <View style={{flex:1,paddingRight:10}}>
                                                    <Text style={[FONTS.h6,{color:colors.title}]}>{data.title}</Text>
                                                    <Text numberOfLines={1} style={[FONTS.fontSm,{opacity:.6,color:colors.text,marginBottom:2,lineHeight:14}]}>{data.desc}</Text>
                                                </View>
                                                <FeatherIcon color={colors.text} name={'chevron-right'} size={22}/>
                                            </Ripple>
                                        )
                                    })}
                                </View>
                            </DropShadow>
                        </View>
                    </ScrollView>
                {/* </LinearGradient> */}
            </SafeAreaView>
        </>
    );
};


export default Components;