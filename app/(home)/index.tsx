import { SignedIn, SignedOut, useUser, useClerk } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Page() {
    const { user } = useUser()
    const { signOut } = useClerk()

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <SignedIn>
                    <Text style={styles.welcomeText}>
                        Hello {user?.firstName} {user?.emailAddresses[0].emailAddress}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={() => signOut({ redirectUrl: '/' })}>
                        <MaterialIcons name="logout" size={20} color="#FFF" />
                        <Text style={styles.buttonText}>Sign Out</Text>
                    </TouchableOpacity>
                </SignedIn>
                <SignedOut>
                    <Link href="/(auth)/sign-in" style={styles.link}>
                        <MaterialIcons name="login" size={20} color="#FF5A5F" />
                        <Text style={styles.linkText}>Sign In</Text>
                    </Link>
                    <Link href="/(auth)/sign-up" style={styles.link}>
                        <MaterialIcons name="person-add" size={20} color="#FF5A5F" />
                        <Text style={styles.linkText}>Sign Up</Text>
                    </Link>
                </SignedOut>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#F5F5F5',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 18,
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FF5A5F',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#FFF',
        marginLeft: 5,
    },
    link: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    linkText: {
        fontSize: 16,
        color: '#FF5A5F',
        marginLeft: 5,
    },
})
