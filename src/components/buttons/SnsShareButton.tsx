import {
  TwitterShareButton,
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  TwitterIcon,
  FacebookIcon,
  HatenaIcon,
  LineIcon,
} from "react-share";

type Props = {
  title: string;
  blogId: string
}


export default function SnsShareButton(props: Props){

  return(
    <>
      <div>
        <TwitterShareButton className="mx-3" url={`${process.env.NEXT_PUBLIC_HOST}/blog/${props.blogId}`} title={props.title}>
          <TwitterIcon size={32} />
        </TwitterShareButton>
        <FacebookShareButton className="mx-3" url={`${process.env.NEXT_PUBLIC_HOST}/blog/${props.blogId}`} title={props.title}>
          <FacebookIcon size={32} />
        </FacebookShareButton>
        <HatenaShareButton className="mx-3" url={`${process.env.NEXT_PUBLIC_HOST}/blog/${props.blogId}`} title={props.title}>
          <HatenaIcon size={32} />
        </HatenaShareButton>
        <LineShareButton className="mx-3" url={`${process.env.NEXT_PUBLIC_HOST}/blog/${props.blogId}`} title={props.title}>
          <LineIcon size={32} />
        </LineShareButton>
      </div>
    </>
  );
}