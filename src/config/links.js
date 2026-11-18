import {
    Bike,
    Instagram,
    MapPin,
    MessageCircle,
    ShoppingBag,
    TicketPercent,
    UtensilsCrossed,
} from "lucide-react";
import gofoodLogo from "../assets/gofood-logo.webp";
import { getGalleryUrl } from "./galleries";

// Ganti nilai kosong di bawah ini dengan URL resmi. URL yang kosong akan
// ditampilkan nonaktif agar pengunjung tidak diarahkan ke halaman yang salah.
export const linkConfig = {
    // gofoodUrl: "",
    grabfoodUrl: "https://app.grab.com/s/JaYWhe7F",
    menuUrl: getGalleryUrl("menu"),
    mapsUrl: "https://maps.app.goo.gl/gv7hm6QHBNhF2t8h9?g_st=ic",
    instagramUrl: "https://www.instagram.com/bangh3r.id?avpt=cDRveWF3Mmh5dW95",
    // Isi hanya dengan angka, tanpa +, spasi, atau angka 0 di depan.
    // Contoh: 6281234567890
    whatsappNumber: "6281281364699",
    promoUrl: getGalleryUrl("promo"),
};

const whatsappUrl = linkConfig.whatsappNumber
    ? `https://wa.me/${linkConfig.whatsappNumber}`
    : "";

export const linkItems = [
    // {
    //     label: "Pesan di GoFood",
    //     url: linkConfig.gofoodUrl,
    //     icon: Bike,
    //     logo: { src: gofoodLogo, className: "brand-mark--gofood" },
    //     variant: "gofood",
    // },
    {
        label: "Pesan di GrabFood",
        url: linkConfig.grabfoodUrl,
        icon: ShoppingBag,
        variant: "grabfood",
    },
    { label: "Menu Kami", url: linkConfig.menuUrl, icon: UtensilsCrossed },
    { label: "Lokasi Outlet Kami", url: linkConfig.mapsUrl, icon: MapPin },
    { label: "Instagram Kami", url: linkConfig.instagramUrl, icon: Instagram },
    { label: "Chat via WhatsApp", url: whatsappUrl, icon: MessageCircle },
    { label: "Promo Kami", url: linkConfig.promoUrl, icon: TicketPercent },
];
