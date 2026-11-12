import work1 from "../assets/loveflutter.webp"
import work1b from "../assets/IMG_5354.jpg"
import work1c from "../assets/IMG_5355.jpg"
import work1d from "../assets/IMG_5367.jpg"
import work2 from "../assets/IMG_5368.jpg"
import work2b from "../assets/IMG_5364.jpg"
import work2c from "../assets/IMG_5363.jpg"
import work3 from "../assets/thonght.webp"
import work3b from "../assets/IMG_5374.jpg"
import work3c from "../assets/IMG_5371.jpg"
import work4 from "../assets/kizunaai.webp"
import work4b from "../assets/IMG_5356.jpg"
import work5 from "../assets/IMG_5362.jpg"
import work5b from "../assets/IMG_5365.jpg"
import work5c from "../assets/IMG_5361.jpg"
import work6 from "../assets/univa.webp"
import work6b from "../assets/IMG_5369.jpg"
import work6c from "../assets/IMG_5359.jpg"
import work7 from "../assets/yojinoda.webp"
import work7b from "../assets/yojinodab.webp"
import work7c from "../assets/yojinodac.webp"
import work8 from "../assets/kroi.webp"
import work8b from "../assets/kroib.webp"
import work8c from "../assets/kroic.webp"
import work9 from "../assets/pastasta.webp"
import work9b from "../assets/pastastab.webp"
import work9c from "../assets/pastastac.webp"

export type WorkCategory = "Live" | "MV" | "CM" | "Event"


