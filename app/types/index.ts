export interface IPost {
	id: string;
	createdAt: string;
	title: string;
	preview: string;
	image: string;
	description: string;
}

export interface IPageTitleProps {
	text?: string;
}

export interface IPaginationButtonProps {
	page: number;
	handleClick: (page: number) => void;
}
