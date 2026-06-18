<template>
    <main class="about-us">
        <section class="support-hero">
            <p class="support-eyebrow">App Support</p>
            <h1>技术支持</h1>
            <p class="support-intro">
                如果您在使用应用过程中遇到问题，或需要咨询功能使用、账号、订单、隐私等相关事项，
                可以通过以下方式联系我们。我们会尽快为您提供帮助。
            </p>
        </section>

        <section class="support-section">
            <h2>联系我们</h2>
            <ul class="support-list">
                <li>
                    <span>客服邮箱</span>
                    <a href="mailto:544554903@qq.com">544554903@qq.com</a>
                </li>
                <li>
                    <span>支持范围</span>
                    <p>应用使用问题、登录异常、功能反馈、问题排查、隐私与数据相关咨询。</p>
                </li>
                <li>
                    <span>响应时间</span>
                    <p>通常会在 1-3 个工作日内回复您的支持请求。</p>
                </li>
            </ul>
        </section>

        <section class="support-section">
            <h2>提交问题时建议提供</h2>
            <ul class="support-tips">
                <li>您的设备型号和系统版本。</li>
                <li>应用版本号。</li>
                <li>问题出现的具体步骤、时间和截图。</li>
                <li>可用于回复您的邮箱或其他联系方式。</li>
            </ul>
        </section>

        <section class="support-section">
            <h2>常见支持内容</h2>
            <div class="support-grid">
                <article>
                    <h3>功能使用</h3>
                    <p>如果您不确定某项功能如何使用，可以发送邮件说明您的使用场景。</p>
                </article>
                <article>
                    <h3>账号与数据</h3>
                    <p>如需处理账号、数据或隐私相关问题，请在邮件中注明您的诉求。</p>
                </article>
                <article>
                    <h3>问题反馈</h3>
                    <p>如果应用出现异常，请尽量提供复现步骤，便于我们定位并修复问题。</p>
                </article>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        name: 'AboutUs',
        components: {
        }
    }
</script>

<style scoped lang="less">
    .about-us {
        max-width: 960px;
        min-height: calc(100% - 96px);
        margin: 0 auto;
        padding: 42px;
        color: #213547;
        background: rgba(255, 255, 255, 0.94);
        border-radius: 8px;
        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
        box-sizing: border-box;
    }

    .support-hero {
        margin-bottom: 34px;

        h1 {
            margin: 0 0 14px;
            font-size: 36px;
            line-height: 1.25;
        }
    }

    .support-eyebrow {
        margin: 0 0 8px;
        color: #0f766e;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .support-intro {
        max-width: 760px;
        margin: 0;
        color: #4b5563;
        font-size: 18px;
        line-height: 1.8;
    }

    .support-section {
        padding-top: 26px;
        border-top: 1px solid rgba(15, 118, 110, 0.18);

        & + .support-section {
            margin-top: 28px;
        }

        h2 {
            margin: 0 0 18px;
            color: #111827;
            font-size: 24px;
        }
    }

    .support-list,
    .support-tips {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .support-list {
        li {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 18px;
            padding: 16px 0;
            border-bottom: 1px solid rgba(148, 163, 184, 0.28);
        }

        span {
            color: #111827;
            font-weight: 700;
        }

        p {
            margin: 0;
            color: #4b5563;
            line-height: 1.7;
        }

        a {
            color: #0f766e;
            font-weight: 700;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .support-tips {
        display: grid;
        gap: 12px;
        color: #4b5563;
        line-height: 1.7;

        li {
            padding-left: 18px;
            position: relative;

            &::before {
                content: "";
                width: 6px;
                height: 6px;
                position: absolute;
                top: 14px;
                left: 0;
                border-radius: 50%;
                background: #0f766e;
            }
        }
    }

    .support-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;

        article {
            padding: 20px;
            background: #f8fafc;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
        }

        h3 {
            margin: 0 0 10px;
            color: #111827;
            font-size: 18px;
        }

        p {
            margin: 0;
            color: #4b5563;
            font-size: 16px;
            line-height: 1.7;
        }
    }

    @media (max-width: 720px) {
        .about-us {
            min-height: calc(100% - 40px);
            padding: 24px 18px;
        }

        .support-hero h1 {
            font-size: 30px;
        }

        .support-intro {
            font-size: 16px;
        }

        .support-list li,
        .support-grid {
            grid-template-columns: 1fr;
        }

        .support-list li {
            gap: 8px;
        }
    }
</style>
