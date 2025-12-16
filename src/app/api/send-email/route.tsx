import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactFormEmail } from "@/emails/ContactFormEmail";
import React from "react";

// RESEND_API_KEY는 실제 배포 시 환경 변수로 설정해야 합니다.
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = "eunsung21@nate.com"; // 메일을 받을 주소

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "모든 필드를 입력해주세요." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "noreply@trasys.net", // 인증된 도메인 주소 사용
      to: [toEmail],
      subject: `[Trasys 문의] ${subject}`,
      replyTo: email, // 답장 주소를 문의한 고객의 이메일로 설정
      react: <ContactFormEmail name={name} email={email} message={message} />,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json(
        { error: "이메일 전송에 실패했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "이메일이 성공적으로 전송되었습니다." },
      { status: 200 }
    );
  } catch (e) {
    console.error("API Route Error:", e);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
