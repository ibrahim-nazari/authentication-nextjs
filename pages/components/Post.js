import React from 'react'
import Link from "next/link"
const post={title:"Adapting New Technology",img:"uploads/post1.jpeg",author:"Ibrahim Nazari",date:"jan 22, 2019",description:`Many schools have adapted to new technology with no problems whatsoever. Others, though, continue to be while succeeding on their behalf.

The colleges which have had probably the most success are individuals that can pay the best personal computers, which will make adjusting to the most recent technology an simpler task. Since teachers realize that new technology means a great deal to students, they don’t mind studying how you can take full advantage of it.

Oftentimes, public schools don’t have the financial capability to provide new technology to students. Rather, they’re stuck utilizing the same old computers, software, along with other hardware. In addition to this, schools which are battling financially also find it hard to purchase system maintenance.

There’s no rule stating that software be more effective teaching tools than conventional methods. That being stated, many schools are relocating this direction because new technologies are taking around the globe. If you opt for new technology inside your classroom, you should monitor students to find out if they’re making the expected progress. Quite simply, new technology should result in a better learning atmosphere along with a more effective classroom.

The way in which you adjust to new technology depends upon your school’s particular budget. That being stated, you will find options that may eliminate large expenses while still supplying new technology must students.

Take this case for instance:

After I would be a senior high school student there is a pc lab, shared by a lot of students. At that time, though, we did not need new technology because it was not yet been invented. Obviously, we could learn enough to determine where things were headed soon.

In those days, since new technology was still being in early growth stages, less cash was required for equipment, maintenance, and teacher training.

Another way of adjusting to new technology includes benefiting from mostly advanced technology, including software and computers in most classrooms. This is way better than getting just one computer lab for a lot of students to talk about. The primary benefit is much more time using the technology for every student, in addition to a bigger space for working.

Students who are utilized to learning through classical means could have a hard time adjusting to new technology. Because of this, expectations of these students is going to be under individuals for future students. Consequently, schools will always be challenged by having an imbalance because they attempt to get a lot of students on a single page.

Fortunately, the price of new technologies are falling. Which means that more schools, no matter financial means, can implement the most recent technology. All schools should research the advantages of new technology, after which do the things they can to apply these power tools into every classroom.`}
const Post = () => {
    
    return (
        <div className="col-md-4 p-2 mb-5">
            <div className="col-md-12">
            <h5>{post.title}</h5>
            <img src="uploads/post1.jpeg" style={{width:"100%"}} />
            <p>{post.author} <span classNam="text-muted">On <strong>{post.date}</strong></span></p>
            <div className="my-3">
            {post.description.slice(0,100)}...
            </div>
            <Link href="/post?id=40405f0g04">
            <a className="btn btn-outline-info btn-sm">Read More</a>
            </Link>
            
            </div>
           
        </div>
    )
}

export default Post
