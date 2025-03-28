import type { IPost } from '~/types';

export const usePostsStore = defineStore('posts', () => {
	const { query } = useRoute();
	const router = useRouter();

	const currPage = ref<number>(+query.page!);
	const textRef = ref();
	const isOverflowing = ref<boolean>(false);
	const countPages = ref<number>(1);
	const pagesArr = ref<number[]>([]);

	const getCurrentPage = () => {
		const { query } = useRoute();
		const currentPage = query.page ? Number(query.page) : 0;
		return currentPage;
	};

	const currentPage = getCurrentPage();

	const elems = reactive({
		begin: currPage.value ? (currPage.value - 1) * 8 : 0,
		end: currPage.value ? currPage.value * 8 : 8,
	});

	const pages = reactive({
		begin: currPage.value > 5 ? currPage.value - 5 : 0,
		end: currPage.value > 5 ? currPage.value : 5,
	});

	const updatePosts = (page: number = currPage.value) => {
		elems.begin = (page - 1) * 8;
		elems.end = page * 8;
	};

	const goToPage = (page: number) => {
		currPage.value = page;
		router.push({
			query: { page: page },
		});
		updatePosts(page);
	};

	const goNextPage = () => {
		const currentPage = getCurrentPage();
		const nextPage = currentPage + 1;

		if (nextPage <= countPages.value) {
			currPage.value = nextPage;
			router.push({
				query: { page: nextPage },
			});
			updatePosts(nextPage);

			if (nextPage > pages.end) {
				pages.begin = nextPage - 5;
				pages.end = nextPage;
			}
		} else {
			router.push({
				query: { page: currentPage },
			});
			updatePosts(currentPage);
		}
	};

	const getPosts = async () => {
		const { data } = await useCustomFetch<IPost[]>('/posts');
		return data;
	};

	const getPost = async (id: string) => {
		const { data } = await useCustomFetch<IPost>(`/posts/${id}`);
		return data;
	};

	return {
		getPosts,
		getPost,
		elems,
		currPage,
		pages,
		textRef,
		isOverflowing,
		countPages,
		pagesArr,
		goToPage,
		currentPage,
		goNextPage,
	};
});
