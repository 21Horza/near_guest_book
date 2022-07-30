NEAR Guest Book
==========
 Guest book to leave any messages and send donations via testnet NEAR account. Demo is available at https://21horza.github.io/near_guest_book/


How to use
===========

Step 1: Log in first using NEAR testnet account
-------------------------------------

<img width="880" alt="Screenshot 2022-07-30 at 20 42 59" src="https://user-images.githubusercontent.com/81642088/181915325-97470abb-4a37-4f4b-8d78-088a17591344.png">


Step 2: Write a message
-------------------------------------

![Book](https://user-images.githubusercontent.com/81642088/181915370-d2c199cc-ceb2-4e22-9426-4af4a914fc5f.gif)




Exploring The Code
==================

1. The backend code lives in the `/assembly` folder. This code gets deployed to
   the NEAR blockchain when you run `yarn deploy:contract`. This sort of
   code-that-runs-on-a-blockchain is called a "smart contract" – [learn more
   about NEAR smart contracts][smart contract docs].
2. The frontend code lives in the `/src` folder.
   [/src/index.html](/src/index.html) is a great place to start exploring. Note
   that it loads in `/src/index.js`, where you can learn how the frontend
   connects to the NEAR blockchain.
3. Tests: there are different kinds of tests for the frontend and backend. The
   backend code gets tested with the [asp] command for running the backend
   AssemblyScript tests, and [jest] for running frontend tests. You can run
   both of these at once with `yarn test`.

Both contract and client-side code will auto-reload as you change source files.
