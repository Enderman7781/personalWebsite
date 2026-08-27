const based_img_url = "./assets/images/";

function calculateAge(birthDateString) {
    const today = new Date();
    const birthDate = new Date(birthDateString);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

function getColumnClass(count) {
    if (count === 1) return 'col-md-12';
    if (count === 2) return 'col-md-6';
    if (count === 3) return 'col-md-4';

    return 'col-md-3';
}
function sortByEnd(list) {
    return [...list].sort((a, b) => {
        const ao = a.end ? 0 : 1
        const bo = b.end ? 0 : 1
        return (bo - ao) || b.start.localeCompare(a.start)
    })
}

function filterByType(list, type) {
    return sortByEnd(list.filter(e => e.type === type))
        .map(e => ({ ...e, dur: formatDur(e) }))
}

function formatDur(item) {
    return item.end ? item.start + ' - ' + item.end : item.start + ' - Present'
}

Vue.createApp({
    data() {
        return {
            personalInfo: {
                realNameCN: '蔣光宗',
                realNameEN: 'Leo Chiang',
                nickName: 'Ender 安得',
                birthDate: 'Jul/05/2003',
                selfie: based_img_url + "head3.jpg",
                socialMedia: {
                    facebook: { url: '', icon: 'facebook' },
                    instagram: { url: '', icon: 'instagram' },
                    linkedin: { url: 'www.linkedin.com/in/endermiku', icon: 'linkedin' },
                    github: { url: 'https://github.com/Enderman7781', icon: 'github' }
                },
                // The current situation, such as education, working, etc.
                currentJob:
                    'Taiwan Semiconductor Corp. (TSC) - Assistant Engineer'
                ,
                intro: `Hello, I'm Leo Chiang, aka Ender.
                This nickname comes from Minecraft - I gave it to myself as a kid.

                Born and raised in Taipei, the Capital of Taiwan.
                Currently working at TSC and pursuing a master's degree in Computer Science at NCUE.
                Also volunteering at open source events around Taiwan, including COSCUP and SITCON.

                Experienced in Network Management, Front and Backend Enginnering.
                `
            },
            experience: [
                {
                    type: 'work',
                    start: '2018.07',
                    end: "2018.08",
                    job: "Students leader",
                    place: "Chen An Yi Summer Vacation Camp",
                    //description: "Just a summer camp leader"
                },
                {
                    type: 'work',
                    start: '2021.03',
                    end: "2021.10",
                    job: "Assistant Teacher",
                    place: "NeuroLink English School",
                    //description: "To assist children in completing their schoolwork, listen to their questions and needs, and patiently provide answers."
                },
                {
                    type: 'work',
                    logo: based_img_url + 'ncuesa.png',
                    start: '2023.07',
                    end: "2024.06",
                    job: "Minister of Student Affairs",
                    place: "NCUESA",
                    description: "To assist fellow students on campus with handling matters related to rights and resolving issues."
                },
                {
                    type: 'work',
                    logo: based_img_url + 'ncuesa.png',
                    start: '2024/07',
                    end: "2025/06",
                    job: "President",
                    place: "NCUESA",
                    description: "Leader of student assciation"
                },
                {
                    type: 'work',
                    logo: based_img_url + 'ncue.jpg',
                    start: '2024.02',
                    end: "2026.06",
                    job: "Computer Maintainer",
                    place: "NCUE",
                    description: "IT maintainance"
                },
                {
                    type: 'work',
                    logo: based_img_url + 'ncuesa.png',
                    start: '2024.02',
                    end: "",
                    job: "General Affiars",
                    place: "NCUESA",
                    description: "Network Management, Website Devlopments and Maintainance, IT stuffs, etc."
                },
                {
                    type: 'work',
                    logo: based_img_url + 'tsc.jpg',
                    start: '2026.08',
                    end: "",
                    job: "Assistant Engineer",
                    place: "Taiwan Semiconductors Corp. (TSC)",
                    description: "Network Management, Website Devlopments and Maintainance, IT stuffs, etc."
                },

                // Community Exps
                {
                    type: 'community',
                    logo: based_img_url + 'sitcon.png',
                    start: '2023.11',
                    end: "2024.03",
                    job: "Production Team - R2 Camera Man",
                    place: "SITCON",
                    //description: "Video taking"
                },
                {
                    type: 'community',
                    logo: based_img_url + 'sitcon.png',
                    start: '2024.11',
                    end: "2025.03",
                    job: "Production Team - R2 Director",
                    place: "SITCON",
                    //description: "Director of streaming"
                },
                {
                    type: 'community',
                    logo: based_img_url + 'sitcon.png',
                    start: '2025.11',
                    end: "2026.03",
                    job: "Production Team - R0 Assistant Director",
                    place: "SITCON",
                    //description: "Director of streaming"
                },
                {
                    type: 'community',
                    logo: based_img_url + 'coscup.png',
                    start: '2026.03',
                    end: "2026.08",
                    job: "Production Team - Deputy Group Leader",
                    place: "COSCUP",
                    //description: "Director of streaming"
                },
                {
                    type: 'community',
                    logo: based_img_url + 'coscup.png',
                    start: '2025.03',
                    end: "2025.08",
                    job: "Production Team - Member",
                    place: "COSCUP",
                    //description: "Director of streaming"
                },
            ],
            education: [
                {
                    dur: '2025 - Present',
                    degree: 'Master',
                    major: 'Computer Science and Information Engineering',
                    study_at: 'National Changhua Univerisity of Education'
                },
                {
                    dur: '2020 - 2025',
                    degree: 'Bachelor',
                    major: 'Computer Science and Information Engineering',
                    study_at: 'National Changhua Univerisity of Education'
                },
                {
                    dur: '2018 - 2020',
                    degree: 'High School',
                    major: 'Normal Subject',
                    study_at: 'Hsin Tian Senior High School'
                },
            ],
            skills: [

            ],
            language: [
                {
                    language: 'English',
                    level: 'Fluent',
                    details: [`
                        TOEIC - 850 (Blue)
                    `]
                },
                {
                    language: 'Chinese',
                    level: 'Native',
                    details: [
                        'Mandarin',
                        'Taiwanese'
                    ]
                },
                {
                    language: 'Japanese',
                    level: 'Basic',
                    details: [
                        'JLPT N5 - Pass'
                    ]
                },
                {
                    language: 'German',
                    level: 'Basic'
                }
            ],
            projects: [
                {
                    title: 'Online Web Shop',
                    time: '2023 Jun',
                    description: 'School Projects'
                },
                {
                    title: 'Course Selection Plugin',
                    time: '2023 Dec',
                    description: 'To improve the course selection web\'s inconvinient.',
                    href: "https://chromewebstore.google.com/detail/gkmgkaijciljfanphpjhkgoeghjmmlae?utm_source=item-share-cb"
                },
                {
                    title: 'Teacher\'s Personal Website',
                    time: '2024 May',
                    description: 'The teacher asked me to beauty his web (Well Paid :D)'
                },
                {
                    title: 'SA-Lending System',
                    time: '2024 Aug',
                    description: 'Improve SA\'s items lending process, making it easier to use than before',
                    href: "https://equipment.ncuesa.org.tw/"
                },
                {
                    title: 'SA-Check in System',
                    time: '2024 Sep',
                    description: 'Check In and out !',
                    href: "https://check.ncuesa.org.tw"
                }
            ],
            hobbies: [
                {
                    img_url: based_img_url + "train.jpg",
                    topic: "Photographing",
                    description: "Amateur photographer focusing on train tracking."
                },
                {
                    img_url: based_img_url + "smalltrain.jpg",
                    topic: "Train spotting",
                    description: "I like everything on the rails, except Ruby."
                },
                {
                    img_url: based_img_url + "sunmoonlake.jpg",
                    topic: "Traveling",
                    description: "Travel everywhere. Particularly fond of Scandinavia."
                },
                {
                    img_url: based_img_url + "bike.jpg",
                    topic: "Biking",
                    description: "Enjoying the sound of the engine, riding on the broaden road, and exploring the world"
                },
                {
                    img_url: based_img_url + "Youtube_logo.png",
                    topic: "Video Making",
                    description: "Former Youtuber, and retired now"
                },

            ],




        }
    },
    computed: {
        socialLinks() {
            return Object.entries(this.personalInfo.socialMedia)
                .filter(([, item]) => item.url)
                .map(([key, item]) => ({
                    key,
                    icon: item.icon,
                    url: /^https?:\/\//.test(item.url) ? item.url : `https://${item.url}`
                }))
        },

        // Experience Block Beauty
        workExperience() { 
            return filterByType(this.experience, 'work') 
        },
        communityExperience() { 
            return filterByType(this.experience, 'community') 
        },
        communityColumnClass(){
            return getColumnClass(this.communityExperience.length)
        },

        aged() {
            return calculateAge('2003-07-05');
        },
        hobbiesColumnClass() {
            return getColumnClass(this.hobbies.length);
        },
        projectsColumnClass() {
            return getColumnClass(this.projects.length);
        },
        languageColumnClass() {
            return getColumnClass(this.language.length);
        },

    },
    mounted() {
        this.$nextTick(() => {
            if (typeof scrollRevelation === 'function') {
                scrollRevelation('.card');
            }
        });
    }


}).mount('#app');


/*
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
        aged() {
            return calculateAge('2003-07-05');
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
            projects: [
                {
                    title: 'Online Web Shop',
                    time: '2023 Jun',
                    description: 'School Projects'
                },
                {
                    title: 'Course Selection Plugin',
                    time: '2023 Dec',
                    description: 'To improve the course selection web\'s inconvinient.',
                    href: "https://chromewebstore.google.com/detail/gkmgkaijciljfanphpjhkgoeghjmmlae?utm_source=item-share-cb"
                },
                {
                    title: 'Teacher\'s Personal Website',
                    time: '2024 May',
                    description: 'The teacher asked me to beauty his web (Well Paid :D)'
                },
                {
                    title: 'SA-Lending System',
                    time: '2024 Aug',
                    description: 'Improve SA\'s items lending process, making it easier to use than before',
                    href: "https://equipment.ncuesa.org.tw/"
                },
                {
                    title: 'SA-Check in System',
                    time: '2024 Sep',
                    description: 'Check In and out !',
                    href: "https://check.ncuesa.org.tw"
                }
            ]
        }
    },
    computed: {
        projectsColumnClass() {
            return getColumnClass(this.projects.length);
        }
    }
}).mount('#projects');

Vue.createApp({
    data() {
        return {
            items: [
                {
                    dur: '2025 - Present',
                    degree: 'Master',
                    major: 'Computer Science and Information Engineering',
                    study_at: 'National Changhua Univerisity of Education'
                },
                {
                    dur: '2020 - 2025',
                    degree: 'Bachelor',
                    major: 'Computer Science and Information Engineering',
                    study_at: 'National Changhua Univerisity of Education'
                },
                {
                    dur: '2018 - 2020',
                    degree: 'High School',
                    major: 'Normal Subject',
                    study_at: 'Hsin Tian Senior High School'
                },
            ]
        }
    }
}).mount('#education');

Vue.createApp({
    data() {
        return {
            items: [
                {
                    dur: "2018.07 - 2018.08",
                    job: "Students leader",
                    place: "Chen An Yi Summer Vacation Camp",
                    description: "Just a summer camp leader"
                },
                {
                    dur: "2021.03 - 2021.10",
                    job: "Assistant Teacher",
                    place: "NeuroLink English School",
                    description: "To assist children in completing their schoolwork, listen to their questions and needs, and patiently provide answers."
                },
                {
                    dur: "2023.07 - 2024.06",
                    job: "Minister of Student Affairs",
                    place: "NCUESA",
                    description: "To assist fellow students on campus with handling matters related to rights and resolving issues."
                },
                {
                    dur: "2024/07 - 2025/06",
                    job: "President",
                    place: "NCUESA",
                    description: "Leader of student assciation"
                },
                {
                    dur: "2024/02 - 2026",
                    job: "Computer Maintainer",
                    place: "NCUE",
                    description: "Help to solve somekind pc problems"
                },
                {
                    dur: "2024",
                    job: "R2 - Camera Man",
                    place: "SITCON",
                    description: "Video taking"
                },
                {
                    dur: "2025",
                    job: "R2 - Director",
                    place: "SITCON",
                    description: "Director of streaming"
                },
            ]
        }
    }

}).mount('#experience')

Vue.createApp({
    data() {
        return {
            items: [
                {
                    language: 'English',
                    level: 'Fluent',
                    details: [`
                        TOEIC - 850 (Blue)
                    `]
                },
                {
                    language: 'Chinese',
                    level: 'Native',
                    details: [
                        'Mandarin',
                        'Taiwanese'
                    ]
                },
                {
                    language: 'Japanese',
                    level: 'Basic',
                    details: [
                        'JLPT N5 - Pass'
                    ]
                },
                {
                    language: 'German',
                    level: 'Basic'
                }
            ]
        }
    },
    computed: {

    }
}).mount('#language')
*/