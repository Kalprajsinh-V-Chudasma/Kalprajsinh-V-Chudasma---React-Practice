export default function Settings() {
    return (
        <main className="flex flex-col flex-1 p-4">
            <h1 className="text-2xl font-bold mt-4">Settings</h1>
            <p className="text-muted-foreground mt-2">Manage your app preferences and configurations here.</p>
            
            <div className="mt-8 space-y-6">
                <div>
                    <h2 className="text-xl font-semibold">Profile Settings</h2>
                    <p className="text-sm text-muted-foreground mt-1">Update your personal information and profile picture.</p>
                </div>
                
                <div className="h-px bg-border my-4" />
                
                <div>
                    <h2 className="text-xl font-semibold">Appearance</h2>
                    <p className="text-sm text-muted-foreground mt-1">Customize the look and feel of the application.</p>
                </div>

                <div className="h-px bg-border my-4" />

                <div>
                    <h2 className="text-xl font-semibold">Notifications</h2>
                    <p className="text-sm text-muted-foreground mt-1">Configure how you want to receive updates and alerts.</p>
                </div>
            </div>
        </main>
    )
}
