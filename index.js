const based_img_url = "./assets/images/";

Vue.createApp({
    data() {
        return {
            pic_url: based_img_url + "head3.jpg",
            personalInfo: {
                intro: `Hello, I'm Kuang Tsung, you can call me Ender instead.
                This nickname is given by myself when I was a child.
                Born and raised in Taipei, where is the Capital of Taiwan.
                Currently study the master degree of Computer Science at NCUE now.
                Also I'm a formmer president of NCUESA, who is the leader of the student association.
                Now my main dutys in SA are network management, web development, service maintenance, etc.
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
        groupedHobbies() {
            const groups = [];
            for (let i = 0; i < this.hobbies.items.length; i += 3) {
                groups.push(this.hobbies.items.slice(i, i + 3)); // 每次取得3個元素
            }
            return groups;
        }
    }
}).mount('#hobbies');

Vue.createApp({
    data() {
        return {
            projects: {
                items: [
                    { id: 1, title: 'Online Web Shop', time: '2023 Jun', description: 'School Projects'},
                    { id: 2, title: 'Course Selection Plugin', time: '2023 Dec', description: 'To improve the course selection web\'s inconvinient.' ,href: "https://chromewebstore.google.com/detail/gkmgkaijciljfanphpjhkgoeghjmmlae?utm_source=item-share-cb"},
                    { id: 3, title: 'Teacher\'s Personal Website', time: '2024 May', description: 'The teacher asked me to beauty his web (Well Paid :D)'},
                    { id: 4, title: 'SA-Lending System', time: '2024 Aug', description: 'Improve SA\'s items lending process, making it easier to use than before',href: "https://equipment.ncuesa.org.tw/"},
                    { id: 5, title: 'SA-Check in System', time: '2024 Sep', description: 'Check In and out !',href: "https://check.ncuesa.org.tw"}
                ]
            }
        }
    },
    computed: {
        groupedProjects() {
            const groups = [];
            for (let i = 0; i < this.projects.items.length; i += 3) {
                groups.push(this.projects.items.slice(i, i + 3)); // 每次取得3個元素
            }
            return groups;
        }
    }
}).mount('#projects');

Vue.createApp({
    data() {
        return {
            items: [
                { id: 1, dur: '2025 - Now', degree: 'Master', major: 'Computer Science and Information Engineering', study_at: 'National Changhua Univerisity of Education' },
                { id: 2, dur: '2020 - 2025', degree: 'Bachelor', major: 'Computer Science and Information Engineering', study_at: 'National Changhua Univerisity of Education' },
                { id: 3, dur: '2018 - 2020', degree: 'High School', major: 'Normal Subject', study_at: 'Hsin Tian Senior High School' },
            ]
        }
    }
}).mount('#education');

Vue.createApp({
    data(){
        return {
            items : [
                {id: 1 ,dur: "2018/07 - 2018/08",job: "Students leader",place: "Chen An Yi Summer Vacation Camp",description: "Just a summer camp leader"},
                {id: 2 ,dur: "2021/03 - 2021/10",job: "Assistant Teacher",place: "NeuroLink English School",description: "To assist children in completing their schoolwork, listen to their questions and needs, and patiently provide answers."},
                {id: 3 ,dur: "2023/07 - 2024/06",job: "Minister of Student Affairs",place: "NCUESA",description: "To assist fellow students on campus with handling matters related to rights and resolving issues."},
                {id: 4 ,dur: "2024/07 - 2025/06",job: "President",place: "NCUESA",description: "Leader of student assciation"},
                {id: 5 ,dur: "2024/02 - Now",job: "Computer Maintainer",place: "NCUE",description: "Help to solve somekind pc problems"},
                {id: 6 ,dur: "2024",job: "R2 - Camera Man",place: "SITCON",description: "Video taking"},
                {id: 7 ,dur: "2025",job: "R2 - Director",place: "SITCON",description: "Director of streaming"},
            ]
        }
    }

}).mount('#experience')