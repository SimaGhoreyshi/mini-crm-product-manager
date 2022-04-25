import styled from "styled-components";
import { colors } from "../../assets";
import truck from "../../common/static/Tarrabarnet-freight-truck.jpg";
import { Span } from "../../components";

const secondary = colors.secondary;

const TruckContainer = styled.div`
  width: 100%;
  background-image: url(${truck});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: calc(100vh - 10rem);
  padding: 2rem;
  display: flex;
  place-items: end;
`;

const Paragraph = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    transparent,
    rgba(256, 256, 256, 0.8)
  );
  border-radius: 0.3rem;
  padding: 2rem 1rem 1rem;
`;

export const AboutUs = () => {
  return (
    <TruckContainer>
      <Paragraph>
        <Span
          color="white"
          bold
          size="1.5"
          shadow={`0 0 1rem ${secondary}, 0 0 0.2rem grey`}
        >
          درباره ما
        </Span>
        <br />
        <Span size="1.2">
          <Span bold color={secondary}>
            ترابرنت
          </Span>{" "}
          حاصل همکاری استراتژیک چندین شرکت دانش‌ بنیان و فناور است که بیش ترین
          تجربه و سابقه در اجرای پروژ ه ‌های حمل‌ و نقل هوشمند در کشور را دارند.
          ترابرنت به‌عنوان اولین و با سابقه ‌ترین بازارگاه اینترنتی حمل ‌و نقل
          کالا، راهکاری جامع و یکپارچه برای تسهیل فرآیند حمل‌ و نقل کالا در کشور
          است. صاحبان کالا می‌ توانند باتوجه به نوع و خصوصیات محموله خود، وسیله
          نقلیه مورد نیاز برای حمل بار خود را اعلام نمایند.ترابرنت با ارائه
          خدمات باکیفیت، بهینه، هوشمند و مطمئن توانسته است در تسهیل و تسریع روند
          حمل و نقل کالا تاثیرگذار باشد. از سوی دیگر نبود بار برگشتی برای کامیون
          ‌ها، صف ‌های طولانی برای پیدا کردن بار، حضور واسطه ‌ها، پیدا کردن
          محموله متناسب با بارگیر و مسیریابی بهینه از جمله دغدغه ‌های اصلی
          مالکان ناوگان در کشور می ‌باشند که از طریق سرویس‌ های مبتنی بر اینترنت
          قابل حل هستند. ترابرنت با ورود به صنعت حمل‌ ونقل هوشمند و اینترنتی با
          هدف ایجاد بستری مناسب در راستای رفع موانع موجود به خدمت‌ رسانی به
          جامعه رانندگان و صنعت گران می ‌پردازد.
        </Span>
      </Paragraph>
    </TruckContainer>
  );
};
