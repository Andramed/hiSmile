

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

const slectDistrict = () => {

}

Alpine.data('districts', ()=> {
    districts:districts
})

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


