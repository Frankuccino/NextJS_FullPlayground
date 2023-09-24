import type { NextAuthOptions } from 'next-auth';
import CredentialProviders from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        CredentialProviders({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Username"
                }, 
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password"
                }
            },
            async authorize(credentials) {
                // TODO: Get data from database of user
                //https://next-auth.js.org/configuration/providers/credentials
                // Example below is a hardcoded example
                const user = { id: "8", name: "Jean", password: "damn" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                }
            }
        })

    ]
    , pages: {
        // This pages is where the route of your application that does the actions: HOVER on pages to see the properties
        // signIn: "/login",
        // signOut: "",
        // error: "", 
        // verifyRequest: ""
    }
    // session: {}
}