export const works = [
    { id: 1, detail: "プロジェクトアシスタントとして、プロデューサーとディレクターのもとで、制作スケジュールや資料の管理、スタッフ間の連絡調整を担当しました。ライブカメラ映像に3DCGをリアルタイムで重ねる演出で、本番はやり直しがきかず、リハーサルの時間も限られていました。そこでリハーサルの段取り表を作成し、撮影・CG・テクニカルの各部門が確認すべきポイントを事前に共有しました。10名を超える多部門のチームで本番を実施し、公演映像はYouTubeで公開されています。", category: "Live", tools: ["Figma", "After Effects", "Blender", "Google Workspace", "Slack", "Notion"], title: "パソコン音楽クラブ『Love Flutter』Release Party at Spotify O-EAST", images: [work1, work1b, work1c,work1d], description: "2024.08", role: "リアルタイムで3DCGを重ねる演出は本番一発勝負のため、リハーサルの段取りと当日のタイムテーブルを細かく組み、10名超のチームが迷わず動けるよう進行をサポートしました。", videoUrl: "https://youtu.be/nqmQlDu7gM8?si=mchnVoFXx9Lh-5P1",credits: [
"Director: tsuchifumazu (watakemi+Kairi Sato)",
"Live Camera Visual Designer: Shun Nagasawa",
"Live Camera System Engineer: Joe Ohara",
"3DCG Artist: watakemi (tsuchifumazu), Haruhi Oshima",
"Motion Designer: Kairi Sato (tsuchifumazu)",
"DOP: Taichi Nagaoka (85mm inc.)",
"Technical Director / Video engineer: Ryoutarou Ishihara (85mm inc.)",
"Camera Crew: Torataro Sugisaki, tsumiki.(PoTEC inc), Aya",
"Producer: Takemi Inagaki",
"Director / Editor: Taichi Nagaoka (85mm inc.), Kairi Sato (tsuchifumazu), Hina Kamura",
"Project Assistant: Narumi Ishizu"
    ]},
    { id: 2, detail: "プロジェクトマネージャーとして、CG・ライブカメラを使ったフェスのライブ映像演出の進行管理と、アーティスト側との連絡調整を担当しました。同じ月に2つのフェス出演が続き、会場ごとにステージの仕様や搬入条件が異なる案件でした。会場ごとの違いを早い段階で一覧に整理し、アーティスト側との確認窓口を一本化することで、制作チームが作業に集中できる体制を整えました。約10名のチームで、2つのフェスの本番を続けて実施しました。", category: "Live", tools: ["After Effects", "Blender", "Google Workspace", "Slack", "Notion"], title: "Nulbarich SUMMER SONIC 2024 / SWEET LOVE SHOWER 2024", images: [work2, work2b, work2c], description: "2024.08", role: "2つのフェスが同じ月に続くため、会場ごとの仕様の違いを早めに整理しました。アーティスト側との確認窓口をひとつにまとめ、約10名のチームが制作に集中できる環境を整えました。", videoUrl: null,     credits: [
  "Creative & Art Director: Masaki Watanabe (maxilla)",
"Live Cinematographer: Shuho Teramura",
"CG Artist: Ai Ikeda, Kana Nio",
"CG Modeler: Shion Hirakawa",
"Live Camera Visual Designer: Hajime Kutsuwada",
"Live Operation: Jura Nishizato",
"Live Operation Support: Shun Nagasawa",
"Live Producer: Imoto Sho",
"Producer: Takemi Inagaki",
"Project Manager: Narumi Ishizu"
    ] },
    { id: 3, detail: "プロジェクトマネージャーとして、撮影準備の段取り、スタッフのスケジュール管理、撮影当日の進行、納品までの管理を担当しました。少人数のチームで撮影準備から当日の進行までを担うため、一人に負担が偏りやすい状況でした。撮影前に香盤表と役割分担を細かく共有し、当日の動きを全員が把握できるようにしました。撮影から納品までを完了し、MVはYouTubeで公開されています。", category: "MV", tools: ["Figma", "Photoshop", "After Effects", "Google Workspace", "Slack", "Notion"], title: "thonght nowhere Music Video", images: [work3,work3b,work3c], description: "2024.10", role: "少人数のチームだからこそ、撮影準備から当日の進行まで負担が偏らないよう、スケジュールと役割分担を事前に細かく共有しました。", videoUrl: "https://youtu.be/1y6JBpU_RgE?si=JNZLB69Sc9BDLPs5",    credits: [
"Director: Yunosuke Nakayama",
"DOP: Ryoutarou Ishihara (85mm inc.)",
"KEY Grip: Taichi Nagaoka (85mm inc.)",
"1st AC: Koyo Sugiyama (85mm inc.)",
"Hair & Makeup: Makoto Asano",
"Producer: Takemi Inagaki",
"Project Manager: Narumi Ishizu"
    ] },
    { id: 4, detail: "プロジェクトマネージャーとして、3DCGビジュアライザー制作のスケジュール管理と、映像チームと楽曲チームの間の連絡調整、確認・修正フローの管理を担当しました。2つのチームが別々に動いており、素材の受け渡しや修正指示に行き違いが起きやすい体制でした。両チームの間に立って、素材の受け渡しのタイミングと確認フローを最初に決め、リリース日から逆算したスケジュールで進行しました。リリースに合わせて納品し、YouTubeで公開されています。", category: "MV", tools: ["Figma", "Photoshop", "Illustrator", "After Effects", "Blender", "Google Workspace", "Slack", "Notion"], title: "KizunaAI「まざる」Official Visualizer", images: [work4, work4b], description: "2025.03", role: "映像チームと楽曲チームの間に立ち、素材の受け渡しのタイミングと確認の流れを決めて、修正の行き違いが起きないよう進めました。リリース日から逆算し、納品まで遅れなく進行しました。", videoUrl: "https://youtu.be/ekTCO2gE5Kw?si=tSqiMmKAtzXKLDV7",    credits: [
"Director: watakemi (tsuchifumazu / CANTEEN)",
"CG Artist: watakemi (tsuchifumazu / CANTEEN)",
"Motion Designer: Kairi Sato (tsuchifumazu)",
"Producer: Takemi Inagaki (CANTEEN)",
"Vocal: KizunaAI",
"Voice Model: Nozomi Kasuga",
"Music: Narita Haneda",
"Lyrics: ZE, KizunaAI",
"Arrangement: phritz",
"Mixing & Mastering: phritz",
"Produced by: Kizuna AI Inc.",
"Project Manager: Narumi Ishizu"
    ] },
    { id: 5, detail: "プロジェクトマネージャーとして、毎月開催されるイベントの映像制作の進行管理と、準備の段取りを担当しました。限られた準備期間のなか、毎回同じ品質を保つことが求められる案件でした。準備の流れをチェックリストとして型にし、毎回の抜け漏れを防ぐ仕組みをつくりました。約10か月にわたって継続して担当しました。", category: "Event", tools: ["Figma", "Photoshop", "Illustrator", "After Effects", "Blender", "Google Workspace", "Slack", "Notion"], title: "GOLD DISC at ZERO TOKYO", images: [work5, work5b, work5c], description: "2024.09–2025.06", role: "毎月開催のイベントを約10か月、継続して担当しました。準備の流れを型にして毎回の抜け漏れを防ぎ、回を重ねるごとに運営を安定させました。", videoUrl: null,    credits: ["Project Manager: Narumi Ishizu"] },
    { id: 6, detail: "プロジェクトマネージャーとして、制作側の窓口に立ち、制作スタッフのスケジュール管理と、クライアント側との確認・修正フローの管理を担当しました。確認の段階が多く、ひとつの戻しがスケジュール全体に影響しやすい案件でした。提出物と確認の日程を先回りで整理し、関係者への共有をこまめに行いました。CMはYouTubeで公開されています。", category: "CM", tools: ["Figma", "After Effects", "Google Workspace", "Slack", "Notion"], title: "UNIVERSAL STUDIOS JAPAN ハロウィーンCM「正気なんか、失え。」篇", images: [work6, work6b, work6c], description: "2025.08", role: "大手広告代理店がクライアントのCMで、制作側の窓口として進行を管理しました。確認の段階が多い案件だったため、提出物とスケジュールを先回りで整理し、流れを止めないことを意識しました。", videoUrl: "https://youtu.be/U7hwRn7Ovpw?si=AjhW1a8KCMs8KavB",    credits: [
        "Project Manager: Narumi Ishizu",
        "cl: DENTSU INC."
] },
    { id: 7, detail: "プロジェクトマネージャーとして、公演で使う5曲分の映像制作の進行管理と、各クリエイターとのスケジュール調整を担当しました。曲ごとに担当クリエイターが異なり、進み具合にばらつきがある案件でした。曲ごとの進行状況を早めに把握し、遅れが出そうなところから優先して調整しました。10名を超えるチームの足並みをそろえ、ひとつの公演として本番を迎えました。", category: "Live", tools: ["Figma", "After Effects", "Blender", "Google Workspace", "Slack", "Notion"], title: "野田洋次郎 Yojiro Noda welcomes you to WONDER BOY'S AKUMU CLUB at 東京ガーデンシアター", images: [work7, work7b, work7c], description: "2024.09", role: "曲ごとにクリエイターが異なる5曲分の映像を、ひとつの公演としてまとめました。進み具合のばらつきを早めに把握し、10名超のチームが足並みをそろえて本番を迎えられるよう調整しました。", videoUrl: null,    credits: [
"Director: Masaki Watanabe (maxilla)",
"Creative Producer: Kensuke Kidani (volvox), Sosuke Minamiura (volvox)",
"Producer: Takemi Inagaki",
"Motion Graphics Designer (M03 PAIN KILLER): Kairi Sato (tsuchifumazu)",
"3DCG Artist (M05 HOLY DAY HOLY): Hajime Kutsuwada",
"3DCG Artist (M07 EVERGREEN [KM Remix]): Haruhi Oshima",
"Director (M12 HYPER TOY): AVO (maxilla)",
"3DCG Artist (M12 HYPER TOY): Ai Ikeda",
"Motion Graphics Designer (M13 LAST LOVE LETTER): Shosei Iwata",
"3DCG Artist (M13 LAST LOVE LETTER): Ai Ikeda",
"Live Operation: watakemi (tsuchifumazu), Jura Nishizato",
"Live Camera Visual Designer: Shun Nagasawa",
"Live Camera System Engineer: Joe Ohara",
"Project Manager: Narumi Ishizu"
    ] },
    { id: 8, detail: "プロジェクトマネージャーとして、ライブ映像演出の素材制作の進行管理と、本番当日の現場との連携を担当しました。20名を超え、複数の会社にまたがる大規模なチームで、情報が埋もれやすい状況でした。「誰が・何を・いつまでに」を一覧にして共有し、素材の制作と本番当日の現場をつなぐ役割を担いました。大規模なチームでの進行を支え、公演の本番を実施しました。", category: "Live", tools: ["Figma", "After Effects", "Blender", "Google Workspace", "Slack", "Notion"], title: "Kroi Live Tour 2024-2025 \"Unspoil\" at PIA ARENA MM", images: [work8c, work8, work8b], description: "2025.02", role: "20名超、複数社にまたがる大規模なチームで、素材の制作と本番当日の現場をつなぐ役割を担いました。誰が何をいつまでに出すかを一覧で共有し、情報が埋もれない進行を心がけました。", videoUrl: null,    credits: [
"Director: Takuto Shimpo",
"Producer: Takemi Inagaki",
"Motion Designer: Asaka Kishida, Asuka Fujino, Mirai Shikiyama, Kosuke Inoue",
"CG Artist: Ai Ikeda, Haruhi Oshima, Hajime Kutsuwada, KENNY, Yusaku Kamata (zah), Takuma Takei (zah), Hiroaki Terada",
"Live Camera Visual Designer: Hajime Kutsuwada, Shun Nagasawa",
"Live Operation: Shun Nagasawa, Ikuma Nagano",
"Cameraman: Yuki Ono, Shuho Teramura, Denki Imahara, Kenji Omochi, Tomomi Iwaisako",
"Camera Assistant: Taichi Nagaoka (85mm inc.), Ryuta Yoshida (unlevel inc.)",
"Technical Director: Ryoutarou Ishihara (85mm inc.)",
"Switcher: Riki Yasuno",
"Photo: Daiki Miura",
"Project Manager: Narumi Ishizu"
    ] },
    { id: 9, detail: "プロジェクトマネージャーとして、ライブVJとライブカメラを担う少人数チームの段取りと、本番に向けた準備の進行管理を担当しました。フェス特有の短い準備期間と、転換時間の短さがある案件でした。事前確認を優先した段取りを組み、限られた転換時間のなかで本番を実施しました。", category: "Live", tools: ["Figma", "After Effects", "Blender", "Google Workspace", "Slack", "Notion"], title: "PAS TASTA SUMMER SONIC 2025 TOKYO Spotify Stage", images: [work9b, work9, work9c], description: "2025.08", role: "フェス特有の限られた準備時間の中で、ライブVJとライブカメラの少人数チームの段取りを組みました。転換の短い時間でも本番に間に合うよう、事前の確認を優先して進めました。", videoUrl: null,    credits: [
"Live VJ Director: tsuchifumazu (watakemi+Kairi Sato)",
"Live Camera: Taichi Nagaoka (85mm inc.)",
"Producer: Takemi Inagaki",
"Project Manager: Narumi Ishizu"
    ] },
]
