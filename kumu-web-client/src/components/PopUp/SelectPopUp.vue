<template>
    <div class="select-language select-language-no-lang">
        <div class="selected-language">
            <div class="title-show">{{ title }}</div>
            <div class="list-wrapper">
                <div class="please-choose">
                    <!-- <small @click="clickBack" class="label pull-left bg-yellow btn-back"> <i class="glyphicon glyphicon-chevron-left"></i>  </small> -->
                    <!-- {{ title }} -->
                </div>
                <div class="item-row" @scroll="handleScroll">
                    <SelectList
                        :itemList="[
                            { id: 1, name: 'hotel1' },
                            { id: 2, name: 'hotel2' },
                            { id: 3, name: 'hotel3' },
                            { id: 4, name: 'alonghotelnamwithoutspace' },
                            { id: 5, name: 'alonglonghotelnamwithoutspacealonghotelnamwithoutspace' },
                            { id: 6, name: 'hotel1' },
                            { id: 7, name: 'hotel7' },
                            { id: 8, name: 'bb55' },
                            { id: 9, name: 'hotel9' },
                            { id: 10, name: 'hotel10' },
                            { id: 11, name: 'hotel12test' },
                            { id: 12, name: 'hotel12' }
                        ]"
                        :textShowField="'name'"
                        :selected="selected"
                    />
                    <div v-if="selectList.length === 0" class="item">
                        <div class="content-item">{{ trans('No data available', lang) }}</div>
                    </div>
                </div>
                <div class="bottom-item" @click="scrollDown()">
                    <img alt="arrow" src="/static/img/down-arrow-32.png" v-if="isShowDownArrow" />
                </div>
            </div>
            <button v-if="showConfirm" @click="clickConfirm" type="button" class="btn btn-confirm">
                {{ trans('Confirm', lang) }}
            </button>
            <div @click="clickBack" class="triangle"></div>
        </div>
    </div>
</template>

<script>
import SelectList from '../List/SelectList.vue';

export default {
    name: 'SelectList',
    props: ['selectList', 'selected', 'showSelectList', 'title', 'lang', 'showConfirm'],
    data() {
        return {
            countClick: 0,
            isShowDownArrow: true,
            numberItemInList: 5
        };
    },
    components: {
        SelectList
    },
    mounted() {
        this.isShowDownArrow = this.selectList.length > this.numberItemInList;
    },
    watch: {
        countClick: countClick => {
            if (countClick >= this.selectList.length - this.numberItemInList) {
                this.isShowDownArrow = false;
            } else {
                this.isShowDownArrow = true;
            }
        }
    },
    methods: {
        itemClick(item) {
            this.selected = item;
            console.log('click this.selected: ', this.selected);
            this.$emit('clickItem', item);
        },
        scrollDown() {
            const heightContentItem = document.querySelector('.item').height();
            this.countClick += this.numberItemInList;
            const lengSelectList = this.selectList.length;
            if (this.countClick < 0) {
                this.countClick = 0;
            } else if (this.countClick >= lengSelectList - this.numberItemInList) {
                this.countClick = lengSelectList - this.numberItemInList;
            }
            document.querySelector('.item-row').animate(
                {
                    scrollTop: this.countClick * (heightContentItem + 1) + 1
                },
                100
            );
        },
        handleScroll() {
            const heightContentItem = document.querySelector('.item').height() + 1;
            this.countClick = Math.floor(document.querySelector('.item-row').scrollTop() / heightContentItem);
        },
        clickBack() {
            this.$emit('clickBack');
        },
        clickConfirm() {
            this.$emit('clickConfirm');
        }
    }
};
</script>

<style scoped>
.triangle {
    position: absolute;
    bottom: 10px;
    left: 10px;
    width: 0;
    height: 0;
    transform: rotate(180deg);
    border-top: 8px solid transparent;
    border-left: 15px solid #d8d8d8;
    border-bottom: 8px solid transparent;
}
.btn-confirm {
    border-radius: 10px;
    background-color: #8bb9b9;
    border: solid 1px #979797;
    margin-top: 25px;
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
    min-width: 160px;
}
.title-show {
    margin-bottom: 20px;
    font-size: 24px;
    color: #9b9b9b;
    font-weight: 600;
}
.list-wrapper {
    margin: 0 auto;
    max-width: 160px;
    border-radius: 40px;
    height: auto;
    background: #fff;
}
.item-row {
    max-height: 240px;
    max-width: 160px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-align: left;
    font-size: 20px;
}
.please-choose,
.bottom-item {
    background-color: #8bb9b9;
    height: 40px;
}
.please-choose {
    border-radius: 20px 20px 0px 0px;
    font-weight: bold;
    font-size: 20px;
    height: 40px;
    line-height: 60px;
}
.bottom-item {
    border-radius: 0px 0px 20px 20px;
    cursor: pointer;
    height: 40px;
}
.bottom-item img {
    max-width: 15px;
    height: 73%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding-top: 10px;
}
.item-row .item {
    text-align: center;
    cursor: pointer;
    border-top: 1px solid #979797;
}
.item .content-item {
    background-color: #f2f2f2;
    padding-top: 6px;
    padding-bottom: 7px;
    min-width: 160px;
    color: #9b9b9b;
    font-size: 24px;
    font-weight: 600;
}
.item-active {
    background-color: #459090;
}
/* .hover-item{
        background-color: #a9e8e8;
        color: #ffffff;
    } */
.selected-item {
    background-color: #459090 !important;
    color: #ffffff !important;
}
.item-row .item hr {
    border-top: 1px solid #c1b7b7;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
}
.no-border-top {
    border-top: none !important;
}
.selected-language {
    background: #fff;
    position: relative;
    border-radius: 10px;
    border: solid 1px #979797;
    padding: 20px 40px 40px 40px;
}
.bottom-item-no-lang {
    height: 60px;
}
.select-language-no-lang {
    /* margin-left: auto;
    margin-right: auto;
    width: fit-content; */
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn-back {
    margin-top: 18px;
}
</style>
