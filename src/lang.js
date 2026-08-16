export const translations = {
    EN: {
        nav: {
            about: "About",
            career: "Career",
            projects: "Projects",
            languageEn: "EN",
            languageJp: "JP",
        },
        hero: {
            greeting: "Hi, I'm Phone Pyae Naing.",
            subtitle: "I enjoy building various web and mobile apps.",
            cta: "View Projects",
        },
        about: {
            heading: "About",
            bio: "I'm a developer who enjoys building things and figuring out how they work. Most of my projects are focused on mobile and web development, but I'm always curious about new technologies and different ways of solving problems. Outside of coding, I enjoy exploring new ideas and working on projects that let me learn something new.",
            skillsHeading: "Languages & Technologies",
        },
        career: {
            heading: "Career",
            experienceLabel: "Experience",
            educationLabel: "Education",
            experience: [
                { period: "2025 — Present", role: "Intern Developer", organization: "Hatsukaze" },
            ],
            education: [
                { period: "2022-2025", role: "Student", organization: "University of Sunderland" },
            ],
        },
        projects: {
            heading: "Projects",
            inDevelopment: "In development",
            items: [
                {
                    title: "MovieMate",
                    description: "Mobile app for movie lovers to keep track of upcoming movies and their ratings, built with Kotlin XML, the TMDB REST API, and Firestore.",
                    tags: ["Kotlin", "TMDB API", "Firestore"],
                    link: "https://github.com/MurasakiNaing/MovieMate",
                },
                {
                    title: "Olympic Streaming",
                    description: "A website for uploading and streaming video, with comments, favorites, and more. Built with Spring MVC and Thymeleaf.",
                    tags: ["Spring MVC", "Thymeleaf"],
                    link: "https://github.com/MurasakiNaing/olympic-streaming",
                },
                {
                    title: "Balance Management",
                    description: "A web app for tracking expenses and income, built with Spring MVC, JSP, and JSTL.",
                    tags: ["Spring MVC", "JSP", "JSTL"],
                    link: "https://github.com/MurasakiNaing/balance-management",
                },
                {
                    title: "Breadbox",
                    description: "An e-commerce site built with Spring MVC and JSP as the view layer.",
                    tags: ["Spring MVC", "JSP"],
                    link: "https://github.com/MurasakiNaing/BreadBox",
                },
                {
                    title: "Future Residency",
                    description: "A web design for a real-estate business.",
                    tags: ["Web Design"],
                    link: "https://github.com/MurasakiNaing/Future-Residency",
                },
                {
                    title: "Drawing App",
                    description: "A drawing app built with Kotlin XML.",
                    tags: ["Kotlin"],
                    link: "https://github.com/MurasakiNaing/drawing-app",
                },
                {
                    title: "Tracker",
                    description: "Mobile app for tracking expenses and income, built with Kotlin and Firestore using a multi-module architecture.",
                    tags: ["Kotlin", "Firestore"],
                    link: "https://github.com/MurasakiNaing/tracker",
                    inDevelopment: true,
                },
                {
                    title: "Academix",
                    description: "An LMS for schools enabling easy resource sharing, grading, and student information management, with Spring Boot on the backend and Angular on the frontend.",
                    tags: ["Spring Boot", "Angular"],
                    link: "https://github.com/MurasakiNaing/academix-backend",
                    inDevelopment: true,
                },
            ],
        },
    },
    JP: {
        nav: {
            about: "自己紹介",
            career: "経歴",
            projects: "プロジェクト",
            languageEn: "英語",
            languageJp: "日本語",
        },
        hero: {
            greeting: "こんにちは、パォンピェナインです。",
            subtitle: "様々なWeb・モバイルアプリの開発を楽しんでいます。",
            cta: "プロジェクトを見る",
        },
        about: {
            heading: "自己紹介",
            bio: "ものづくりと、その仕組みを理解することが好きな開発者です。主にモバイルとWeb開発に取り組んでいますが、新しい技術や問題解決の方法にも常に興味を持っています。コーディング以外の時間には、新しいアイデアを探求したり、学びのあるプロジェクトに取り組んだりしています。",
            skillsHeading: "言語・技術",
        },
        career: {
            heading: "経歴",
            experienceLabel: "職歴",
            educationLabel: "学歴",
            experience: [
                { period: "2025 — 現在", role: "インターン開発者", organization: "はつかぜ株式会社" },
            ],
            education: [
                { period: "2022-2025", role: "学生", organization: "サンダーランド大学" },
            ],
        },
        projects: {
            heading: "プロジェクト",
            inDevelopment: "開発中",
            items: [
                {
                    title: "MovieMate",
                    description: "公開予定の映画とその評価を管理できる映画ファン向けアプリ。Kotlin XML、TMDB REST API、Firestoreで開発。",
                    tags: ["Kotlin", "TMDB API", "Firestore"],
                    link: "https://github.com/MurasakiNaing/MovieMate",
                },
                {
                    title: "Olympic Streaming",
                    description: "動画のアップロードと配信ができるWebサイト。コメントやお気に入り機能付き。Spring MVCとThymeleafで開発。",
                    tags: ["Spring MVC", "Thymeleaf"],
                    link: "https://github.com/MurasakiNaing/olympic-streaming",
                },
                {
                    title: "Balance Management",
                    description: "収支を管理するWebアプリ。Spring MVC、JSP、JSTLで開発。",
                    tags: ["Spring MVC", "JSP", "JSTL"],
                    link: "https://github.com/MurasakiNaing/balance-management",
                },
                {
                    title: "Breadbox",
                    description: "Spring MVCとJSPをビューに用いたECサイト。",
                    tags: ["Spring MVC", "JSP"],
                    link: "https://github.com/MurasakiNaing/BreadBox",
                },
                {
                    title: "Future Residency",
                    description: "不動産事業のためのWebデザイン。",
                    tags: ["Web Design"],
                    link: "https://github.com/MurasakiNaing/Future-Residency",
                },
                {
                    title: "Drawing App",
                    description: "Kotlin XMLで開発したお絵描きアプリ。",
                    tags: ["Kotlin"],
                    link: "https://github.com/MurasakiNaing/drawing-app",
                },
                {
                    title: "Tracker",
                    description: "KotlinとFirestoreを使い、マルチモジュール構成で開発中の収支管理アプリ。",
                    tags: ["Kotlin", "Firestore"],
                    link: "https://github.com/MurasakiNaing/tracker",
                    inDevelopment: true,
                },
                {
                    title: "Academix",
                    description: "学校向けのLMS。リソース共有、採点、生徒情報管理を簡単に行える。バックエンドはSpring Boot、フロントエンドはAngularで開発中。",
                    tags: ["Spring Boot", "Angular"],
                    link: "https://github.com/MurasakiNaing/academix-backend",
                    inDevelopment: true,
                },
            ],
        },
    },
}