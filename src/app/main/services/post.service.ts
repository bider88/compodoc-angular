import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { HttpClient } from '@angular/common/http';
/**
 * Service comment
 *
 * @export
 * @class PostService
 */
@Injectable({
  providedIn: 'root'
})
export class PostService {

  /**
   * Creates an instance of PostService.
   * @param {HttpClient} http
   * @memberof PostService
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
   * @param {number} idPost Id of post to get a specific Post
   * @returns {Post} An observable post based on id of Post
  */
  getPost(idPost: number): Observable<Post> {
    return of()
  }

  /**
   * @deprecated Deprecated since version 2.0
   * @param {Post} post Post object to get a specific Post
   * @returns {any} Unspecified post model
   */
  getOnePost(post: Post): Observable<any> {
    return of()
  }

  /**
   * Get list of posts
   *
   * @memberof PostService
   */
  getPosts() {}

  /**
   * Create a new Post
   *
   * @memberof PostService
   */
  createPost() {}

  /**
   * Update a post
   *
   * @memberof PostService
   */
  updatePost() {}

  /**
   * Delete a Post
   *
   * @memberof PostService
   */
  deletePost() {}
}
