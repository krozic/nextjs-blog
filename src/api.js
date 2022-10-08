import path from 'path'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import Image from 'next/image'

export const getSlugs = () => {
	// const files = fs.readdirSync(path.join('posts'))
	// const slugs = files.map(filename => {
	// 	const slug = filename.replace('.mdx', '')
	// 	return slug
	// })
	const slugs = sync('posts/*.mdx').map(filename => {
		return filename.replace(/posts\/|.mdx/g, '')
	})

	return slugs
}

export const getPosts = () => {
	const files = sync('posts/*.mdx')
	// const filesClean = files2.map((file) => file.replace(/posts\/|.mdx/g, ''))

	// console.log(filesClean)

	const posts = files.map(filename => {
		const slug = filename.replace('posts/', '').replace('.mdx', '')
		// const slug= filename.replace(/posts\/|.mdx/g, '')
		const markdownWithMeta = fs.readFileSync(path.join(filename), 'utf-8')
		const { data: frontmatter, content } = matter(markdownWithMeta)

		// var sizeOf = require('image-size')
		// var dimensions = sizeOf(path.join(frontmatter.featuredImg))
		// console.log(dimensions)

		return {
			slug,
			frontmatter,
			content,
		}
	})

	// const postsSorted = posts.sort((a, b) => a.frontmatter.date > b.frontmatter.date)
	const postsSorted = posts.sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date))


	return postsSorted
}

export const getTags = () => {
	// const files = fs.readdirSync(path.join('posts'))
	const files = sync('posts/*.mdx')

	const tags = files.map(filename => {
		// const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
		const markdownWithMeta = fs.readFileSync(filename, 'utf-8')
		const { data: frontmatter } = matter(markdownWithMeta)

		return frontmatter.tags
	})

	const tagsUnique = Array.from(new Set(tags.flat()))
	const tagsAll = tags.flat()

	const tagObj = {}

	for(let i = 0; i < tagsUnique.length; i++) {
		tagObj[tagsUnique[i]] = tagsAll.filter(x => x === tagsUnique[i]).length
	}

	// Object.entries(tagObj).sort(([,a],[,b]) => a-b).reduce((r, [k, v]) )
	tagsUnique.sort((a, b) => tagObj[b] - tagObj[a])

	return {
		tags: tagsUnique,
		count: tagObj
	}
}

export const getPortfolio = () => {
	// const posts = getPosts()
	// const portfolio = posts.filter(post => post.frontmatter.portfolio)
	// const portfolio = getPosts().filter(post => post.frontmatter.portfolio)
	const portfolio = getPosts().filter(post => post.frontmatter.type === 'Portfolio')

	return portfolio
}

export const getProjects = () => {
	const projects = getPosts().filter(post => post.frontmatter.type === 'Portfolio' || post.frontmatter.type === 'Project')

	return projects
}

export const getBlogs = () => {
	const blogs = getPosts().filter(post => post.frontmatter.type === 'Blog')

	return blogs
}

export const getPostfromSlug = (slug) => {
	const post = getPosts().filter(post => post.slug === slug)

	return post
}

