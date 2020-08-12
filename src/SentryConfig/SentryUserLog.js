
import * as Sentry from '@sentry/react';

export const SentryUserLog = (error, user) => {
    const user_data = {
        id: user.id,
        username: user.name
    }
    Sentry.configureScope(scope =>
        scope.setTag("my-tag", "my value")
            .setUser(user_data)
            .setTag("CustomTag", "User_Tag_Info")
    )
    return Sentry.captureMessage(error);
}

