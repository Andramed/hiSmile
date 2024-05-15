

import Alpine from "alpinejs";
import {comments, questionsAnswer,districts} from "./data"; 

window.Alpine = Alpine;
    
const carousel = () => {
    return {
        selected: 1,
        comments: comments,
        next() {
            if (this.selected < this.comments.length - 1) {
                this.selected++;
                console.log(this.selected);
            }
        },
        prev() {
            if (this.selected > 0) {
                this.selected--;
                console.log(this.selected);
            }
        }
    };
};

const languageSelector = () => {
    return {
        dropdownOpen: false,
        selectedLanguage: 'Română',
        selectedFlag: './image/moldovaFlagicon.svg',

        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        closeDropdown() {
            this.dropdownOpen = false;
        },
        setLanguage(language) {
            this.selectedLanguage = language;
            // Setăm calea către imaginea steagului corespunzător limbii selectate
            this.selectedFlag = language === 'Română' ? './image/moldovaFlagicon.svg' : './image/russianFlag.svg';
            this.closeDropdown()
        }
    };
}

const showModal = () => {
    return {
        isOpen: true,
        toggle() {
            this.isOpen = !this.isOpen;
            console.log('toogle used');
        }
    };
};

const checkedBox = () => {
    return {
        isCheckedStandart: false,
        isCheckedExpress: false,
        isCheckedGift: false,

        toggle(type) {
            switch (type) {
                case 'standard':
                    this.isCheckedStandart = true;
                    this.isCheckedExpress = false;
                    this.isCheckedGift = false;
                    console.log('Standard delivery selected');
                    break;
                case 'express':
                    this.isCheckedStandart = false;
                    this.isCheckedExpress = true;
                    this.isCheckedGift = false;
                    console.log('Express delivery selected');
                    break;
                case 'gift':
                    this.isCheckedStandart = false;
                    this.isCheckedExpress = false;
                    this.isCheckedGift = true;
                    console.log('Gift delivery selected');
                    break;
            }
        }
    };
}

const districtData = () => {
    return {
        selectedDistricts: null,
        selectedVillage:null,
        districts,

        selectDistricts(value){
            this.selectedDistricts = value;
            console.log(districts[this.selectedDistricts]);
        },
        
    }
}

const payMethod = () => {
    return {
        cashOrCard:false,
        transerBancar:false,
        onlinePayment:false,
        terminal:false,

        toggle(type) {
            switch (type) {
                case 'cashOrCard':
                    this.cashOrCard = true;
                    this.transerBancar =false;
                    this.onlinePayment=false;
                    this.terminal = false
                    break;
                case 'transerBancar':
                    this.cashOrCard = false;
                    this.transerBancar =true;
                    this.onlinePayment=false;
                    this.terminal = false
                    break;
                case 'onlinePayment':
                    this.cashOrCard = false;
                    this.transerBancar =false;
                    this.onlinePayment=true;
                    this.terminal = false
                    break;
                case 'terminal':
                    this.cashOrCard = false;
                    this.transerBancar =false;
                    this.onlinePayment=false;
                    this.terminal = true
                    break;
            }
        }
    }
}

Alpine.data('payMethod', payMethod)
Alpine.data('districts', districtData)
Alpine.data('checkedBox', checkedBox)
Alpine.data('showModal', showModal);
Alpine.data('languageSelector', languageSelector);
Alpine.data('userData', () => ({
comments: comments,
}));
Alpine.data('carousel', () => ({
carousel:carousel()
}))
Alpine.data('faqs', () => ({
faqs:questionsAnswer
}))

Alpine.start();


