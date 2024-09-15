const based_img_url = "./assets/images/";

Vue.createApp({
    data() {
        return {
            pic_url: based_img_url + "head2.jpg",
            personalInfo: {
                intro: `Hello, I'm Kuang Tsung, but you can call me Ender instead.
                This is a nickname I gave by myself when I was a child.
                I was born and raised in Taipei, which is the Capital of Taiwan.
                I'm currently studying at NCUE now, majoring in Computer Science, and will graduate in next year.
                I'm the president of the SA team this year and play a central role in it.
                My main responsibilities in SA include web development and planning the main event of the year.
                `
            }
        }
    },
    computed: {
        aged: function () {
            const today = new Date(); // 取得今天的日期
            const birthDate = new Date('2003-07-05'); // 將生日轉換為日期物件
            let age = today.getFullYear() - birthDate.getFullYear(); // 先計算年份差
            const monthDifference = today.getMonth() - birthDate.getMonth(); // 計算月份差

            // 如果當前月份還沒過生日月份，或者今天在生日之前，年齡要減 1
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            return age;
        }
    }
}).mount('#personalInfo');

Vue.createApp({
    data() {
        return {
            hobbies: {
                items: [
                    { id: 1, img_url: based_img_url + "train.jpg", topic: "Photographing", description: "Amateur photographer focusing on train tracking." },
                    { id: 2, img_url: based_img_url + "smalltrain.jpg", topic: "Train spotting", description: "I like everything on the rails, except Ruby." },
                    { id: 3, img_url: based_img_url + "sunmoonlake.jpg", topic: "Traveling", description: "Travel everywhere. Particularly fond of Scandinavia." },
                    { id: 4, img_url: based_img_url + "bike.jpg", topic: "Biking", description: "Enjoying the sound of the engine, riding on the broaden road, and exploring the world" },
                    { id: 5, img_url: based_img_url + "Youtube_logo.png", topic: "Video Making", description: "Former Youtuber, and retired now" },

                ]
            }
        }
    },
    computed: {
        groupedItems() {
            const groups = [];
            for (let i = 0; i < this.hobbies.items.length; i += 3) {
                groups.push(this.hobbies.items.slice(i, i + 3)); // 每次取得3個元素
            }
            return groups;
        }
    }
}).mount('#hobbies');
