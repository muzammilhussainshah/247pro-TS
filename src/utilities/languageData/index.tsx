import { t } from 'i18next';

export const languageData = [

    {
        locale: 'en',
        translation: {
            Create_Your_Free_Account: `Create Your Free Account`,
            Welcome_to_247PRO: "Welcome to 247PRO",
            Please_provide_your_login_information: "Please provide your login information",
            Full_name: "Full name",
            Email: "Email",
            Next: "Next",
            Password: "Password",
            Login: `Login Your Account`,
            logintText:"Login",
            verifyBuisnessHeader: 'Help us to improve your experience by answering a few questions',
            Are_you_a_business: 'Are you a business?',
            yes: 'Yes',
            no: 'No',
            completeQuestions: `Complete these questions to receive job leads.`,
            Industry: "Industry",
            primarySpecialty: "Primary specialty",
            JobType: "Job type",
            ZipCode: "Zip code",
            MobilePhone: "Mobile phone",
            CompleteRegisration: "Complete Regisration",
            Verify: "Verify",
            RESEND_CODE: "RESEND CODE",
            resentText: "If you didn’t receive the code. Please click the button below.",
            enter_Code_Text: 'Enter 4 digit code sent to your mobile +1 (234) 567 8900.',
            Verify_Your_Mobile: "Verify Your Mobile",
            Forget_your_password: "Forget your password?",
            resetInfoMsg:"To reset your password please provide the information below.",
            Reset_Password:"Reset Password",
            Email_or_phone:"Email or phone",
            Remember_you_password :"Remember you password?",
        }
    },
    {
        locale: 'ch',
        translation: {
            Create_Your_Free_Account: `创建您的免费帐户`,
            Please_provide_your_login_information: "请提供您的登录信息",
            Full_name: "全名",
            verifyBuisnessHeader: '回答几个问题帮助我们改善您的体验',
            Are_you_a_business: '你是企业吗？',
            Email: "电子邮件",
            Next: "下一步",
            Password: "密码",
            Welcome_to_247PRO: "欢迎来到247PRO",
            Login: `登录您的帐户`,
            yes: '是的',
            no: '不',
            completeQuestions: `完成这些问题以获得工作机会。`,
            Industry: "行业",
            primarySpecialty: "主要专业",
            JobType: "工作类型",
            MobilePhone: "邮政编码",
            CompleteRegisration: "完成注册",
            Verify: "核实",
            ZipCode: "邮政编码",
            RESEND_CODE: "重新发送验证码",
            resentText: "如果您没有收到代码。 请点击下面的按钮。",
            enter_Code_Text: '输入发送至您手机 +1 (234) 567 8900 的 4 位数代码。',

            Verify_Your_Mobile: "验证您的手机",
            Forget_your_password: "忘记密码？",
            resetInfoMsg:"要重置您的密码，请提供以下信息。",
            Reset_Password:"重设密码",
            Email_or_phone:"邮件或者电话",

            Remember_you_password :"还记得你的密码吗？",
            logintText:"登录",

        }
    },
    {
        locale: 'es',
        translation: {
            Create_Your_Free_Account: `Crea tu cuenta gratuita`,
            Welcome_to_247PRO: "Bienvenido a 247PRO",
            Please_provide_your_login_information: "Por favor proporcione su información de inicio de sesión",
            Login: `inicie sesión en su cuenta`,
            Password: "Contraseña",
            verifyBuisnessHeader: 'Ayúdanos a mejorar tu experiencia respondiendo algunas preguntas',
            Next: "Siguiente",
            Full_name: "Nombre completo",
            Email: "Correo electrónico",
            Are_you_a_business: '¿Eres un negocio?',
            yes: 'Sí',
            no: 'No',
            completeQuestions: `Complete estas preguntas para recibir oportunidades de trabajo.`,
            Industry: "Industria",
            primarySpecialty: "especialidad primaria",
            JobType: "El tipo de trabajo",
            ZipCode: "Código postal",
            MobilePhone: "Código postal",
            CompleteRegisration: "Registro completo",
            Verify: "Verificar",
            RESEND_CODE: "REENVIAR CODIGO",
            resentText: "Si no recibiste el código. Por favor, haga clic en el botón de abajo.",
            enter_Code_Text: 'Ingresa el código de 4 dígitos enviado a tu móvil +1 (234) 567 8900.',
            Verify_Your_Mobile: "Verifica tu móvil",
            Forget_your_password: "¿Olvidaste tu contraseña?",
            resetInfoMsg:"Para restablecer su contraseña, proporcione la información a continuación.",
            Reset_Password:"Restablecer la contraseña",
            Email_or_phone:"Email o teléfono",
            Remember_you_password :"¿Recuerdas tu contraseña?",
            logintText:"Acceso",


        }
    }
];

export type languageProps = {
    id: string;
    name: string;
    code: string;
};

export const appLanguages: languageProps[] = [
    {
        id: '0',
        name: 'English',
        code: 'en'
    },
    {
        id: '1',
        name: 'chinese',
        code: 'ch'
    },
    {
        id: '5',
        name: 'Spanish',
        code: 'es'
    }
];
